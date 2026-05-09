// localStorage persistence with retry and reset logic

const STORAGE_KEY = "floraops_state";
const MAX_RETRIES = 3;
const RETRY_DELAY = 300;

export class StorageError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = "StorageError";
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function saveState<T>(state: T, retries = MAX_RETRIES): Promise<void> {
  const payload = JSON.stringify(state);
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      localStorage.setItem(STORAGE_KEY, payload);
      return;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      // QuotaExceededError or other transient issues
      if (attempt < retries) {
        await sleep(RETRY_DELAY * attempt);
      }
    }
  }

  throw new StorageError(
    lastError?.message || "Failed to save state to localStorage",
    "SAVE_FAILED"
  );
}

export function loadState<T>(defaultValue: T): { data: T; error: string | null } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { data: defaultValue, error: null };
    const parsed = JSON.parse(raw) as T;
    return { data: parsed, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { data: defaultValue, error: message };
  }
}

export function resetStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function getStorageSize(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || "";
    return new Blob([raw]).size;
  } catch {
    return 0;
  }
}

export function isStorageAvailable(): boolean {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
