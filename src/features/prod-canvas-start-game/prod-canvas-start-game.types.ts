export const ACT_START_GAME = "ACT_START_GAME" as const;

export type ApplicationStatus = "ready" | "playing";

export interface ApplicationState {
  message: string;
  status: ApplicationStatus;
}

export interface HighScoreState {
  value: number | null;
}

export interface ProdCanvasStartGameStates {
  STATE_APPLICATION_STATE: ApplicationState;
  STATE_HIGH_SCORE_STATE: HighScoreState;
}

export interface StartGameActionInvocation {
  actionRef: typeof ACT_START_GAME;
  input?: Record<string, never>;
}
