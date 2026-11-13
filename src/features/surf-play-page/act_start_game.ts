import type { ProdCanvasStartGameStates } from "../prod-canvas-start-game/prod-canvas-start-game.types";

export function act_start_game(
  current: ProdCanvasStartGameStates,
): ProdCanvasStartGameStates {
  return {
    STATE_APPLICATION_STATE: {
      ...current.STATE_APPLICATION_STATE,
      status: "playing",
      message: "Game started",
    },
    STATE_HIGH_SCORE_STATE: {
      value: 0,
    },
  };
}
