import { useState } from "react";
import type { AppState } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function EmptyState({ onNavigate, onAction }: EmptyStateProps = {}) {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Equipment Catalog</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">No equipment registered for this zone yet.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Search equipment, logs..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 bg-surface rounded-lg border border-outline-variant/50">
        <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">inventory_2</span>
        </div>
        <h2 className="font-title-sm text-title-sm text-on-surface mb-2">No Equipment Found</h2>
        <p className="text-sm text-on-surface-variant mb-6 max-w-md text-center">
          This zone does not have any registered equipment. Import a catalog or add devices manually to begin monitoring.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => onAction?.("import-catalog")}
            className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">upload</span>
            Import Catalog
          </button>
          <button
            onClick={() => onNavigate?.("equipment")}
            className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Add Equipment
          </button>
        </div>
      </div>
    </div>
  );
}
