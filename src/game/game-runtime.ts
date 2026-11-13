export type GameRuntimeStatus = "ready" | "playing";

export class GameRuntime {
  private status: GameRuntimeStatus = "ready";

  start(): void {
    this.status = "playing";
  }

  getStatus(): GameRuntimeStatus {
    return this.status;
  }
}
