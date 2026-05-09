import { useReducer, useCallback, useEffect } from "react";
import type {
  AppState,
  Screen,
  Task,
  Equipment,
  MaintenanceRecord,
  Alert,
  UserProfile,
  AppSettings,
  FilterState,
} from "../types/domain";
import {
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
  DEFAULT_FILTERS,
  INITIAL_TASKS,
  INITIAL_EQUIPMENT,
  INITIAL_MAINTENANCE,
  INITIAL_ALERTS,
} from "../types/domain";
import { saveState, loadState, resetStorage } from "../utils/storage";

export type Action =
  | { type: "NAVIGATE"; screen: Screen }
  | { type: "GO_BACK" }
  | { type: "UPDATE_TASKS"; tasks: Task[] }
  | { type: "UPDATE_EQUIPMENT"; equipment: Equipment[] }
  | { type: "UPDATE_MAINTENANCE"; maintenanceLog: MaintenanceRecord[] }
  | { type: "UPDATE_ALERTS"; alerts: Alert[] }
  | { type: "ACKNOWLEDGE_ALERT"; alertId: string }
  | { type: "UPDATE_PROFILE"; profile: UserProfile }
  | { type: "UPDATE_SETTINGS"; settings: AppSettings }
  | { type: "UPDATE_FILTERS"; filters: FilterState }
  | { type: "RESET_FILTERS" }
  | { type: "SET_STORAGE_ERROR"; error: string | null }
  | { type: "RESET_STORAGE" }
  | { type: "HYDRATE"; state: Partial<AppState> };

const initialState: AppState = {
  screen: "dashboard",
  previousScreen: null,
  tasks: INITIAL_TASKS,
  equipment: INITIAL_EQUIPMENT,
  maintenanceLog: INITIAL_MAINTENANCE,
  alerts: INITIAL_ALERTS,
  profile: DEFAULT_PROFILE,
  settings: DEFAULT_SETTINGS,
  filters: DEFAULT_FILTERS,
  storageError: null,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "NAVIGATE": {
      if (action.screen === state.screen) return state;
      return {
        ...state,
        previousScreen: state.screen,
        screen: action.screen,
      };
    }
    case "GO_BACK": {
      if (!state.previousScreen) return state;
      return {
        ...state,
        screen: state.previousScreen,
        previousScreen: null,
      };
    }
    case "UPDATE_TASKS":
      return { ...state, tasks: action.tasks };
    case "UPDATE_EQUIPMENT":
      return { ...state, equipment: action.equipment };
    case "UPDATE_MAINTENANCE":
      return { ...state, maintenanceLog: action.maintenanceLog };
    case "UPDATE_ALERTS":
      return { ...state, alerts: action.alerts };
    case "ACKNOWLEDGE_ALERT":
      return {
        ...state,
        alerts: state.alerts.map((a) =>
          a.id === action.alertId ? { ...a, acknowledged: true } : a
        ),
      };
    case "UPDATE_PROFILE":
      return { ...state, profile: action.profile };
    case "UPDATE_SETTINGS":
      return { ...state, settings: action.settings };
    case "UPDATE_FILTERS":
      return { ...state, filters: action.filters };
    case "RESET_FILTERS":
      return { ...state, filters: DEFAULT_FILTERS };
    case "SET_STORAGE_ERROR":
      return { ...state, storageError: action.error };
    case "RESET_STORAGE":
      return { ...initialState, screen: "storage-error" as Screen };
    case "HYDRATE":
      return { ...state, ...action.state };
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, initialState, (defaultState) => {
    const { data, error } = loadState<AppState>(defaultState);
    if (error) {
      // Continue with default state but mark error
      return { ...defaultState, storageError: error };
    }
    // Merge defaults for any missing fields (schema evolution)
    return {
      ...defaultState,
      ...data,
      tasks: data.tasks ?? defaultState.tasks,
      equipment: data.equipment ?? defaultState.equipment,
      maintenanceLog: data.maintenanceLog ?? defaultState.maintenanceLog,
      alerts: data.alerts ?? defaultState.alerts,
      profile: data.profile ?? defaultState.profile,
      settings: data.settings ?? defaultState.settings,
      filters: data.filters ?? defaultState.filters,
    };
  });

  // Persist state changes to localStorage
  useEffect(() => {
    let cancelled = false;
    async function persist() {
      try {
        await saveState(state);
        if (!cancelled && state.storageError) {
          dispatch({ type: "SET_STORAGE_ERROR", error: null });
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : String(err);
          dispatch({ type: "SET_STORAGE_ERROR", error: message });
        }
      }
    }
    persist();
    return () => {
      cancelled = true;
    };
  }, [state]);

  const navigate = useCallback((screen: Screen) => {
    dispatch({ type: "NAVIGATE", screen });
  }, []);

  const goBack = useCallback(() => {
    dispatch({ type: "GO_BACK" });
  }, []);

  const updateTasks = useCallback((tasks: Task[]) => {
    dispatch({ type: "UPDATE_TASKS", tasks });
  }, []);

  const updateEquipment = useCallback((equipment: Equipment[]) => {
    dispatch({ type: "UPDATE_EQUIPMENT", equipment });
  }, []);

  const updateMaintenanceLog = useCallback((maintenanceLog: MaintenanceRecord[]) => {
    dispatch({ type: "UPDATE_MAINTENANCE", maintenanceLog });
  }, []);

  const acknowledgeAlert = useCallback((alertId: string) => {
    dispatch({ type: "ACKNOWLEDGE_ALERT", alertId });
  }, []);

  const updateProfile = useCallback((profile: UserProfile) => {
    dispatch({ type: "UPDATE_PROFILE", profile });
  }, []);

  const updateSettings = useCallback((settings: AppSettings) => {
    dispatch({ type: "UPDATE_SETTINGS", settings });
  }, []);

  const updateFilters = useCallback((filters: FilterState) => {
    dispatch({ type: "UPDATE_FILTERS", filters });
  }, []);

  const resetFilters = useCallback(() => {
    dispatch({ type: "RESET_FILTERS" });
  }, []);

  const resetStorageAndState = useCallback(() => {
    resetStorage();
    dispatch({ type: "RESET_STORAGE" });
  }, []);

  return {
    state,
    dispatch,
    navigate,
    goBack,
    updateTasks,
    updateEquipment,
    updateMaintenanceLog,
    acknowledgeAlert,
    updateProfile,
    updateSettings,
    updateFilters,
    resetFilters,
    resetStorageAndState,
  };
}

export type AppStateApi = ReturnType<typeof useAppState>;
