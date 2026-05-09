// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
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

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-container-margin z-40 hidden md:flex">
      {/* Header */}
      <div className="px-container-margin mb-8 flex items-center gap-3">
      <img alt="Greenhouse Operator Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A close-up portrait of a professional agriculture technician wearing a dark corporate uniform, set against a blurred, high-tech indoor greenhouse environment. The lighting is crisp and cool, emphasizing a modern, technical, and reliable brand aesthetic suitable for an enterprise dashboard profile image." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzkrxGg_HmWuVXh8z3Ex1a0YWeZhqrWeitK5Tph1KCRkrd0lyZ2dzd0dIPFEvxyVAC4m-DraWOxFXMUhLzpAeI4cD5GQMn_T51hRLN_ghHxvzYVDBxbfAFUfD71IbOok6dqAO_PPj-CU6dtXhgCffEw8Ohk1AJlhyBYv4wX4pntQ2SNw1CFpbNNR4x3XCx8cpW8ElwKEkal61VlewQ4xV5sbRvFVD3sQ4j-JDeT9e-U5HE4M063t5wRQOMUt5nFCMhfO2_YEm4LWc" />
      <div>
      <h2 className="font-headline-md text-headline-md font-bold text-primary">FloraOps Pro</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zone A-1 Main</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined group-hover:text-on-surface transition-colors" data-icon="dashboard">dashboard</span>
      <span className="group-hover:text-on-surface transition-colors">Dashboard</span>
      </a>
      {/* ACTIVE TAB */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-l-4 border-primary bg-secondary-container/10 active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined filled" data-icon="assignment">assignment</span>
      <span>Task Board</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined group-hover:text-on-surface transition-colors" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="group-hover:text-on-surface transition-colors">Equipment</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-base hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined group-hover:text-on-surface transition-colors" data-icon="database">database</span>
      <span className="group-hover:text-on-surface transition-colors">Logs</span>
      </a>
      </div>
      {/* CTA & Footer */}
      <div className="px-container-margin mt-auto flex flex-col gap-4">
      <button className="w-full py-2 bg-error-container text-on-error-container font-label-caps text-label-caps rounded flex items-center justify-center gap-2 hover:bg-error transition-colors">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                      Emergency Stop
                  </button>
      <div className="border-t border-outline-variant pt-4 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-2 py-2 rounded-lg text-on-surface-variant font-body-sm hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[18px] group-hover:text-on-surface" data-icon="settings">settings</span>
      <span className="group-hover:text-on-surface">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-2 py-2 rounded-lg text-on-surface-variant font-body-sm hover:bg-surface-variant transition-colors group" href="#">
      <span className="material-symbols-outlined text-[18px] group-hover:text-on-surface" data-icon="help">help</span>
      <span className="group-hover:text-on-surface">Help</span>
      </a>
      </div>
      </div>
      </nav>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-240px)] z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter h-16">
      {/* Search (on_left) */}
      <div className="flex-1 flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest border border-outline-variant rounded-full w-64 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="search">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm text-on-surface w-full p-0 placeholder:text-on-surface-variant" placeholder="Search tasks, logs..." type="text" />
      </div>
      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-on-surface p-2">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="font-headline-md text-headline-md font-bold text-primary md:hidden">Greenhouse Console</span>
      </div>
      {/* Center Brand (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center">
      <span className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Console</span>
      </div>
      {/* Trailing Actions */}
      <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
      <div className="hidden lg:flex items-center gap-1 text-on-surface-variant">
      <button className="p-2 rounded-full hover:bg-surface-variant hover:text-primary transition-colors active:opacity-80 relative" title="Sensors">
      <span className="material-symbols-outlined" data-icon="sensors">sensors</span>
      </button>
      <button className="p-2 rounded-full hover:bg-surface-variant hover:text-primary transition-colors active:opacity-80" title="Humidity">
      <span className="material-symbols-outlined" data-icon="humidity_mid">humidity_mid</span>
      </button>
      <button className="p-2 rounded-full hover:bg-surface-variant hover:text-primary transition-colors active:opacity-80" title="Thermostat">
      <span className="material-symbols-outlined" data-icon="thermostat">thermostat</span>
      </button>
      <button className="p-2 rounded-full hover:bg-surface-variant hover:text-primary transition-colors active:opacity-80 relative" title="Notifications">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
      </button>
      </div>
      <div className="h-6 w-px bg-outline-variant hidden lg:block mx-1"></div>
      <button className="flex items-center gap-2 pl-2 pr-4 py-1 rounded-full border border-outline-variant hover:bg-surface-variant transition-colors active:opacity-80">
      <img alt="User profile" className="w-7 h-7 rounded-full object-cover" data-alt="A small circular avatar image showing a professional technician's face, intended for the top right corner of a dark mode dashboard. The image should be clear, slightly desaturated to match the corporate tech vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvS_dS3YFFnj1injMH6ZkdqehHms6yabx8Sg72EDPPXnTxcn5bf6pnRTNx38nBbOqvfGnNjeMaZcdXfjVKUbOphBXMYyvHQun5tdPWWOOv_CrLsDMG67YPuM8K8c44BeEVHg6DA5QJ1Wb3QV2bM8a8qTYqKIEfTFfIvXt5UdTPX1cPdLJT4ruYD7gxPetsTN2OEzLTCVAsgpC_lQGL27ICTxGs0SRT5WWqpSDE0HzFBjUvHQJzVBf3g0RNo01qUcBJJBSUz-4pllo" />
      <span className="font-label-caps text-label-caps text-on-surface">Account</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="md:ml-[240px] pt-16 min-h-screen bg-background">
      <div className="p-gutter md:p-container-margin h-[calc(100vh-64px)] flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-1">Operational Task Board</h1>
      <p className="font-body-base text-body-base text-on-surface-variant">Manage daily maintenance and crop intervention tasks for Zone A-1.</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="px-4 py-2 border border-outline-variant rounded text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                              Filter
                          </button>
      <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                              New Task
                          </button>
      </div>
      </div>
      {/* Kanban Board Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-gutter overflow-hidden">
      {/* Column: TO DO */}
      <div className="flex flex-col bg-surface-container-low border border-outline-variant/50 rounded-lg overflow-hidden h-full">
      <div className="px-4 py-3 border-b border-outline-variant/50 bg-surface-container flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-outline"></div>
      <h2 className="font-title-sm text-title-sm text-on-surface">To Do</h2>
      </div>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded font-code-data text-code-data">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
      {/* Task Card: Normal */}
      <div className="bg-surface border border-outline-variant rounded shadow-sm hover:bg-surface-variant/50 transition-colors relative overflow-hidden group cursor-pointer">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
      <div className="p-4 pl-5">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code-data text-code-data text-on-surface-variant">TSK-1042</span>
      <span className="bg-surface-variant text-on-surface-variant font-label-caps text-[10px] px-1.5 py-0.5 rounded">Low Priority</span>
      </div>
      <h3 className="font-title-sm text-body-base font-semibold text-on-surface mb-1">Routine Sensor Calibration</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">Perform monthly calibration on humidity sensors H-12 through H-18 in Sector 4.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-surface flex items-center justify-center text-[10px] font-bold text-on-secondary-container">JD</div>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1 hover:bg-surface-variant rounded text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
      </div>
      </div>
      </div>
      </div>
      {/* Task Card: Warning */}
      <div className="bg-surface border border-outline-variant rounded shadow-sm hover:bg-surface-variant/50 transition-colors relative overflow-hidden group cursor-pointer">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
      <div className="p-4 pl-5">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code-data text-code-data text-on-surface-variant">TSK-1045</span>
      <span className="bg-tertiary-container/30 text-tertiary font-label-caps text-[10px] px-1.5 py-0.5 rounded border border-tertiary-container">Medium Priority</span>
      </div>
      <h3 className="font-title-sm text-body-base font-semibold text-on-surface mb-1">Check Irrigation Line B</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">Flow rate variance detected. Inspect valves for potential blockage or wear.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-primary-container border border-surface flex items-center justify-center text-[10px] font-bold text-on-primary-container">AR</div>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1 hover:bg-surface-variant rounded text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: IN PROGRESS */}
      <div className="flex flex-col bg-surface-container-low border border-outline-variant/50 rounded-lg overflow-hidden h-full">
      <div className="px-4 py-3 border-b border-primary/20 bg-surface-container flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <h2 className="font-title-sm text-title-sm text-primary">In Progress</h2>
      </div>
      <span className="bg-primary/20 text-primary px-2 py-0.5 rounded font-code-data text-code-data">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
      {/* Task Card: Critical/Error */}
      <div className="bg-surface border border-outline-variant rounded shadow-sm hover:bg-surface-variant/50 transition-colors relative overflow-hidden group cursor-pointer ring-1 ring-error/30">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <div className="p-4 pl-5">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code-data text-code-data text-on-surface-variant">TSK-1039</span>
      <span className="bg-error-container/40 text-error font-label-caps text-[10px] px-1.5 py-0.5 rounded border border-error-container">Critical Priority</span>
      </div>
      <h3 className="font-title-sm text-body-base font-semibold text-on-surface mb-1">Replace Heater Unit 2</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">Unit failing to maintain target baseline. Immediate replacement required before nightfall drop.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border border-surface" data-alt="A small circular avatar of an engineering technician in a dark blue uniform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUYf1xZYZoCSCL2RySUMWrnyLgCBJNRCQGDRAfjp-O89NQRLLn8ZyV68pLtNtG41u1JB5coSIvtf12CjynxiI1Oecec-aAvfj4o8dXw6Y8j9bpM4ofZhaF4YFdWP9If8wYUONjYNWdr1MWSuRrEVrmu4qQBFGtKshm9u44O4E_XGxrTR762wVAaX-XQAoMEVBclLdDYVKSYyVf5r-7SflM-0yoOQiPn3vviIjjy5D4vJep8eixv-SewtBKmtBP1tAc7ZGa8um0j8" />
      <span className="font-body-sm text-[11px] text-on-surface-variant">Active now</span>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1 hover:bg-surface-variant rounded text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">arrow_back</span></button>
      <button className="p-1 hover:bg-surface-variant rounded text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: DONE */}
      <div className="flex flex-col bg-surface-container-low border border-outline-variant/50 rounded-lg overflow-hidden h-full opacity-80">
      <div className="px-4 py-3 border-b border-outline-variant/50 bg-surface-container flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline text-[16px]">check_circle</span>
      <h2 className="font-title-sm text-title-sm text-on-surface-variant">Done</h2>
      </div>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-code-data text-code-data">12</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
      {/* Task Card: Done */}
      <div className="bg-surface border border-outline-variant/50 rounded shadow-sm relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant/50"></div>
      <div className="p-4 pl-5">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code-data text-code-data text-on-surface-variant/70 line-through">TSK-1031</span>
      <span className="text-on-surface-variant/70 font-label-caps text-[10px]">Today, 08:30</span>
      </div>
      <h3 className="font-title-sm text-body-base font-semibold text-on-surface-variant/70 mb-1 line-through">Nutrient Tank Refill</h3>
      <div className="flex items-center justify-between mt-4">
      <div className="flex -space-x-2 opacity-50">
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-surface flex items-center justify-center text-[10px] font-bold text-on-secondary-container">MK</div>
      </div>
      <button className="p-1 hover:bg-surface-variant rounded text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">undo</span></button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
