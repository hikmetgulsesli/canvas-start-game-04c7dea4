import { useEffect, useMemo } from "react";
import {
  ProdCanvasStartGameProvider,
  useProdCanvasStartGameStates,
  useProdCanvasStartGameStore,
} from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import {
  PlayPageCanvasStartGame,
  type PlayPageCanvasStartGameActionCallbacks,
} from "./screens/PlayPageCanvasStartGame";
import { SetfarmTestBridgeBridge } from "./test/bridge";

function PlayRoute() {
  const store = useProdCanvasStartGameStore();
  const states = useProdCanvasStartGameStates();
  const actions = useMemo<PlayPageCanvasStartGameActionCallbacks>(
    () => ({
      "start-game-1": store.startGame,
    }),
    [store],
  );

  useEffect(() => {
    if (window.location.pathname !== "/play") {
      window.history.replaceState(null, "", "/play");
    }
  }, []);

  return (
    <div
      data-setfarm-root="canvas-start-game"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white"
    >
      <PlayPageCanvasStartGame
        actions={actions}
        message={states.STATE_APPLICATION_STATE.message}
        highScore={states.STATE_HIGH_SCORE_STATE.value}
      />
      <SetfarmTestBridgeBridge />
    </div>
  );
}

export default function App() {
  return (
    <ProdCanvasStartGameProvider>
      <PlayRoute />
    </ProdCanvasStartGameProvider>
  );
}
