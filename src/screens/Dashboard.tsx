// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface DashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function Dashboard(_props: DashboardProps = {}) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 w-[calc(100%-240px)] z-50 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Console</span>
      </div>
      <div className="flex-1 max-w-md mx-8 hidden md:block">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
      <input className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" placeholder="Search parameters, zones..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-on-surface-variant">
      <button className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full relative group">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full">
      <span className="material-symbols-outlined">thermostat</span>
      </button>
      <button className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full">
      <span className="material-symbols-outlined">humidity_mid</span>
      </button>
      <button className="p-2 hover:text-primary transition-colors hover:bg-surface-variant rounded-full">
      <span className="material-symbols-outlined">sensors</span>
      </button>
      </div>
      <div className="h-8 w-px bg-outline-variant mx-2"></div>
      <button className="flex items-center gap-2 hover:text-primary transition-colors hover:opacity-80">
      <span className="font-body-base text-body-base font-medium">Account</span>
      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate agricultural worker or operator in a minimal, dark modern setting. The lighting is soft and high-key, creating a clean and authoritative look suitable for a technical dashboard profile. The subject has a neutral, focused expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnZfMfIfDL5SoU3-duu2JZwIPu7VjvndE4uf0t_XcN1sydbwgqFdBxoYuMyoKWszB-4y4d0uuGU1-CUO2zNXYccoug37WjSL9wSZkHdsRY5bjRU2Npr6Pz5cTt-Jdfu9pBXqOGgLtJAGOz_KYZNKUQD2ruxIGSx_yvcrYEFSZarsC0PcX9afqc38yFaP_HRjjTbs8zpZlOGLBcCp6kHGHbVZbqFA09eQxoEBc05jZtH8spH6EvRHZEtIOp1gKaFnvlRPgQjUyrKs" />
      </div>
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col py-unit-container-margin z-50">
      <div className="px-6 mb-8 flex flex-col gap-1">
      <span className="font-headline-md text-headline-md font-bold text-primary">FloraOps Pro</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Zone A-1 Main</span>
      </div>
      <div className="flex-1 px-3 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-primary font-bold border-l-4 border-primary bg-secondary-container/10 Active: scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span>Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors border-l-4 border-transparent ml-[4px]" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span>Task Board</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors border-l-4 border-transparent ml-[4px]" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors border-l-4 border-transparent ml-[4px]" href="#">
      <span className="material-symbols-outlined">database</span>
      <span>Logs</span>
      </a>
      </div>
      <div className="px-3 mt-auto flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors border-l-4 border-transparent ml-[4px]" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-r-full text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors border-l-4 border-transparent ml-[4px]" href="#">
      <span className="material-symbols-outlined">help</span>
      <span>Help</span>
      </a>
      <div className="mt-4 px-3">
      <button className="w-full flex justify-center items-center gap-2 bg-error/10 text-error hover:bg-error/20 border border-error/30 py-2 px-4 rounded-DEFAULT transition-colors font-medium">
      <span className="material-symbols-outlined text-sm">warning</span>
                          Emergency Stop
                      </button>
      </div>
      </div>
      </nav>
      {/* Main Content */}
      <main className="ml-[240px] pt-16 min-h-screen p-container-margin">
      <div className="max-w-7xl mx-auto space-y-6">
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
      {/* Stat Card 1 */}
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
      {/* Stat Card 2 */}
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
      {/* Stat Card 3 */}
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
      {/* Stat Card 4 */}
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
      <span className="text-3xl font-bold text-error">3</span>
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
      <button className="text-primary hover:text-primary-fixed text-sm font-medium">View Detailed Log</button>
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
      <button className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant/50 rounded-lg hover:border-primary hover:bg-surface-variant/20 transition-all group">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-2xl">water_drop</span>
      </div>
      <span className="font-title-sm text-title-sm text-on-surface">Initiate Manual Irrigation</span>
      <span className="text-xs text-on-surface-variant mt-1">Override schedule for selected zones</span>
      </button>
      <button className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant/50 rounded-lg hover:border-primary hover:bg-surface-variant/20 transition-all group">
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
      <span className="bg-error text-on-error text-xs px-2 py-0.5 rounded-full font-bold">3</span>
      </div>
      <div className="p-4 flex-1 overflow-y-auto space-y-3">
      <div className="p-3 bg-surface-container border border-red-500/20 rounded-DEFAULT border-l-2 border-l-red-500">
      <div className="flex justify-between items-start mb-1">
      <span className="font-code-data text-code-data text-red-400">PUMP-04 FAILURE</span>
      <span className="text-xs text-on-surface-variant">10m ago</span>
      </div>
      <p className="text-sm text-on-surface">Main irrigation pump in Zone B-1 stopped responding.</p>
      <div className="mt-2 flex gap-2">
      <button className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded hover:bg-red-500/20 transition-colors">Acknowledge</button>
      </div>
      </div>
      <div className="p-3 bg-surface-container border border-amber-500/20 rounded-DEFAULT border-l-2 border-l-amber-500">
      <div className="flex justify-between items-start mb-1">
      <span className="font-code-data text-code-data text-amber-400">SENSOR CALIBRATION</span>
      <span className="text-xs text-on-surface-variant">1h ago</span>
      </div>
      <p className="text-sm text-on-surface">Humidistat H-22 readings drifting beyond margin.</p>
      <div className="mt-2 flex gap-2">
      <button className="text-xs bg-surface-variant text-on-surface px-2 py-1 rounded hover:bg-surface-bright transition-colors border border-outline-variant">Create Task</button>
      </div>
      </div>
      <div className="p-3 bg-surface-container border border-amber-500/20 rounded-DEFAULT border-l-2 border-l-amber-500">
      <div className="flex justify-between items-start mb-1">
      <span className="font-code-data text-code-data text-amber-400">NUTRIENT LOW</span>
      <span className="text-xs text-on-surface-variant">2h ago</span>
      </div>
      <p className="text-sm text-on-surface">Tank 2 (Nitrogen) below 15% capacity.</p>
      </div>
      </div>
      </div>
      {/* Equipment Health Minimal Chart (Visual Placeholder) */}
      <div className="bg-surface rounded-lg border border-outline-variant/50 p-4">
      <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2 mb-4">
      <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                                  Equipment Uptime
                              </h2>
      <div className="space-y-4">
      <div>
      <div className="flex justify-between text-xs mb-1">
      <span className="text-on-surface-variant">HVAC Systems</span>
      <span className="text-emerald-400">99.8%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
      <div className="bg-emerald-400 h-1.5 rounded-full" style={{width: "99.8%"}}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-xs mb-1">
      <span className="text-on-surface-variant">Irrigation Pumps</span>
      <span className="text-amber-400">92.4%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
      <div className="bg-amber-400 h-1.5 rounded-full" style={{width: "92.4%"}}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-xs mb-1">
      <span className="text-on-surface-variant">Lighting Arrays</span>
      <span className="text-emerald-400">100%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
      <div className="bg-emerald-400 h-1.5 rounded-full" style={{width: "100%"}}></div>
      </div>
      </div>
      </div>
      <button className="w-full mt-4 py-2 text-sm border border-outline-variant rounded-DEFAULT hover:bg-surface-variant transition-colors text-on-surface">
                                  View Maintenance Schedule
                              </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
