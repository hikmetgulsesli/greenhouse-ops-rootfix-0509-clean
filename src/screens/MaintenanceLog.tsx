import { useState } from "react";
import type { AppState, Screen } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function MaintenanceLog({ onNavigate, onAction, state }: MaintenanceLogProps = {}) {
  const [search, setSearch] = useState("");
  const records = state?.maintenanceLog ?? [];

  const filtered = search
    ? records.filter((r) =>
        r.equipmentName.toLowerCase().includes(search.toLowerCase()) ||
        r.operator.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase())
      )
    : records;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Maintenance Log</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Review historical maintenance records.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Search parameters..."
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
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/50">
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Date</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Equipment</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Type</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Description</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Operator</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Duration</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Status</th>
                <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Actions</th>
              </tr>
            </thead>
            <tbody className="font-code-data text-code-data">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-on-surface-variant text-sm">No maintenance records found</td>
                </tr>
              )}
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-outline-variant/20 hover:bg-surface-variant/30 transition-colors">
                  <td className="py-3 px-4">{r.date}</td>
                  <td className="py-3 px-4">{r.equipmentName}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${r.type === "scheduled" ? "bg-emerald-500/10 text-emerald-400" : r.type === "unscheduled" ? "bg-amber-500/10 text-amber-400" : "bg-red-500/10 text-red-400"}`}>
                      {r.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 max-w-xs truncate">{r.description}</td>
                  <td className="py-3 px-4">{r.operator}</td>
                  <td className="py-3 px-4">{r.duration}m</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${r.status === "completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => onAction?.("view-details", r.id)}
                      className="text-xs text-primary hover:text-primary-fixed transition-colors"
                    >
                      View Details
                    </button>
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
