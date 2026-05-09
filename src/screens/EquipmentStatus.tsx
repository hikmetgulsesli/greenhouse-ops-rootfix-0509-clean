// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
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

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-[240px] bg-surface-container dark:bg-surface-container flex-col py-unit-container-margin border-r border-outline-variant z-50">
      {/* Header */}
      <div className="px-gutter mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant shrink-0">
      <img alt="Greenhouse Operator Avatar" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional male agricultural engineer in a modern, dark-themed industrial setting. The lighting is moody with subtle blue and green technical reflections highlighting his face. He is looking off-camera with a focused, serious expression. The overall aesthetic matches a sleek, high-tech corporate UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8or9kgpyZKkU2TjuMpXeqJGKxesjsytRi11nyrSJ8rd0x8swZ1EJ27MfMMtyH5U1pUmcwBxSFwtocPZKXks0VOrawy-RkuECuRRrV0D9d-cjXGLrUHqMV4Bj1cM08guIXjvo1dRkE7vxmWuMXtq18x9t6OIJp_q8uscJsGDZF4L7LVY6kMeKk2LdertX5tSzen92AeCYz5lgpoAEqhb-WfzhJ9LgXOuCjp4nbUawLZd4kK57Fa-viW21JK-GdypEsIYTIx4TeD8w" />
      </div>
      <div className="overflow-hidden">
      <h2 className="font-headline-md text-headline-md font-bold text-primary truncate">FloraOps Pro</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone A-1 Main</p>
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 px-3 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
                      Task Board
                  </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary font-bold border-l-4 border-primary bg-secondary-container/10 scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="database">database</span>
                      Logs
                  </a>
      </div>
      {/* Emergency Stop CTA */}
      <div className="px-4 mt-auto mb-4">
      <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-error-container text-on-error-container font-title-sm text-title-sm rounded-lg hover:bg-error transition-colors">
      <span className="material-symbols-outlined">warning</span>
                      Emergency Stop
                  </button>
      </div>
      {/* Footer Tabs */}
      <div className="px-3 flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col min-w-0 md:ml-[240px] relative">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 w-full md:w-[calc(100%-240px)] z-40 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      <div className="flex items-center gap-4 flex-1">
      <h1 className="font-headline-md text-headline-md font-bold text-primary hidden sm:block">Greenhouse Console</h1>
      {/* Search Bar (on_left) */}
      <div className="relative w-full max-w-md ml-0 sm:ml-4">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm transition-colors placeholder:text-on-surface-variant/50" placeholder="Search equipment..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" data-icon="thermostat">thermostat</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" data-icon="humidity_mid">humidity_mid</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
      <span className="material-symbols-outlined" data-icon="sensors">sensors</span>
      </button>
      <div className="w-px h-8 bg-outline-variant mx-2"></div>
      <button className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
                          Account
                          <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Dashboard Canvas */}
      <div className="flex-1 overflow-auto pt-24 pb-container-margin px-container-margin">
      <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header & Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-background">Equipment Overview</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mt-1">Real-time status and maintenance tracking for Zone A-1.</p>
      </div>
      {/* Quick Stats */}
      <div className="flex gap-4">
      <div className="bg-surface border border-outline-variant rounded-lg px-4 py-2 flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">ONLINE</p>
      <p className="font-title-sm text-title-sm text-on-surface">142 Units</p>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg px-4 py-2 flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-tertiary"></div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">MAINTENANCE</p>
      <p className="font-title-sm text-title-sm text-on-surface">5 Pending</p>
      </div>
      </div>
      </div>
      </div>
      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
      {/* Card 1: Normal Status */}
      <div className="bg-surface relative overflow-hidden rounded-lg border border-outline-variant p-5 flex flex-col gap-4 group hover:bg-surface-variant/50 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined" data-weight="fill">water_pump</span>
      </div>
      <div>
      <h3 className="font-title-sm text-title-sm text-on-background">Main Irrigation Pump</h3>
      <p className="font-code-data text-code-data text-on-surface-variant">ID: PMP-A1-01</p>
      </div>
      </div>
      <span className="px-2 py-1 bg-primary/10 text-primary font-label-caps text-label-caps rounded">ACTIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/50">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">FLOW RATE</p>
      <p className="font-code-data text-code-data text-on-surface">120 L/min</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">UPTIME</p>
      <p className="font-code-data text-code-data text-on-surface">99.8%</p>
      </div>
      </div>
      <div className="flex gap-2 mt-auto pt-2">
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Calibrate
                                  </button>
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Schedule
                                  </button>
      </div>
      </div>
      {/* Card 2: Warning Status */}
      <div className="bg-surface relative overflow-hidden rounded-lg border border-outline-variant p-5 flex flex-col gap-4 group hover:bg-surface-variant/50 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-tertiary/20 flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined" data-weight="fill">air</span>
      </div>
      <div>
      <h3 className="font-title-sm text-title-sm text-on-background">HVAC Blower Fan</h3>
      <p className="font-code-data text-code-data text-on-surface-variant">ID: FAN-A1-04</p>
      </div>
      </div>
      <span className="px-2 py-1 bg-tertiary/10 text-tertiary font-label-caps text-label-caps rounded">SERVICE SOON</span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/50">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">VIBRATION</p>
      <p className="font-code-data text-code-data text-tertiary">2.4 mm/s (High)</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">RPM</p>
      <p className="font-code-data text-code-data text-on-surface">1450</p>
      </div>
      </div>
      <div className="flex gap-2 mt-auto pt-2">
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Inspect
                                  </button>
      <button className="flex-1 py-1.5 px-3 border border-tertiary/50 text-tertiary hover:bg-tertiary/10 rounded font-code-data text-code-data transition-colors">
                                      Schedule Maint.
                                  </button>
      </div>
      </div>
      {/* Card 3: Error Status */}
      <div className="bg-surface relative overflow-hidden rounded-lg border border-outline-variant p-5 flex flex-col gap-4 group hover:bg-surface-variant/50 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-error/20 flex items-center justify-center text-error">
      <span className="material-symbols-outlined" data-weight="fill">lightbulb</span>
      </div>
      <div>
      <h3 className="font-title-sm text-title-sm text-on-background">LED Array Grid 2</h3>
      <p className="font-code-data text-code-data text-on-surface-variant">ID: LED-A1-02</p>
      </div>
      </div>
      <span className="px-2 py-1 bg-error/10 text-error font-label-caps text-label-caps rounded">OFFLINE</span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/50">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">POWER DRAW</p>
      <p className="font-code-data text-code-data text-error">0.0 kW</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">TEMP</p>
      <p className="font-code-data text-code-data text-on-surface">22°C</p>
      </div>
      </div>
      <div className="flex gap-2 mt-auto pt-2">
      <button className="flex-1 py-1.5 px-3 bg-error-container text-on-error-container hover:bg-error rounded font-code-data text-code-data transition-colors">
                                      Reset Breaker
                                  </button>
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Details
                                  </button>
      </div>
      </div>
      {/* Card 4: Normal Status */}
      <div className="bg-surface relative overflow-hidden rounded-lg border border-outline-variant p-5 flex flex-col gap-4 group hover:bg-surface-variant/50 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined" data-weight="fill">science</span>
      </div>
      <div>
      <h3 className="font-title-sm text-title-sm text-on-background">Nutrient Doser</h3>
      <p className="font-code-data text-code-data text-on-surface-variant">ID: DOS-A1-01</p>
      </div>
      </div>
      <span className="px-2 py-1 bg-primary/10 text-primary font-label-caps text-label-caps rounded">ACTIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/50">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">PH LEVEL</p>
      <p className="font-code-data text-code-data text-on-surface">6.2</p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant">EC LEVEL</p>
      <p className="font-code-data text-code-data text-on-surface">1.8 mS/cm</p>
      </div>
      </div>
      <div className="flex gap-2 mt-auto pt-2">
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Calibrate
                                  </button>
      <button className="flex-1 py-1.5 px-3 border border-outline-variant text-on-surface hover:text-primary hover:border-primary rounded font-code-data text-code-data transition-colors">
                                      Flush
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
