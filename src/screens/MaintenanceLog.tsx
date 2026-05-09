// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
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

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function MaintenanceLog(_props: MaintenanceLogProps = {}) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter h-16 shadow-none">
      <div className="flex items-center gap-6">
      <span className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Console</span>
      <div className="relative hidden lg:block w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
      <input className="w-full bg-surface-container border border-outline-variant rounded-md py-1.5 pl-10 pr-3 text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant transition-colors" placeholder="Search parameters..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors group">
      <span className="material-symbols-outlined group-active:opacity-80 transition-opacity" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors group">
      <span className="material-symbols-outlined group-active:opacity-80 transition-opacity" data-icon="thermostat">thermostat</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors group">
      <span className="material-symbols-outlined group-active:opacity-80 transition-opacity" data-icon="humidity_mid">humidity_mid</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors group">
      <span className="material-symbols-outlined group-active:opacity-80 transition-opacity" data-icon="sensors">sensors</span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-2"></div>
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-on-surface" data-icon="account_circle">account_circle</span>
      <span className="text-body-sm text-on-surface font-medium">Account</span>
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-6 z-50 shadow-none">
      <div className="px-gutter mb-8 flex items-center gap-3">
      <img alt="Greenhouse Operator Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A close-up portrait of a professional agricultural operator in a modern, dark high-tech environment. The lighting is cool and clinical, emphasizing reliability and precision. The overall aesthetic matches a sleek, corporate dark mode interface with deep navy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbTEoiH7k9V1LJtKagroctsUB6xWxPnvknX4h6NO18Ubmd-qOPsPY727DwC9-0ckYUc7wt7HdcVmTdAF_6c0RAYBiEWTuP9FdKqC7GjpPdsYuIlN2bF7MBtT986mhIW25XUFO2nhYh0zXkpJ1kKS9aF6baF1DBkFVJnpNPe4TyzeG_-Xu3EbR9KAPBiZuSPoSMLULptE_y-opu2Xj8ZELzzQ0E1hZNTRyJCtVaZrSwSjW5C8gAr7bQusYBRou8tN7DJ6ErdYrUeVk" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary text-[16px] leading-tight">FloraOps Pro</h1>
      <p className="text-body-sm text-on-surface-variant">Zone A-1 Main</p>
      </div>
      </div>
      <div className="flex-1 px-3 space-y-1">
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-primary font-bold border-l-4 border-primary bg-secondary-container/10 hover:bg-surface-variant transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="database" data-weight="fill">database</span>
                      Logs
                  </a>
      </div>
      <div className="px-gutter mt-auto mb-6">
      <button className="w-full flex justify-center items-center gap-2 py-2 rounded-md bg-error-container/20 text-error border border-error/50 hover:bg-error-container/40 transition-colors font-title-sm">
      <span className="material-symbols-outlined text-[18px]" data-icon="warning">warning</span>
                      Emergency Stop
                  </button>
      </div>
      <div className="px-3 space-y-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded-md text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined text-[18px]" data-icon="settings">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-md text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined text-[18px]" data-icon="help">help</span>
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-[240px] pt-16 min-h-screen">
      <div className="p-container-margin">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-surface">Maintenance Logs</h2>
      <p className="text-body-base text-on-surface-variant mt-1">Chronological record of system interventions and calibrations.</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-md font-title-sm hover:brightness-110 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary-container">
      <span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                          Export CSV
                      </button>
      </div>
      {/* Filters (Glassmorphism inspired subtle surface) */}
      <div className="bg-surface-container-high/80 backdrop-blur-sm border border-outline-variant p-4 rounded-lg mb-6 flex flex-wrap gap-4 items-end shadow-sm">
      <div className="flex-1 min-w-[200px]">
      <label className="block text-label-caps text-on-surface-variant mb-1.5 uppercase">Search Records</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
      <input className="w-full bg-surface border border-outline-variant rounded-md py-2 pl-10 pr-3 text-body-base text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="ID, Operator, Task..." type="text" />
      </div>
      </div>
      <div className="w-48">
      <label className="block text-label-caps text-on-surface-variant mb-1.5 uppercase">Date Range</label>
      <input className="w-full bg-surface border border-outline-variant rounded-md py-2 px-3 text-body-base text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [color-scheme:dark]" type="date" />
      </div>
      <div className="w-48">
      <label className="block text-label-caps text-on-surface-variant mb-1.5 uppercase">Equipment Type</label>
      <select className="w-full bg-surface border border-outline-variant rounded-md py-2 px-3 text-body-base text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
      <option>All Equipment</option>
      <option>HVAC Units</option>
      <option>Irrigation Pumps</option>
      <option>Sensor Arrays</option>
      </select>
      </div>
      <div className="w-40">
      <label className="block text-label-caps text-on-surface-variant mb-1.5 uppercase">Status</label>
      <select className="w-full bg-surface border border-outline-variant rounded-md py-2 px-3 text-body-base text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
      <option>All Statuses</option>
      <option>Completed</option>
      <option>Pending Review</option>
      <option>Critical</option>
      </select>
      </div>
      <button className="px-4 py-2 border border-outline-variant text-on-surface hover:bg-surface-variant rounded-md transition-colors font-title-sm h-[42px]">
                          Reset Filters
                      </button>
      </div>
      {/* Data Table */}
      <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden relative">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="bg-surface-container-high border-b border-outline-variant sticky top-0 z-10">
      <tr>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider w-[140px]">Date / Time</th>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider w-[120px]">Log ID</th>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider">Equipment &amp; Task</th>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider w-[120px]">Operator</th>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider w-[140px]">Status</th>
      <th className="py-3 px-4 font-label-caps text-on-surface-variant uppercase tracking-wider w-[80px] text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/50">
      {/* Row 1 (Critical) */}
      <tr className="h-12 bg-surface hover:bg-surface-bright transition-colors group relative">
      <td className="absolute left-0 top-0 bottom-0 w-1 bg-error"></td>
      <td className="py-2 px-4 text-body-sm text-on-surface-variant">2023-10-24 08:15</td>
      <td className="py-2 px-4 font-code-data text-on-surface">LOG-9942</td>
      <td className="py-2 px-4">
      <div className="flex flex-col">
      <span className="text-body-base font-medium text-on-surface">Main Irrigation Pump P-01</span>
      <span className="text-body-sm text-on-surface-variant truncate max-w-md">Emergency bearing replacement due to vibration anomaly.</span>
      </div>
      </td>
      <td className="py-2 px-4 text-body-sm text-on-surface">J. Miller</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-error-container/20 text-error border border-error/20 uppercase tracking-wide">
                                              Critical Fix
                                          </span>
      </td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Details">
      <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 2 (Completed) */}
      <tr className="h-12 bg-surface-container-lowest hover:bg-surface-bright transition-colors group relative">
      <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
      <td className="py-2 px-4 text-body-sm text-on-surface-variant">2023-10-23 14:30</td>
      <td className="py-2 px-4 font-code-data text-on-surface">LOG-9941</td>
      <td className="py-2 px-4">
      <div className="flex flex-col">
      <span className="text-body-base font-medium text-on-surface">Zone B Temp Sensor Array</span>
      <span className="text-body-sm text-on-surface-variant truncate max-w-md">Routine bi-weekly recalibration against master gauge.</span>
      </div>
      </td>
      <td className="py-2 px-4 text-body-sm text-on-surface">A. Chen</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-primary-container/20 text-primary border border-primary/20 uppercase tracking-wide">
                                              Completed
                                          </span>
      </td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Details">
      <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 3 (Warning) */}
      <tr className="h-12 bg-surface hover:bg-surface-bright transition-colors group relative">
      <td className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></td>
      <td className="py-2 px-4 text-body-sm text-on-surface-variant">2023-10-23 09:00</td>
      <td className="py-2 px-4 font-code-data text-on-surface">LOG-9940</td>
      <td className="py-2 px-4">
      <div className="flex flex-col">
      <span className="text-body-base font-medium text-on-surface">Ventilation Fan V-12</span>
      <span className="text-body-sm text-on-surface-variant truncate max-w-md">Filter debris clearing. Noted unusual motor hum. Monitoring.</span>
      </div>
      </td>
      <td className="py-2 px-4 text-body-sm text-on-surface">S. Rahman</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-tertiary-container/20 text-tertiary border border-tertiary/20 uppercase tracking-wide">
                                              Under Review
                                          </span>
      </td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Details">
      <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
      </button>
      </td>
      </tr>
      {/* Row 4 (Completed) */}
      <tr className="h-12 bg-surface-container-lowest hover:bg-surface-bright transition-colors group relative">
      <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
      <td className="py-2 px-4 text-body-sm text-on-surface-variant">2023-10-22 16:45</td>
      <td className="py-2 px-4 font-code-data text-on-surface">LOG-9939</td>
      <td className="py-2 px-4">
      <div className="flex flex-col">
      <span className="text-body-base font-medium text-on-surface">Nutrient Dosatron N-02</span>
      <span className="text-body-sm text-on-surface-variant truncate max-w-md">Flushed lines and replaced intake seals. Standard PM.</span>
      </div>
      </td>
      <td className="py-2 px-4 text-body-sm text-on-surface">M. Davis</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-primary-container/20 text-primary border border-primary/20 uppercase tracking-wide">
                                              Completed
                                          </span>
      </td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Details">
      <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="bg-surface-container-high border-t border-outline-variant px-4 py-3 flex items-center justify-between">
      <span className="text-body-sm text-on-surface-variant">Showing 1 to 4 of 248 entries</span>
      <div className="flex items-center gap-2">
      <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-variant disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
      </button>
      <span className="text-body-sm font-medium text-on-surface px-2">1 / 62</span>
      <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-variant">
      <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
