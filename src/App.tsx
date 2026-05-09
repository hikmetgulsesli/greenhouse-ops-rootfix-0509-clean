import { useAppState } from "./hooks/useAppState";
import { Dashboard } from "./screens/Dashboard";
import { TaskBoard } from "./screens/TaskBoard";
import { EquipmentStatus } from "./screens/EquipmentStatus";
import { MaintenanceLog } from "./screens/MaintenanceLog";
import { Settings } from "./screens/Settings";
import { ProfilePanel } from "./screens/ProfilePanel";
import { FilteredOverview } from "./screens/FilteredOverview";
import { EmptyState } from "./screens/EmptyState";
import { StorageErrorState } from "./screens/StorageErrorState";
import type { Screen, MaintenanceRecord, AppSettings, UserProfile } from "./types/domain";


const navItems: { id: Screen; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "task-board", label: "Task Board", icon: "assignment" },
  { id: "equipment", label: "Equipment", icon: "precision_manufacturing" },
  { id: "logs", label: "Logs", icon: "database" },
];

const bottomNavItems: { id: Screen; label: string; icon: string }[] = [
  { id: "settings", label: "Settings", icon: "settings" },
  { id: "help", label: "Help", icon: "help" },
];

function Sidebar({
  current,
  onNavigate,
}: {
  current: Screen;
  onNavigate: (s: Screen) => void;
}) {
  return (
    <nav className="fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-6 z-40 hidden md:flex">
      <div className="px-6 mb-8 flex flex-col gap-1">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          FloraOps Pro
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Zone A-1 Main
        </span>
      </div>
      <div className="flex-1 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link text-left ${isActive ? "nav-link-active" : ""}`}
            >
              <span
                className={`material-symbols-outlined ${isActive ? "filled" : ""}`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="px-3 mt-auto flex flex-col gap-1">
        {bottomNavItems.map((item) => {
          const isActive = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link text-left ${isActive ? "nav-link-active" : ""}`}
            >
              <span
                className={`material-symbols-outlined ${isActive ? "filled" : ""}`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
        <div className="mt-4 px-3">
          <button className="w-full flex justify-center items-center gap-2 bg-error/10 text-error hover:bg-error/20 border border-error/30 py-2 px-4 rounded-DEFAULT transition-colors font-medium">
            <span className="material-symbols-outlined text-sm">warning</span>
            Emergency Stop
          </button>
        </div>
      </div>
    </nav>
  );
}

function TopBar({
  onNavigate,
  alertCount,
}: {
  onNavigate: (s: Screen) => void;
  alertCount: number;
}) {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-30 border-b border-outline-variant bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 h-16 hidden md:flex">
      <div className="flex items-center gap-4">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          Greenhouse Console
        </span>
      </div>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
            placeholder="Search parameters, zones..."
            type="text"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <button
            className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full relative group"
            aria-label="Notifications"
            onClick={() => onNavigate("filtered-overview")}
          >
            <span className="material-symbols-outlined">notifications</span>
            {alertCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            )}
          </button>
          <button
            className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full"
            aria-label="Thermostat"
          >
            <span className="material-symbols-outlined">thermostat</span>
          </button>
          <button
            className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full"
            aria-label="Humidity"
          >
            <span className="material-symbols-outlined">humidity_mid</span>
          </button>
          <button
            className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full"
            aria-label="Sensors"
          >
            <span className="material-symbols-outlined">sensors</span>
          </button>
        </div>
        <div className="h-8 w-px bg-outline-variant mx-2"></div>
        <button
          className="flex items-center gap-2 hover:text-primary transition-colors hover:opacity-80"
          onClick={() => onNavigate("profile")}
        >
          <span className="font-body-base text-body-base font-medium">Account</span>
          <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnZfMfIfDL5SoU3-duu2JZwIPu7VjvndE4uf0t_XcN1sydbwgqFdBxoYuMyoKWszB-4y4d0uuGU1-CUO2zNXYccoug37WjSL9wSZkHdsRY5bjRU2Npr6Pz5cTt-Jdfu9pBXqOGgLtJAGOz_KYZNKUQD2ruxIGSx_yvcrYEFSZarsC0PcX9afqc38yFaP_HRjjTbs8zpZlOGLBcCp6kGHHbVZbqFA09eQxoEBc05jZtH8spH6EvRHZEtIOp1gKaFnvlRPgQjUyrKs"
            />
          </div>
        </button>
      </div>
    </header>
  );
}

function MobileHeader({
  onNavigate,
  alertCount,
}: {
  onNavigate: (s: Screen) => void;
  alertCount: number;
}) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-outline-variant bg-surface flex justify-between items-center px-4 h-14">
      <span className="font-headline-md text-headline-md font-bold text-primary">
        FloraOps
      </span>
      <div className="flex items-center gap-3">
        <button
          className="p-2 hover:text-primary transition-colors relative"
          aria-label="Notifications"
          onClick={() => onNavigate("filtered-overview")}
        >
          <span className="material-symbols-outlined">notifications</span>
          {alertCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          )}
        </button>
        <button
          className="p-2 hover:text-primary transition-colors"
          aria-label="Menu"
          onClick={() => onNavigate("settings")}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

export default function App() {
  const {
    state,
    navigate,
    goBack,
    acknowledgeAlert,
    updateTasks,
    updateEquipment,
    updateMaintenanceLog,
    updateProfile,
    updateSettings,
    updateFilters,
    resetFilters,
    resetStorageAndState,
  } = useAppState();

  const { screen, tasks, equipment, maintenanceLog, alerts, profile, settings, filters, storageError } = state;
  const unacknowledgedAlerts = alerts.filter((a) => !a.acknowledged);

  const commonProps = {
    onNavigate: navigate,
    onBack: goBack,
    onAction: (action: string, ...args: unknown[]) => {
      if (action === "acknowledge-alert" && args[0]) {
        acknowledgeAlert(String(args[0]));
      }
      if (action === "navigate" && args[0]) {
        navigate(args[0] as Screen);
      }
    },
    state,
  };

  const renderScreen = () => {
    switch (screen) {
      case "dashboard":
        return (
          <Dashboard
            {...commonProps}
            onAction={(action, ...args) => {
              if (action === "create-task") navigate("task-board");
              if (action === "view-log") navigate("logs");
              if (action === "acknowledge-alert" && args[0]) acknowledgeAlert(String(args[0]));
              (commonProps.onAction as (...a: unknown[]) => void)(action, ...args);
            }}
          />
        );
      case "task-board":
        return <TaskBoard {...commonProps} />;
      case "equipment":
        return <EquipmentStatus {...commonProps} />;
      case "logs":
        return (
          <MaintenanceLog
            {...commonProps}
            onAction={(action, ...args) => {
              if (action === "export-csv") {
                const csv = maintenanceLogToCSV(maintenanceLog);
                downloadBlob(csv, "maintenance-log.csv", "text/csv");
              }
              (commonProps.onAction as (...a: unknown[]) => void)(action, ...args);
            }}
          />
        );
      case "settings":
        return (
          <Settings
            {...commonProps}
            onAction={(action, ...args) => {
              if (action === "save-settings" && args[0]) {
                updateSettings(args[0] as AppSettings);
              }
              if (action === "discard-changes") {
                // Revert by reloading from localStorage
                window.location.reload();
              }
              (commonProps.onAction as (...a: unknown[]) => void)(action, ...args);
            }}
          />
        );
      case "profile":
        return (
          <ProfilePanel
            {...commonProps}
            onAction={(action, ...args) => {
              if (action === "save-profile" && args[0]) {
                updateProfile(args[0] as UserProfile);
              }
              if (action === "sign-out") {
                resetStorageAndState();
              }
              (commonProps.onAction as (...a: unknown[]) => void)(action, ...args);
            }}
          />
        );
      case "filtered-overview":
        return (
          <FilteredOverview
            {...commonProps}
            onAction={(action, ...args) => {
              if (action === "clear-filters") resetFilters();
              if (action === "export-csv") {
                const csv = maintenanceLogToCSV(maintenanceLog);
                downloadBlob(csv, "filtered-log.csv", "text/csv");
              }
              (commonProps.onAction as (...a: unknown[]) => void)(action, ...args);
            }}
          />
        );
      case "empty-state":
        return <EmptyState {...commonProps} />;
      case "storage-error":
        return (
          <StorageErrorState
            {...commonProps}
            onAction={(action) => {
              if (action === "retry-connection") {
                window.location.reload();
              }
              if (action === "reset-storage-cache") {
                resetStorageAndState();
              }
              (commonProps.onAction as (...a: unknown[]) => void)(action);
            }}
          />
        );
      default:
        return <Dashboard {...commonProps} />;
    }
  };

  return (
    <div data-setfarm-root="app-shell" className="min-h-screen bg-background text-on-surface">
      <MobileHeader onNavigate={navigate} alertCount={unacknowledgedAlerts.length} />
      <Sidebar current={screen} onNavigate={navigate} />
      <TopBar onNavigate={navigate} alertCount={unacknowledgedAlerts.length} />
      <main className="md:ml-[240px] md:pt-16 pt-14 min-h-screen">
        {renderScreen()}
      </main>
    </div>
  );
}

function maintenanceLogToCSV(records: MaintenanceRecord[]): string {
  const headers = ["ID", "Equipment", "Type", "Description", "Operator", "Date", "Duration", "Status"];
  const rows = records.map((r) => [
    r.id,
    r.equipmentName,
    r.type,
    r.description,
    r.operator,
    r.date,
    String(r.duration),
    r.status,
  ]);
  return [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
}

function downloadBlob(content: string, filename: string, mimeType: string) {
  try {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    try { document.body.removeChild(a); } catch { /* ignore */ }
    URL.revokeObjectURL(url);
  } catch {
    // ignore in test environments
  }
}
