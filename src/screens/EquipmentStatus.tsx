import { useState } from "react";
import type { AppState, Screen } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function EquipmentStatus({ onNavigate, onAction, state }: EquipmentStatusProps = {}) {
  const [search, setSearch] = useState("");
  const equipment = state?.equipment ?? [];

  const filtered = search
    ? equipment.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.zone.toLowerCase().includes(search.toLowerCase()) ||
        e.type.toLowerCase().includes(search.toLowerCase())
      )
    : equipment;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Equipment Status</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Monitor and manage greenhouse equipment.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Search equipment..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((eq) => (
          <div key={eq.id} className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden hover:border-primary/30 transition-colors">
            <div className="p-4 border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${eq.status === "operational" ? "bg-emerald-500/10 text-emerald-400" : eq.status === "warning" ? "bg-amber-500/10 text-amber-400" : "bg-red-500/10 text-red-400"}`}>
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface">{eq.name}</h3>
                  <p className="text-xs text-on-surface-variant">{eq.type} · {eq.zone}</p>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${eq.status === "operational" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : eq.status === "warning" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                {eq.status}
              </span>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs text-on-surface-variant mb-1">Uptime</div>
                <div className="text-lg font-bold text-on-surface">{eq.uptime}%</div>
              </div>
              <div>
                <div className="text-xs text-on-surface-variant mb-1">Last Maint.</div>
                <div className="text-sm font-medium text-on-surface">{eq.lastMaintenance}</div>
              </div>
              <div>
                <div className="text-xs text-on-surface-variant mb-1">Next Maint.</div>
                <div className="text-sm font-medium text-on-surface">{eq.nextMaintenance}</div>
              </div>
            </div>
            <div className="p-4 pt-0 flex gap-2">
              <button
                onClick={() => onAction?.("calibrate", eq.id)}
                className="flex-1 text-xs bg-surface-container-low border border-outline-variant text-on-surface px-3 py-2 rounded-DEFAULT hover:bg-surface-variant transition-colors"
              >
                Calibrate
              </button>
              <button
                onClick={() => onAction?.("schedule", eq.id)}
                className="flex-1 text-xs bg-surface-container-low border border-outline-variant text-on-surface px-3 py-2 rounded-DEFAULT hover:bg-surface-variant transition-colors"
              >
                Schedule
              </button>
              <button
                onClick={() => onAction?.("inspect", eq.id)}
                className="flex-1 text-xs bg-surface-container-low border border-outline-variant text-on-surface px-3 py-2 rounded-DEFAULT hover:bg-surface-variant transition-colors"
              >
                Inspect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
