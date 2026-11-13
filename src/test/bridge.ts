import { useEffect } from "react";
import { useProdCanvasStartGameStore } from "../features/prod-canvas-start-game/prod-canvas-start-game.store";
import {
  ACT_START_GAME,
  type ProdCanvasStartGameStates,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export interface SetfarmTestBridge {
  states: ProdCanvasStartGameStates;
  invokeAction(
    actionRef: string | { actionRef?: string },
    input?: Record<string, unknown>,
  ): ProdCanvasStartGameStates;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

export function SetfarmTestBridgeBridge() {
  const store = useProdCanvasStartGameStore();

  useEffect(() => {
    const bridge: SetfarmTestBridge = {
      states: store.getSnapshot(),
      invokeAction: (actionRef) => {
        const resolvedActionRef =
          typeof actionRef === "string" ? actionRef : actionRef.actionRef;
        if (resolvedActionRef !== ACT_START_GAME) {
          throw new Error("UNKNOWN_ACTION");
        }
        store.startGame();
        bridge.states = store.getSnapshot();
        return bridge.states;
      },
    };

    const unsubscribe = store.subscribe(() => {
      bridge.states = store.getSnapshot();
    });

    window.__SETFARM_TEST_BRIDGE__ = bridge;
    window.__SETFARM_SCENARIO_MODE__ = "manual";

    return () => {
      unsubscribe();
      if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
        delete window.__SETFARM_TEST_BRIDGE__;
      }
    };
  }, [store]);

  return null;
}
