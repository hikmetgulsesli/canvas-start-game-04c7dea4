import type { ProdCanvasStartGameStates } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export const PROD_CANVAS_START_GAME_INITIAL_STATE: Readonly<ProdCanvasStartGameStates> = Object.freeze({
  STATE_APPLICATION_STATE: Object.freeze({
    message: "",
    status: "ready" as const,
  }),
  STATE_HIGH_SCORE_STATE: Object.freeze({
    value: null,
  }),
});

export function createProdCanvasStartGameFixture(): ProdCanvasStartGameStates {
  return {
    STATE_APPLICATION_STATE: {
      ...PROD_CANVAS_START_GAME_INITIAL_STATE.STATE_APPLICATION_STATE,
    },
    STATE_HIGH_SCORE_STATE: {
      ...PROD_CANVAS_START_GAME_INITIAL_STATE.STATE_HIGH_SCORE_STATE,
    },
  };
}
