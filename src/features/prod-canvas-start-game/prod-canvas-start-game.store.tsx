import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createProdCanvasStartGameFixture } from "../../__fixtures__/prod-canvas-start-game.fixture";
import { act_start_game } from "../surf-play-page/act_start_game";
import { GameRuntime } from "../../game/game-runtime";
import {
  ProdCanvasStartGameRepository,
  type HighScoreRepository,
} from "./prod-canvas-start-game.repo";
import type { ProdCanvasStartGameStates } from "./prod-canvas-start-game.types";

type StoreListener = () => void;

export class ProdCanvasStartGameStore {
  private snapshot: ProdCanvasStartGameStates;
  private readonly listeners = new Set<StoreListener>();
  private readonly runtime = new GameRuntime();

  constructor(private readonly repository: HighScoreRepository = new ProdCanvasStartGameRepository()) {
    const initial = createProdCanvasStartGameFixture();
    this.snapshot = {
      ...initial,
      STATE_HIGH_SCORE_STATE: {
        value: repository.readHighScore(),
      },
    };
  }

  getSnapshot = (): ProdCanvasStartGameStates => this.snapshot;

  subscribe = (listener: StoreListener): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  startGame = (): void => {
    this.runtime.start();
    const next = act_start_game(this.snapshot);
    this.repository.writeHighScore(0);
    this.snapshot = next;
    this.listeners.forEach((listener) => listener());
  };
}

const ProdCanvasStartGameStoreContext = createContext<ProdCanvasStartGameStore | null>(null);

export interface ProdCanvasStartGameProviderProps {
  children: ReactNode;
  store?: ProdCanvasStartGameStore;
}

export function ProdCanvasStartGameProvider({
  children,
  store,
}: ProdCanvasStartGameProviderProps) {
  const value = useMemo(() => store ?? new ProdCanvasStartGameStore(), [store]);
  return (
    <ProdCanvasStartGameStoreContext.Provider value={value}>
      {children}
    </ProdCanvasStartGameStoreContext.Provider>
  );
}

export function useProdCanvasStartGameStore(): ProdCanvasStartGameStore {
  const store = useContext(ProdCanvasStartGameStoreContext);
  if (!store) throw new Error("PROD_CANVAS_START_GAME_STORE_UNAVAILABLE");
  return store;
}

export function useProdCanvasStartGameStates(): ProdCanvasStartGameStates {
  const store = useProdCanvasStartGameStore();
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
}
