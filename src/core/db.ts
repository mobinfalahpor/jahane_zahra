import { openDB, type IDBPDatabase } from 'idb';
import type { UniversePersistedState } from './types';

const DB_NAME = 'our-little-universe-db';
const DB_VERSION = 1;
const STORE_NAME = 'universe_state';
const STATE_KEY = 'main_v1';
const LS_BACKUP_KEY = 'olu_universe_backup_v1';

let dbPromise: Promise<IDBPDatabase> | null = null;
const memoryFallback = new Map<string, UniversePersistedState>();

function getDb() {
  if (!dbPromise && typeof indexedDB !== 'undefined') {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      },
    });
  }
  return dbPromise;
}

function isPlainRecord(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}

function readLocalBackup(): UniversePersistedState | null {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(LS_BACKUP_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isPlainRecord(parsed)) return null;
    return parsed as unknown as UniversePersistedState;
  } catch {
    return null;
  }
}

export function saveUniverseStateSyncMirror(state: UniversePersistedState): void {
  memoryFallback.set(STATE_KEY, state);
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return;
  try {
    window.localStorage.setItem(LS_BACKUP_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota or private-mode errors gracefully
  }
}

function pickFresherValidState(
  idbData: UniversePersistedState | null,
  backupData: UniversePersistedState | null
): UniversePersistedState | null {
  if (idbData && backupData) {
    const idbTime = Math.max(idbData.updatedAt ?? 0, idbData.home?.updatedAt ?? 0);
    const lsTime = Math.max(backupData.updatedAt ?? 0, backupData.home?.updatedAt ?? 0);
    if (lsTime > idbTime) {
      return backupData;
    }
    return idbData;
  }
  return idbData ?? backupData ?? memoryFallback.get(STATE_KEY) ?? null;
}

export async function loadUniverseState(): Promise<UniversePersistedState | null> {
  const backupData = readLocalBackup();
  let idbData: UniversePersistedState | null = null;
  try {
    const db = await getDb();
    if (db) {
      const raw = await db.get(STORE_NAME, STATE_KEY);
      if (isPlainRecord(raw)) {
        idbData = raw as unknown as UniversePersistedState;
      }
    }
  } catch {
    // Fall back to localStorage backup or in-memory mirror
  }
  return pickFresherValidState(idbData, backupData);
}

export async function saveUniverseState(state: UniversePersistedState): Promise<void> {
  saveUniverseStateSyncMirror(state);
  try {
    const db = await getDb();
    if (!db) return;
    await db.put(STORE_NAME, state, STATE_KEY);
  } catch {
    // Synchronous localStorage & memory fallbacks already updated
  }
}

export async function clearUniverseState(): Promise<void> {
  memoryFallback.clear();
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    try {
      window.localStorage.removeItem(LS_BACKUP_KEY);
    } catch {
      // Ignore
    }
  }
  try {
    const db = await getDb();
    if (!db) return;
    await db.delete(STORE_NAME, STATE_KEY);
  } catch {
    // Ignore
  }
}
