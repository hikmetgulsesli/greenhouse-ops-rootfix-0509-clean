import { useState } from "react";
import type { AppState, Screen } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function FilteredOverview({ onNavigate, onAction, state }: FilteredOverviewProps = {}) {
  const [search, setSearch] = useState("");
  const alerts = state?.alerts ?? [];
  const maintenance = state?.maintenanceLog ?? [];

  const allItems = [
    ...alerts.map((a) => ({ type: "alert" as const, id: a.id, title: a.title, detail: a.message, date: a.timestamp, severity: a.severity })),
    ...maintenance.map((m) => ({ type: "maintenance" as const, id: m.id, title: m.equipmentName, detail: m.description, date: m.date, severity: m.type === "emergency" ? "critical" : "medium" })),
  ];

  const filtered = search
    ? allItems.filter((i) =>
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.detail.toLowerCase().includes(search.toLowerCase())
      )
    : allItems;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Filtered Overview</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Aggregated view of alerts, logs, and events.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Search logs, events, anomalies..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={() => onAction?.("export-csv")}
            className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Export CSV
          </button>
          <button
            onClick={() => onAction?.("clear-filters")}
            className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">clear_all</span>
            Clear All
          </button>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/50">
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Type</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Title</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Details</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Date</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Severity</th>
              </tr>
            </thead>
            <tbody className="font-code-data text-code-data">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant text-sm">No results found</td>
                </tr>
              )}
              {filtered.map((item) => (
                <tr key={`${item.type}-${item.id}`} className="border-b border-outline-variant/20 hover:bg-surface-variant/30 transition-colors">
                  <td className="py-3 px-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${item.type === "alert" ? "bg-red-500/10 text-red-400" : "bg-primary/10 text-primary"}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-on-surface">{item.title}</td>
                  <td className="py-3 px-4 max-w-xs truncate">{item.detail}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${item.severity === "critical" ? "bg-red-500/10 text-red-400" : item.severity === "high" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                      {item.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
