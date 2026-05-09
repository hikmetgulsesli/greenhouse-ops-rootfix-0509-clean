// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
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

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function FilteredOverview(_props: FilteredOverviewProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col py-container-margin z-50">
      {/* Header */}
      <div className="px-container-margin mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-on-primary-container" data-icon="eco">eco</span>
      </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-primary">FloraOps Pro</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Zone A-1 Main</div>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 px-3 flex flex-col gap-1">
      {/* Dashboard */}
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span>Dashboard</span>
      </a>
      {/* Task Board */}
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span>Task Board</span>
      </a>
      {/* Equipment */}
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      {/* Logs (ACTIVE) */}
      <a className="flex items-center gap-3 px-3 py-2 rounded text-primary font-bold border-l-4 border-primary bg-secondary-container/10 scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined fill" data-icon="database">database</span>
      <span>Logs</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="px-3 flex flex-col gap-1 mt-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      <span>Help</span>
      </a>
      </div>
      {/* CTA */}
      <div className="px-container-margin mt-6">
      <button className="w-full bg-error-container text-on-error-container font-title-sm text-title-sm py-2 px-4 rounded hover:bg-error/20 transition-colors border border-error">
                      Emergency Stop
                  </button>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 ml-[240px] flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 w-[calc(100%-240px)] z-40 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      {/* Brand / Search Area */}
      <div className="flex items-center gap-4 flex-1">
      <div className="font-headline-md text-headline-md font-bold text-primary hidden md:block">Greenhouse Console</div>
      {/* Search Bar */}
      <div className="relative w-full max-w-md ml-4">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
      <input className="w-full bg-surface-container-highest border border-outline-variant rounded-full py-2 pl-10 pr-4 text-on-surface font-body-base text-body-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant/50" placeholder="Search logs, events, anomalies..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-2">
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="thermostat">thermostat</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="humidity_mid">humidity_mid</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="sensors">sensors</span>
      </button>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant hover:border-primary transition-colors">
      <img alt="User profile" className="w-6 h-6 rounded-full" data-alt="A small circular avatar image showing a professional headshot of a person, representing a user profile within a dark mode corporate dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwBUjcwbP_qG0PqNGqtOSIZRNxqvoD-0B9ETVKULXv7UdBIoTe6EqWyKILYijvmrSbnTCBpCCTO_W4gYKb58k66qUHuqj8db0jxoyA8nWZJCaJSABd9xB8zrxQxaT-luQ6SbK2tlu103NjFYs7IC0VxqMZwwyBuGJnf80Jrjoa-sl1NdcOFxtVOHWX99HqdHECtx6YzPVinyUFvGeyiz-ag8JjwBeBPKZj0SXBoF2x31FKnL3jShKtWYC4pmcd-ctHPQu1pC4ro3E" />
      <span className="font-body-sm text-body-sm text-on-surface hidden lg:block">Account</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 mt-16 p-container-margin flex flex-col gap-gutter bg-background overflow-x-hidden">
      {/* Page Header & Filters Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
      <div>
      <h1 className="font-display-lg text-display-lg text-on-surface">Filtered Log Events</h1>
      <p className="font-body-base text-body-base text-on-surface-variant mt-1">Showing 142 results based on current criteria</p>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded text-on-surface font-title-sm text-title-sm hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" data-icon="download">download</span>
                              Export CSV
                          </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded font-title-sm text-title-sm hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
                              Modify Filters
                          </button>
      </div>
      </div>
      {/* Active Filters Bento Area */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-outline-variant pb-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Active Search Parameters</span>
      <button className="text-primary font-body-sm text-body-sm hover:underline">Clear All</button>
      </div>
      <div className="flex flex-wrap gap-2">
      {/* Filter Chips */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded border border-outline-variant">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Zone:</span>
      <span className="font-title-sm text-body-sm text-on-surface">A-1, B-2</span>
      <button className="text-on-surface-variant hover:text-error transition-colors ml-1 flex items-center">
      <span className="material-symbols-outlined" data-icon="close" style={{fontSize: "16px"}}>close</span>
      </button>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded border border-outline-variant">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Timeframe:</span>
      <span className="font-title-sm text-body-sm text-on-surface">Last 24 Hours</span>
      <button className="text-on-surface-variant hover:text-error transition-colors ml-1 flex items-center">
      <span className="material-symbols-outlined" data-icon="close" style={{fontSize: "16px"}}>close</span>
      </button>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-error-container/20 border border-error/50 rounded">
      <span className="font-body-sm text-body-sm text-error">Severity:</span>
      <span className="font-title-sm text-body-sm text-error">Critical, Warning</span>
      <button className="text-error hover:text-on-error transition-colors ml-1 flex items-center">
      <span className="material-symbols-outlined" data-icon="close" style={{fontSize: "16px"}}>close</span>
      </button>
      </div>
      </div>
      </div>
      {/* Data Table (Condensed Mode) */}
      <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col flex-1">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-cell-padding-x py-cell-padding-y bg-surface-container-low border-b border-outline-variant sticky top-0 z-10">
      <div className="col-span-2 font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-1 cursor-pointer hover:text-on-surface">
                              Timestamp <span className="material-symbols-outlined" data-icon="arrow_downward" style={{fontSize: "14px"}}>arrow_downward</span>
      </div>
      <div className="col-span-2 font-label-caps text-label-caps text-on-surface-variant uppercase">Zone / Node</div>
      <div className="col-span-2 font-label-caps text-label-caps text-on-surface-variant uppercase">Sensor Type</div>
      <div className="col-span-5 font-label-caps text-label-caps text-on-surface-variant uppercase">Event Description &amp; Value</div>
      <div className="col-span-1 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Action</div>
      </div>
      {/* Table Body */}
      <div className="flex flex-col overflow-y-auto">
      {/* Row 1 (Error) */}
      <div className="grid grid-cols-12 gap-4 px-cell-padding-x py-1.5 border-b border-outline-variant/50 hover:bg-surface-variant/50 transition-colors relative group h-10 items-center">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <div className="col-span-2 font-code-data text-code-data text-on-surface pl-2">14:32:05.112</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Zone A-1 / Node 4</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-error" data-icon="thermostat" style={{fontSize: "16px"}}>thermostat</span>
                                  Temperature
                              </div>
      <div className="col-span-5 flex items-center gap-3">
      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container uppercase tracking-wider">Critical</span>
      <span className="font-body-sm text-body-sm text-on-surface truncate">Thermal runaway detected. Delta exceeds +5°C/hr threshold.</span>
      <span className="font-code-data text-code-data text-error ml-auto">38.2°C</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" data-icon="open_in_new" style={{fontSize: "20px"}}>open_in_new</span>
      </button>
      </div>
      </div>
      {/* Row 2 (Warning) */}
      <div className="grid grid-cols-12 gap-4 px-cell-padding-x py-1.5 border-b border-outline-variant/50 hover:bg-surface-variant/50 transition-colors relative group h-10 items-center even:bg-surface-container-low/50">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
      <div className="col-span-2 font-code-data text-code-data text-on-surface pl-2">14:28:44.091</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Zone B-2 / Node 1</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary" data-icon="water_drop" style={{fontSize: "16px"}}>water_drop</span>
                                  Irrigation
                              </div>
      <div className="col-span-5 flex items-center gap-3">
      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-container text-on-tertiary-container uppercase tracking-wider">Warn</span>
      <span className="font-body-sm text-body-sm text-on-surface truncate">Flow rate below expected baseline during active cycle.</span>
      <span className="font-code-data text-code-data text-tertiary ml-auto">1.2 L/m</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" data-icon="open_in_new" style={{fontSize: "20px"}}>open_in_new</span>
      </button>
      </div>
      </div>
      {/* Row 3 (Normal) */}
      <div className="grid grid-cols-12 gap-4 px-cell-padding-x py-1.5 border-b border-outline-variant/50 hover:bg-surface-variant/50 transition-colors relative group h-10 items-center">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="col-span-2 font-code-data text-code-data text-on-surface pl-2">14:15:00.000</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Zone A-1 / Master</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="air" style={{fontSize: "16px"}}>air</span>
                                  Ventilation
                              </div>
      <div className="col-span-5 flex items-center gap-3">
      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary-container/20 text-primary uppercase tracking-wider">Info</span>
      <span className="font-body-sm text-body-sm text-on-surface truncate">Scheduled exhaust cycle initiated. Dampers 1-4 open.</span>
      <span className="font-code-data text-code-data text-on-surface-variant ml-auto">Active</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" data-icon="open_in_new" style={{fontSize: "20px"}}>open_in_new</span>
      </button>
      </div>
      </div>
      {/* Row 4 (Normal) */}
      <div className="grid grid-cols-12 gap-4 px-cell-padding-x py-1.5 border-b border-outline-variant/50 hover:bg-surface-variant/50 transition-colors relative group h-10 items-center even:bg-surface-container-low/50">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="col-span-2 font-code-data text-code-data text-on-surface pl-2">14:05:12.884</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface-variant">Zone B-2 / Node 3</div>
      <div className="col-span-2 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="light_mode" style={{fontSize: "16px"}}>light_mode</span>
                                  Illumination
                              </div>
      <div className="col-span-5 flex items-center gap-3">
      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary-container/20 text-primary uppercase tracking-wider">Info</span>
      <span className="font-body-sm text-body-sm text-on-surface truncate">Supplemental LED array engaged based on PAR sensor reading.</span>
      <span className="font-code-data text-code-data text-on-surface-variant ml-auto">450 µmol</span>
      </div>
      <div className="col-span-1 flex justify-end">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" data-icon="open_in_new" style={{fontSize: "20px"}}>open_in_new</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
