import { useState } from "react";
import type { AppState, UserProfile } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function ProfilePanel({ onNavigate, onAction, state }: ProfilePanelProps = {}) {
  const profile = state?.profile ?? { name: "Alex Rivera", email: "a.rivera@floraops.io", phone: "+1-555-0198", role: "Senior Greenhouse Operator", avatar: "", zone: "Zone A-1 Main", notifications: true };
  const [local, setLocal] = useState<UserProfile>(profile);
  const [editing, setEditing] = useState(false);

  const save = () => {
    onAction?.("save-profile", local);
    setEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Profile</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Manage your operator profile and preferences.</p>
        </div>
        <button
          onClick={() => onNavigate?.("dashboard")}
          className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm font-medium"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Console
        </button>
      </div>

      <div className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/50 flex items-center gap-4 bg-surface-container-low">
          <img
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border border-outline-variant"
            src={profile.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuASnZfMfIfDL5SoU3-duu2JZwIPu7VjvndE4uf0t_XcN1sydbwgqFdBxoYuMyoKWszB-4y4d0uuGU1-CUO2zNXYccoug37WjSL9wSZkHdsRY5bjRU2Npr6Pz5cTt-Jdfu9pBXqOGgLtJAGOz_KYZNKUQD2ruxIGSx_yvcrYEFSZarsC0PcX9afqc38yFaP_HRjjTbs8zpZlOGLBcCp6kGHHbVZbqFA09eQxoEBc05jZtH8spH6EvRHZEtIOp1gKaFnvlRPgQjUyrKs"}
          />
          <div>
            <h2 className="font-title-sm text-title-sm text-on-surface">{profile.name}</h2>
            <p className="text-sm text-on-surface-variant">{profile.role}</p>
            <p className="text-xs text-on-surface-variant">{profile.zone}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-on-surface-variant mb-2">Full Name</label>
              <input
                type="text"
                className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                value={local.name}
                disabled={!editing}
                onChange={(e) => setLocal({ ...local, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-on-surface-variant mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                value={local.email}
                disabled={!editing}
                onChange={(e) => setLocal({ ...local, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-on-surface-variant mb-2">Phone</label>
              <input
                type="tel"
                className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                value={local.phone}
                disabled={!editing}
                onChange={(e) => setLocal({ ...local, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-on-surface-variant mb-2">Role</label>
              <select
                className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 px-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                value={local.role}
                disabled={!editing}
                onChange={(e) => setLocal({ ...local, role: e.target.value })}
              >
                <option value="Senior Greenhouse Operator">Senior Greenhouse Operator</option>
                <option value="Greenhouse Operator">Greenhouse Operator</option>
                <option value="Technician">Technician</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <input
              type="checkbox"
              className="w-5 h-5 accent-primary"
              checked={local.notifications}
              disabled={!editing}
              onChange={(e) => setLocal({ ...local, notifications: e.target.checked })}
            />
            <label className="text-sm text-on-surface">Enable push notifications</label>
          </div>
        </div>

        <div className="p-6 border-t border-outline-variant/50 flex justify-end gap-3">
          {editing ? (
            <>
              <button
                onClick={() => { setEditing(false); setLocal(profile); }}
                className="px-4 py-2 bg-surface-container-low border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={save}
                className="px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
              >
                Save Profile
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={() => onAction?.("sign-out")}
            className="px-4 py-2 bg-error-container text-on-error-container rounded-DEFAULT hover:bg-error-container/90 transition-colors text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
