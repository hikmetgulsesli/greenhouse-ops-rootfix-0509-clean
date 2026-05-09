import { useState } from "react";
import type { AppState, AppSettings } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface SettingsProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function Settings({ onNavigate, onAction, state }: SettingsProps = {}) {
  const settings = state?.settings ?? { theme: "dark", density: "standard", alertsEnabled: true, autoRefresh: true, refreshInterval: 30, temperatureUnit: "celsius", language: "en" };
  const [local, setLocal] = useState<AppSettings>(settings);
  const [activeTab, setActiveTab] = useState("general");

  const save = () => {
    onAction?.("save-settings", local);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Settings</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Configure console preferences and system behavior.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === "general" ? "bg-secondary-container/10 text-primary border-l-4 border-primary" : "text-on-surface-variant hover:bg-surface-variant"}`}
          >
            General Preferences
          </button>
          <button
            onClick={() => setActiveTab("alerts")}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === "alerts" ? "bg-secondary-container/10 text-primary border-l-4 border-primary" : "text-on-surface-variant hover:bg-surface-variant"}`}
          >
            Alerts &amp; Notifications
          </button>
          <button
            onClick={() => setActiveTab("display")}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === "display" ? "bg-secondary-container/10 text-primary border-l-4 border-primary" : "text-on-surface-variant hover:bg-surface-variant"}`}
          >
            Display
          </button>
        </div>

        <div className="md:col-span-3 bg-surface rounded-lg border border-outline-variant/50 p-6">
          {activeTab === "general" && (
            <div className="space-y-6">
              <h2 className="font-title-sm text-title-sm text-on-surface mb-4">General Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Theme</label>
                  <select
                    className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    value={local.theme}
                    onChange={(e) => setLocal({ ...local, theme: e.target.value as AppSettings["theme"] })}
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="system">System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Language</label>
                  <select
                    className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    value={local.language}
                    onChange={(e) => setLocal({ ...local, language: e.target.value })}
                  >
                    <option value="en">English</option>
                    <option value="tr">Türkçe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Temperature Unit</label>
                  <select
                    className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    value={local.temperatureUnit}
                    onChange={(e) => setLocal({ ...local, temperatureUnit: e.target.value as AppSettings["temperatureUnit"] })}
                  >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Density</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLocal({ ...local, density: "standard" })}
                      className={`flex-1 py-2 px-3 rounded-DEFAULT border text-sm transition-colors ${local.density === "standard" ? "bg-primary-container text-on-primary-container border-primary-container" : "bg-surface-container-low text-on-surface border-outline-variant hover:bg-surface-variant"}`}
                    >
                      Standard
                    </button>
                    <button
                      onClick={() => setLocal({ ...local, density: "condensed" })}
                      className={`flex-1 py-2 px-3 rounded-DEFAULT border text-sm transition-colors ${local.density === "condensed" ? "bg-primary-container text-on-primary-container border-primary-container" : "bg-surface-container-low text-on-surface border-outline-variant hover:bg-surface-variant"}`}
                    >
                      Condensed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="space-y-6">
              <h2 className="font-title-sm text-title-sm text-on-surface mb-4">Alerts &amp; Notifications</h2>
              <div className="flex items-center justify-between py-3 border-b border-outline-variant/30">
                <div>
                  <div className="text-sm font-medium text-on-surface">Enable Alerts</div>
                  <div className="text-xs text-on-surface-variant">Receive system and environmental alerts</div>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  checked={local.alertsEnabled}
                  onChange={(e) => setLocal({ ...local, alertsEnabled: e.target.checked })}
                />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-outline-variant/30">
                <div>
                  <div className="text-sm font-medium text-on-surface">Auto Refresh</div>
                  <div className="text-xs text-on-surface-variant">Automatically refresh dashboard data</div>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  checked={local.autoRefresh}
                  onChange={(e) => setLocal({ ...local, autoRefresh: e.target.checked })}
                />
              </div>
              <div>
                <label className="block text-xs text-on-surface-variant mb-2">Refresh Interval (seconds)</label>
                <input
                  type="number"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  value={local.refreshInterval}
                  min={5}
                  max={300}
                  onChange={(e) => setLocal({ ...local, refreshInterval: parseInt(e.target.value) || 30 })}
                />
              </div>
            </div>
          )}

          {activeTab === "display" && (
            <div className="space-y-6">
              <h2 className="font-title-sm text-title-sm text-on-surface mb-4">Display</h2>
              <p className="text-sm text-on-surface-variant">Display settings are managed through the theme and density options in General Preferences.</p>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-outline-variant/30">
            <button
              onClick={() => onAction?.("discard-changes")}
              className="px-4 py-2 bg-surface-container-low border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm font-medium"
            >
              Discard Changes
            </button>
            <button
              onClick={save}
              className="px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
