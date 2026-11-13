export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.canvas_start_game.high_score_local_storage.v1";

export interface HighScoreRepository {
  readHighScore(): number | null;
  writeHighScore(value: number): void;
}

function isValidHighScore(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function decodeHighScore(serialized: string | null): number | null {
  if (serialized === null) return null;

  try {
    const parsed: unknown = JSON.parse(serialized);
    if (isValidHighScore(parsed)) return parsed;
    if (typeof parsed !== "object" || parsed === null) return null;

    const record = parsed as Record<string, unknown>;
    for (const key of ["highScore", "HighScore", "value"]) {
      const candidate = record[key];
      if (isValidHighScore(candidate)) return candidate;
    }
  } catch {
    return null;
  }

  return null;
}

export class ProdCanvasStartGameRepository implements HighScoreRepository {
  constructor(private readonly storage?: Storage) {}

  private resolveStorage(): Storage | null {
    if (this.storage) return this.storage;
    if (typeof window === "undefined") return null;

    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }

  readHighScore(): number | null {
    const storage = this.resolveStorage();
    if (!storage) return null;

    try {
      return decodeHighScore(storage.getItem(HIGH_SCORE_STORAGE_KEY));
    } catch {
      return null;
    }
  }

  writeHighScore(value: number): void {
    if (!isValidHighScore(value)) {
      throw new Error("HIGH_SCORE_INVALID");
    }

    const storage = this.resolveStorage();
    if (!storage) return;

    try {
      storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify({ highScore: value }));
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
  }
}
