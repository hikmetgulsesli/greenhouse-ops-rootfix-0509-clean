import { useState } from "react";
import type { AppState, Screen } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface DashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function Dashboard({ onNavigate, onAction, state }: DashboardProps = {}) {
  const [search, setSearch] = useState("");
  const alerts = state?.alerts ?? [];
  const unacknowledged = alerts.filter((a) => !a.acknowledged);

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      {/* Page Header & Filters */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Operations Overview</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">System status and critical tasks for current shift.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            Today
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            All Zones
          </button>
        </div>
      </div>
      {/* Top Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-surface rounded-lg p-5 border border-outline-variant/50 relative overflow-hidden group hover:bg-surface-variant/30 transition-colors status-stripe-success">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-DEFAULT text-primary">
                <span className="material-symbols-outlined">energy_savings_leaf</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">Climate Health</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Optimal</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-on-surface">98%</span>
            <span className="text-sm text-emerald-400 mb-1 flex items-center"><span className="material-symbols-outlined text-xs">arrow_upward</span> 2.1%</span>
          </div>
        </div>
        <div className="bg-surface rounded-lg p-5 border border-outline-variant/50 relative overflow-hidden group hover:bg-surface-variant/30 transition-colors status-stripe-warning">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-DEFAULT text-primary">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">Irrigation</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">Review</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-on-surface">82%</span>
            <span className="text-sm text-amber-400 mb-1 flex items-center"><span className="material-symbols-outlined text-xs">arrow_downward</span> 5.4%</span>
          </div>
        </div>
        <div className="bg-surface rounded-lg p-5 border border-outline-variant/50 relative overflow-hidden group hover:bg-surface-variant/30 transition-colors status-stripe-success">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-DEFAULT text-primary">
                <span className="material-symbols-outlined">wb_sunny</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">DLI Acc.</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">On Track</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-on-surface">14.2</span>
            <span className="text-sm text-on-surface-variant mb-1">mol/m²/d</span>
          </div>
        </div>
        <div className="bg-surface rounded-lg p-5 border border-outline-variant/50 relative overflow-hidden group hover:bg-surface-variant/30 transition-colors status-stripe-error">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-error/10 rounded-DEFAULT text-error">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">Active Alerts</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">Critical</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-error">{unacknowledged.length}</span>
            <span className="text-sm text-on-surface-variant mb-1">Requires Action</span>
          </div>
        </div>
      </div>
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Column: Tasks & Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Environmental Status Table */}
          <div className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden">
            <div className="p-4 border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low">
              <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">sensors</span>
                Live Environmental Readings
              </h2>
              <button
                onClick={() => onAction?.("view-log")}
                className="text-primary hover:text-primary-fixed text-sm font-medium"
              >
                View Detailed Log
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant/50">
                    <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Zone</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Temp (°C)</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Humidity (%)</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">CO2 (ppm)</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant">Status</th>
                  </tr>
                </thead>
                <tbody className="font-code-data text-code-data">
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-variant/30 transition-colors">
                    <td className="py-3 px-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Zone A-1</td>
                    <td className="py-3 px-4">24.5</td>
                    <td className="py-3 px-4">65</td>
                    <td className="py-3 px-4">800</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">Stable</span></td>
                  </tr>
                  <tr className="border-b border-outline-variant/20 bg-surface-container-lowest/50 hover:bg-surface-variant/30 transition-colors">
                    <td className="py-3 px-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Zone A-2</td>
                    <td className="py-3 px-4 text-amber-400 font-semibold">26.8 <span className="material-symbols-outlined text-[14px] align-middle">arrow_upward</span></td>
                    <td className="py-3 px-4">62</td>
                    <td className="py-3 px-4">780</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs">Venting</span></td>
                  </tr>
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-variant/30 transition-colors">
                    <td className="py-3 px-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400"></span> Zone B-1</td>
                    <td className="py-3 px-4">22.1</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">45 <span className="material-symbols-outlined text-[14px] align-middle">arrow_downward</span></td>
                    <td className="py-3 px-4">810</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs">Low Hum.</span></td>
                  </tr>
                  <tr className="hover:bg-surface-variant/30 transition-colors bg-surface-container-lowest/50">
                    <td className="py-3 px-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Zone B-2</td>
                    <td className="py-3 px-4">24.2</td>
                    <td className="py-3 px-4">68</td>
                    <td className="py-3 px-4">805</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">Stable</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Workflow Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onAction?.("irrigate")}
              className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant/50 rounded-lg hover:border-primary hover:bg-surface-variant/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">water_drop</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">Initiate Manual Irrigation</span>
              <span className="text-xs text-on-surface-variant mt-1">Override schedule for selected zones</span>
            </button>
            <button
              onClick={() => onAction?.("ventilate")}
              className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant/50 rounded-lg hover:border-primary hover:bg-surface-variant/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">air</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface">Force Ventilation Purge</span>
              <span className="text-xs text-on-surface-variant mt-1">Clear humidity/temp build-up</span>
            </button>
          </div>
        </div>
        {/* Right Column: Alerts & Equipment */}
        <div className="space-y-6">
          {/* Critical Alerts Feed */}
          <div className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden flex flex-col h-[320px]">
            <div className="p-4 border-b border-outline-variant/50 flex justify-between items-center bg-error/5">
              <h2 className="font-title-sm text-title-sm text-error flex items-center gap-2">
                <span className="material-symbols-outlined">warning</span>
                Priority Alerts
              </h2>
              <span className="bg-error text-on-error text-xs px-2 py-0.5 rounded-full font-bold">{unacknowledged.length}</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {unacknowledged.length === 0 && (
                <p className="text-sm text-on-surface-variant text-center py-4">No active alerts</p>
              )}
              {unacknowledged.map((alert) => (
                <div key={alert.id} className={`p-3 bg-surface-container border rounded-DEFAULT border-l-2 ${alert.severity === "critical" ? "border-red-500/20 border-l-red-500" : "border-amber-500/20 border-l-amber-500"}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`font-code-data text-code-data ${alert.severity === "critical" ? "text-red-400" : "text-amber-400"}`}>{alert.title}</span>
                    <span className="text-xs text-on-surface-variant">{new Date(alert.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                  <p className="text-sm text-on-surface">{alert.message}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => onAction?.("acknowledge-alert", alert.id)}
                      className={`text-xs px-2 py-1 rounded hover:opacity-80 transition-colors ${alert.severity === "critical" ? "bg-red-500/10 text-red-400" : "bg-surface-variant text-on-surface border border-outline-variant"}`}
                    >
                      {alert.severity === "critical" ? "Acknowledge" : "Create Task"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Actions */}
          <div className="bg-surface rounded-lg border border-outline-variant/50 p-4">
            <h3 className="font-title-sm text-title-sm text-on-surface mb-3">Shift Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => onAction?.("create-task")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-DEFAULT bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-colors text-sm font-medium"
              >
                <span className="material-symbols-outlined">add_task</span>
                Create Task
              </button>
              <button
                onClick={() => onNavigate?.("equipment")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-DEFAULT bg-surface-container-low border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors text-sm font-medium"
              >
                <span className="material-symbols-outlined">event_note</span>
                View Maintenance Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
