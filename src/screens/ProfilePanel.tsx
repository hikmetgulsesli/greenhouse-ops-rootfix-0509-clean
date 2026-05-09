// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Profile Panel
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

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function ProfilePanel(_props: ProfilePanelProps = {}) {
  return (
    <>
      <header className="flex justify-between items-center px-gutter h-16 border-b border-outline-variant bg-surface sticky top-0 z-50">
      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded-DEFAULT px-2 py-1">
      <span className="material-symbols-outlined">arrow_back</span>
      <span className="font-body-base text-body-base font-semibold">Back to Console</span>
      </button>
      <div className="flex-1 text-center">
      <h1 className="font-headline-md text-headline-md text-primary">Operator Settings</h1>
      </div>
      <div className="w-32"></div>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto p-container-margin">
      <div className="space-y-container-margin">
      <section className="bg-surface rounded-xl p-container-margin border border-outline-variant flex flex-col md:flex-row items-center md:items-start gap-container-margin relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-primary-container"></div>
      <div className="w-24 h-24 rounded-full border-2 border-outline-variant overflow-hidden flex-shrink-0 bg-surface-variant">
      <img alt="Sarah Jenkins profile picture" className="w-full h-full object-cover" data-alt="A highly detailed, cinematic headshot of a professional female agricultural engineer wearing functional corporate workwear. She is set against a blurred background of a high-tech indoor greenhouse glowing with subtle blue and purple LED grow lights. The lighting is dramatic yet professional, emphasizing reliability and technical expertise within a dark, modern corporate aesthetic. Shot on a 50mm lens with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2dom3vlj65GPiNeBQkwDMckQkODIGNtbpqrJ8np5mMcuLxeJyvwlBKZZJkiB1xdhthRompxXfChckZ_pIU8uuiQghL9CpAnOXLv4keJrePNPi5giLIxhEj1WOpZUOuoFZrd05E_6ZoS6A-aOuVGtcSFe1pTUHKoRk0X2CHcUzNVmSNo8vDU9rMCF5uVIA2uB6XVOhjdQCsg-Xgk8Yaf_NLalJhyGWHuZbEwLsKiiTnCsicHoF4g3WFJnPR7Uwbn9Ur0tukQSo9Mc" />
      </div>
      <div className="flex-1 text-center md:text-left space-y-2">
      <h2 className="font-display-lg text-display-lg text-on-surface m-0">Sarah Jenkins</h2>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/15 text-primary font-label-caps text-label-caps tracking-wider uppercase border border-primary/20">
                                  Senior Agronomist
                              </span>
      <span className="inline-flex items-center gap-1 text-on-surface-variant font-code-data text-code-data">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                                  Zone A-1 Main
                              </span>
      </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto">
      <button className="w-full md:w-auto px-4 py-2 bg-transparent border border-outline rounded text-on-surface hover:bg-surface-variant transition-colors font-title-sm text-title-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
                              Edit Profile
                          </button>
      </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-container-margin">
      <section className="bg-surface rounded-xl border border-outline-variant overflow-hidden flex flex-col">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">badge</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Account Details</h3>
      </div>
      <div className="p-container-margin space-y-6 flex-1">
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Employee ID</label>
      <div className="font-code-data text-code-data text-on-surface bg-background border border-outline-variant rounded px-3 py-2 w-full max-w-sm">
                                      AGR-88392-SJ
                                  </div>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Email Address</label>
      <input className="font-body-base text-body-base text-on-surface bg-background border border-outline-variant rounded px-3 py-2 w-full max-w-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-not-allowed text-on-surface-variant" readOnly={true} type="email" value="s.jenkins@floraops.pro" />
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Secure Phone</label>
      <input className="font-body-base text-body-base text-on-surface bg-background border border-outline rounded px-3 py-2 w-full max-w-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" type="tel" value="+1 (555) 019-2834" />
      </div>
      </div>
      </section>
      <section className="bg-surface rounded-xl border border-outline-variant overflow-hidden flex flex-col">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">notifications_active</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Alert Preferences</h3>
      </div>
      <div className="p-0 flex-1">
      <ul className="divide-y divide-outline-variant">
      <li className="p-container-margin flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-error-container/20 border border-error/30 flex items-center justify-center text-error">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface">Critical System Alarms</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Temperature spikes, equipment failure</p>
      </div>
      </div>
      <div className="w-12 h-6 bg-primary-container rounded-full relative cursor-pointer shadow-inner">
      <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary-container rounded-full shadow-sm"></div>
      </div>
      </li>
      <li className="p-container-margin flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">water_drop</span>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface">Nutrient &amp; Hydration Updates</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Scheduled feedings, reservoir levels</p>
      </div>
      </div>
      <div className="w-12 h-6 bg-primary-container rounded-full relative cursor-pointer shadow-inner">
      <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary-container rounded-full shadow-sm"></div>
      </div>
      </li>
      <li className="p-container-margin flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-variant border border-outline-variant flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">analytics</span>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface">Daily Yield Reports</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">End of shift summaries</p>
      </div>
      </div>
      <div className="w-12 h-6 bg-surface-variant border border-outline rounded-full relative cursor-pointer">
      <div className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full"></div>
      </div>
      </li>
      </ul>
      </div>
      </section>
      <section className="bg-surface rounded-xl border border-outline-variant overflow-hidden col-span-1 lg:col-span-2">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">tune</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Interface Configuration</h3>
      </div>
      <div className="p-container-margin grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface mb-3">Default Dashboard View</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Select the zone that loads upon login.</p>
      <div className="relative">
      <select className="appearance-none font-body-base text-body-base text-on-surface bg-background border border-outline rounded px-4 py-3 w-full focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer pr-10">
      <option value="zone-a">Zone A-1 Main (Current)</option>
      <option value="zone-b">Zone B-2 Nursery</option>
      <option value="global">Global Operations Overview</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-on-surface-variant">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      </div>
      <div>
      <h4 className="font-title-sm text-title-sm text-on-surface mb-3">Data Density</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Adjust table row heights for monitor setup.</p>
      <div className="flex gap-4">
      <label className="flex-1 cursor-pointer">
      <input checked={true} className="peer sr-only" name="density" type="radio" />
      <div className="p-4 rounded-lg border border-outline-variant bg-background peer-checked:border-primary peer-checked:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 text-center">
      <span className="material-symbols-outlined text-on-surface peer-checked:text-primary">table_rows</span>
      <span className="font-label-caps text-label-caps text-on-surface font-semibold">Standard</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">48px rows</span>
      </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="density" type="radio" />
      <div className="p-4 rounded-lg border border-outline-variant bg-background peer-checked:border-primary peer-checked:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 text-center">
      <span className="material-symbols-outlined text-on-surface peer-checked:text-primary">reorder</span>
      <span className="font-label-caps text-label-caps text-on-surface font-semibold">Condensed</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">32px rows</span>
      </div>
      </label>
      </div>
      </div>
      </div>
      </section>
      </div>
      <section className="mt-8 pt-8 border-t border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
      <h3 className="font-title-sm text-title-sm text-error mb-1">Session Management</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Securely end your current session on this terminal.</p>
      </div>
      <button className="px-6 py-2 rounded bg-background border border-error text-error hover:bg-error-container/20 transition-colors font-title-sm text-title-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined">logout</span>
                          Sign Out
                      </button>
      </section>
      </div>
      </main>
    </>
  );
}
