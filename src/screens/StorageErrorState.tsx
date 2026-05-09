// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
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

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function StorageErrorState({ onAction }: StorageErrorStateProps = {}) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 w-[calc(100%-240px)] z-50 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      <div className="flex items-center gap-4">
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Console</h1>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="notifications" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="thermostat" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full">
      <span className="material-symbols-outlined">thermostat</span>
      </button>
      <button aria-label="humidity" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full">
      <span className="material-symbols-outlined">humidity_mid</span>
      </button>
      <button aria-label="sensors" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full">
      <span className="material-symbols-outlined">sensors</span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-2"></div>
      <button aria-label="Account" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSc-ezZKKH0B98B-A333iBXKb7jLd_V6wl1y4gixMKEwHxHPNpmjxCojAARdeiSBXCwCJhSz1qd3gn10GPj4c7CeQZMvjTucEPGgHh3-Kzhmd0OhKb9UGZg1chAnLDq-LHLnZjAK1mFpMXZjqNAe71veMGg8GoaGxX-uCOKLyIHTak-LNSkj9_BcSNH4gXYMHkPZzbcEeOFFxK7HyDLfETZbQkobt_N36P7_nL8xuzNN0VfD5fsMBbks23Eulp9WV4B0zHh0881jQ" />
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col h-full py-unit-container-margin z-40">
      <div className="px-gutter mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg border border-outline-variant shrink-0">
                      F
                  </div>
      <div className="overflow-hidden">
      <h2 className="font-headline-md text-headline-md font-bold text-primary truncate">FloraOps Pro</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone A-1 Main</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto px-3 space-y-1">
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">database</span>
                      Logs
                  </a>
      </div>
      <div className="px-3 mt-auto pt-4 border-t border-outline-variant space-y-1">
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">help</span>
                      Help
                  </a>
      <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-error-container text-on-error-container font-title-sm text-title-sm hover:bg-error/20 transition-colors border border-error/30">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                      Emergency Stop
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-[240px] mt-16 flex-1 flex flex-col items-center justify-center p-container-margin min-h-[calc(100vh-64px)] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1621245053787-897db6746927?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-background/90 before:backdrop-blur-sm" data-alt="A macro shot of a sleek, dark industrial server rack environment, subtly out of focus. Glowing red error LEDs punctuate the dark slate and deep navy panels, creating a sense of technical urgency. The lighting is low-key, moody, and highly contrasted, fitting a modern corporate technical monitoring center. The overall aesthetic implies sophisticated data infrastructure experiencing a critical, yet contained, fault.">
      {/* Error State Card */}
      <div className="relative z-10 w-full max-w-2xl bg-surface border border-error/30 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Error Indicator Column */}
      <div className="bg-error-container/20 md:w-32 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-error/20">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(147,0,10,0.4)] animate-pulse">
      <span className="material-symbols-outlined text-on-error-container text-[40px]" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      <div className="text-error font-label-caps text-label-caps tracking-widest text-center">ERROR 503</div>
      </div>
      {/* Error Details Column */}
      <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Storage Persistence Failure</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mb-6 leading-relaxed">
                          The console is unable to commit sensor telemetry to local storage. Temporary cache is active, but immediate intervention is required to prevent data loss. Zone A-1 monitoring continues via secondary volatile memory.
                      </p>
      {/* Technical Details Accordion (Simulated) */}
      <div className="mb-8 border border-outline-variant rounded-lg bg-surface-container-low">
      <div className="px-4 py-3 flex items-center justify-between border-b border-outline-variant cursor-pointer hover:bg-surface-variant transition-colors">
      <span className="font-code-data text-code-data text-on-surface">Diagnostic Code: ERR_DSK_FULL_0x9A</span>
      <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
      </div>
      <div className="px-4 py-3 font-code-data text-[12px] text-on-surface-variant font-mono whitespace-pre-wrap">Target: /dev/nvme0n1p3
      Space Available: 0% (Critical)
      Mount: /var/log/floraops
      Status: Read-only file system</div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
      <button
        onClick={() => onAction?.("retry-connection")}
        className="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-title-sm text-title-sm py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
      >
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>refresh</span>
                              Retry Connection
                          </button>
      <button
        onClick={() => onAction?.("reset-storage-cache")}
        className="flex-1 bg-transparent border border-outline hover:border-on-surface hover:text-on-surface text-on-surface-variant font-title-sm text-title-sm py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
      <span className="material-symbols-outlined">delete_sweep</span>
                              Reset Storage Cache
                          </button>
      </div>
      </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-error/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      </main>
    </>
  );
}
