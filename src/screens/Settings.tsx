// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Settings
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

export interface SettingsProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function Settings(_props: SettingsProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col h-full py-unit-container-margin z-40 hidden md:flex">
      <div className="px-container-margin mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-primary">FloraOps Pro</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Zone A-1 Main</p>
      </div>
      <ul className="flex-1 space-y-1 px-4">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                          Task Board
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                          Equipment
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px]">database</span>
                          Logs
                      </a>
      </li>
      </ul>
      <div className="px-4 mt-auto space-y-1">
      <button className="w-full flex justify-center items-center gap-2 py-3 mb-4 rounded bg-error-container text-on-error-container font-title-sm text-title-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined text-[20px]">warning</span>
                      Emergency Stop
                  </button>
      <ul className="border-t border-outline-variant pt-4 space-y-1">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-primary font-bold border-l-4 border-primary bg-secondary-container/10 group scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px]">help</span>
                              Help
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 w-full md:w-[calc(100%-240px)] z-50 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Trigger */}
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <h2 className="font-title-sm text-title-sm text-on-surface hidden md:block">Greenhouse Console</h2>
      </div>
      <div className="flex items-center gap-4">
      {/* Search Bar on_left conceptually */}
      <div className="relative hidden sm:block w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
      <input className="w-full bg-surface-container-high border border-outline-variant rounded-full py-2 pl-10 pr-4 text-on-surface font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none placeholder-outline" placeholder="Search systems..." type="text" />
      </div>
      <div className="flex items-center gap-2 border-r border-outline-variant pr-4">
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">thermostat</span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">humidity_mid</span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">sensors</span>
      </button>
      </div>
      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular profile picture of an operator in a dark blue corporate uniform. High quality, clear lighting. The background is a subtle dark grey. Professional corporate headshot style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVi2JeQftQkUB62-loSksZLTHmhJomxAD1xgwPBNu6fwtfJdkLkkgiQQKVZ70p5cU7otgjSuhT7P9z6vBOwX3rzjtFHIxm35891rT2_NREYCE3HQt278WLCrQXKCYhwhnhnjlTkw5KH86KMYAwFSlOWpzEQrGMJk1w2x92srXRFeHcFZAYAVuvPf96WA8u5DwX_aPF0VH2yalLG9VPiTqalNjjJcmkfnWcOIeGfRG14JQQm6SSBOlTUsswA4K_gZvAxV215gP56Uk" />
      <span className="font-body-base text-body-base hidden lg:block">Account</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 mt-16 md:ml-[240px] overflow-y-auto p-container-margin w-full">
      <div className="max-w-5xl mx-auto space-y-8">
      <header>
      <h2 className="font-display-lg text-display-lg text-on-surface">System Settings</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mt-2">Manage global preferences and environmental control parameters.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Navigation Column */}
      <div className="lg:col-span-1 space-y-2">
      <button className="w-full flex items-center justify-between p-4 bg-surface-variant rounded-lg border border-primary-container text-primary font-title-sm text-title-sm transition-colors text-left">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined">tune</span>
                                  General Preferences
                              </div>
      </button>
      <button className="w-full flex items-center justify-between p-4 bg-surface-container rounded-lg border border-transparent text-on-surface-variant font-title-sm text-title-sm hover:bg-surface-variant transition-colors text-left">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined">notifications_active</span>
                                  Alerts &amp; Notifications
                              </div>
      </button>
      <button className="w-full flex items-center justify-between p-4 bg-surface-container rounded-lg border border-transparent text-on-surface-variant font-title-sm text-title-sm hover:bg-surface-variant transition-colors text-left">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined">admin_panel_settings</span>
                                  Security &amp; Access
                              </div>
      </button>
      <button className="w-full flex items-center justify-between p-4 bg-surface-container rounded-lg border border-transparent text-on-surface-variant font-title-sm text-title-sm hover:bg-surface-variant transition-colors text-left">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined">memory</span>
                                  Sensor Calibration
                              </div>
      </button>
      </div>
      {/* Settings Content Area */}
      <div className="lg:col-span-2 space-y-6">
      {/* Section: Display */}
      <section className="bg-surface-container p-6 rounded-xl border border-outline-variant">
      <h3 className="font-title-sm text-title-sm text-on-surface mb-4 border-b border-outline-variant pb-2">Display &amp; Interface</h3>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
      <h4 className="font-body-base text-body-base text-on-surface">Data Density</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Adjust row height for operational tables.</p>
      </div>
      <div className="flex bg-surface-container-high rounded p-1 border border-outline-variant">
      <button className="px-4 py-1.5 rounded bg-surface-variant text-primary font-body-sm text-body-sm border border-outline-variant">Standard</button>
      <button className="px-4 py-1.5 rounded text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-variant/50">Condensed</button>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <h4 className="font-body-base text-body-base text-on-surface">High Contrast Mode</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Increase outline visibility for status indicators.</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-on-surface border-4 border-surface-container appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10 translate-x-6" id="toggle1" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle1"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Environmental Defaults */}
      <section className="bg-surface-container p-6 rounded-xl border border-outline-variant">
      <h3 className="font-title-sm text-title-sm text-on-surface mb-4 border-b border-outline-variant pb-2">Global Environment Defaults</h3>
      <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
      <label className="block font-body-sm text-body-sm text-on-surface mb-2">Default Target Temperature (°C)</label>
      <div className="relative">
      <input className="w-full bg-surface-dim border border-outline-variant rounded p-3 text-on-surface font-code-data text-code-data focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none" type="number" value="24.5" />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined text-[18px]">thermostat</span>
      </div>
      </div>
      <div>
      <label className="block font-body-sm text-body-sm text-on-surface mb-2">Default Humidity Threshold (%)</label>
      <div className="relative">
      <input className="w-full bg-surface-dim border border-outline-variant rounded p-3 text-on-surface font-code-data text-code-data focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none" type="number" value="65" />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined text-[18px]">humidity_mid</span>
      </div>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-outline-variant/50">
      <div>
      <h4 className="font-body-base text-body-base text-on-surface">Auto-Save Calibration Logs</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Automatically export daily sensor logs to central storage.</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-on-surface-variant border-4 border-surface-container appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="toggle2" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Save Action */}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-outline-variant">
      <button className="px-6 py-2 rounded border border-outline text-on-surface font-title-sm text-title-sm hover:bg-surface-variant transition-colors">Discard Changes</button>
      <button className="px-6 py-2 rounded bg-primary-container text-white font-title-sm text-title-sm hover:bg-inverse-primary transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">save</span>
                                  Save Preferences
                              </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
