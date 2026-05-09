// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
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

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EmptyState(_props: EmptyStateProps = {}) {
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-[240px] flex flex-col py-container-margin border-r border-outline-variant bg-surface-container z-40 hidden md:flex">
      {/* Header / Brand */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div className="overflow-hidden">
      <h1 className="font-headline-md text-headline-md font-bold text-primary truncate">FloraOps Pro</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone A-1 Main</p>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 flex flex-col gap-1 px-3">
      {/* Inactive */}
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors hover:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined text-outline">dashboard</span>
                      Dashboard
                  </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors hover:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined text-outline">assignment</span>
                      Task Board
                  </a>
      {/* Active State Navigation (Equipment is intent) */}
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary font-bold border-l-4 border-primary bg-secondary-container/10 scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
                      Equipment
                  </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors hover:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined text-outline">database</span>
                      Logs
                  </a>
      </div>
      {/* Emergency Stop CTA */}
      <div className="px-6 mb-6">
      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-error text-error hover:bg-error/10 transition-colors font-title-sm text-title-sm">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                      Emergency Stop
                  </button>
      </div>
      {/* Footer Tabs */}
      <div className="mt-auto px-3 border-t border-outline-variant pt-4 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined text-outline">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors" href="#">
      <span className="material-symbols-outlined text-outline">help</span>
                      Help
                  </a>
      </div>
      </nav>
      {/* JSON Component: TopAppBar */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-240px)] z-50 flex justify-between items-center px-gutter h-16 border-b border-outline-variant bg-surface">
      {/* Search Bar (Left) */}
      <div className="flex items-center flex-1 max-w-md">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input className="w-full bg-surface-container text-on-surface border border-outline-variant rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-base text-body-base placeholder-on-surface-variant" placeholder="Search equipment, logs..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4 ml-auto">
      <div className="flex items-center gap-2 hidden sm:flex">
      <button aria-label="notifications" className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="thermostat" className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined">thermostat</span>
      </button>
      <button aria-label="humidity_mid" className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined">humidity_mid</span>
      </button>
      <button aria-label="sensors" className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined">sensors</span>
      </button>
      </div>
      <div className="h-6 w-px bg-outline-variant mx-2 hidden sm:block"></div>
      <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-title-sm text-title-sm">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-secondary-container text-sm">person</span>
      </div>
      <span className="hidden sm:block">Account</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas: Empty State for Equipment */}
      <main className="w-full md:pl-[240px] pt-16 h-screen overflow-y-auto">
      <div className="max-w-5xl mx-auto p-container-margin h-full flex flex-col justify-center items-center pb-24">
      {/* Structural Container for Empty State to give it presence without heavy borders */}
      <div className="w-full max-w-2xl bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant p-10 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
      {/* Subtle background glow to add premium feel without breaking dark corporate rules */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
      {/* Central Icon Illustration */}
      <div className="w-24 h-24 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center mb-6 relative z-10">
      <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] animate-pulse"></div>
      <span className="material-symbols-outlined text-[48px] text-primary opacity-90" style={{fontVariationSettings: "'wght' 200"}}>
                              precision_manufacturing
                          </span>
      </div>
      {/* Typography Identity */}
      <h2 className="font-display-lg text-display-lg text-on-surface mb-3 relative z-10 tracking-tight">No Equipment Configured</h2>
      <p className="font-body-base text-body-base text-on-surface-variant max-w-md mb-8 relative z-10">
                          Zone A-1 currently has no active sensors, climate control arrays, or machinery tracked. Add your first piece of equipment to establish baseline environmental monitoring.
                      </p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
      <button className="flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-title-sm text-title-sm hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                              Add Equipment
                          </button>
      <button className="flex items-center justify-center gap-2 bg-transparent border border-outline text-on-surface px-6 py-3 rounded-lg font-title-sm text-title-sm hover:bg-surface-variant transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary">
      <span className="material-symbols-outlined text-[20px]">upload_file</span>
                              Import Catalog
                          </button>
      </div>
      </div>
      {/* Contextual Guidance / Next Steps (Bento Style hints) */}
      <div className="w-full max-w-2xl mt-12">
      <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-4 px-2">Quick Start Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Guide Card 1 */}
      <a className="bg-surface p-5 rounded-lg border border-outline-variant hover:border-primary/50 hover:bg-surface-container-highest transition-all group flex items-start gap-4" href="#">
      <div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-secondary">sensors</span>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface mb-1 group-hover:text-primary transition-colors">Sensor Pairing Guide</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Learn how to connect local telemetry devices to the central node.</p>
      </div>
      </a>
      {/* Guide Card 2 */}
      <a className="bg-surface p-5 rounded-lg border border-outline-variant hover:border-primary/50 hover:bg-surface-container-highest transition-all group flex items-start gap-4" href="#">
      <div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-secondary">settings_input_component</span>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface mb-1 group-hover:text-primary transition-colors">Supported Hardware</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">View the compatibility matrix for climate and irrigation units.</p>
      </div>
      </a>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
