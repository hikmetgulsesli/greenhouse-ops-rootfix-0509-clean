import { useState } from "react";
import type { AppState, Screen } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function TaskBoard({ onNavigate, onAction, state }: TaskBoardProps = {}) {
  const [search, setSearch] = useState("");
  const tasks = state?.tasks ?? [];

  const filtered = search
    ? tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.zone.toLowerCase().includes(search.toLowerCase())
      )
    : tasks;

  const byStatus = (status: string) => filtered.filter((t) => t.status === status);

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-container-margin">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Task Board</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-1">Manage and track greenhouse operations tasks.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-2 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Search tasks, logs..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant rounded-DEFAULT hover:bg-surface-variant transition-colors text-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button
            onClick={() => onAction?.("new-task")}
            className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-primary-container/90 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            New Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {(["pending", "in-progress", "completed", "overdue"] as const).map((status) => (
          <div key={status} className="bg-surface rounded-lg border border-outline-variant/50 overflow-hidden flex flex-col">
            <div className="p-3 border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low">
              <h3 className="font-title-sm text-title-sm text-on-surface capitalize">{status.replace("-", " ")}</h3>
              <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">{byStatus(status).length}</span>
            </div>
            <div className="p-3 flex-1 space-y-2 min-h-[200px]">
              {byStatus(status).length === 0 && (
                <p className="text-xs text-on-surface-variant text-center py-4">No tasks</p>
              )}
              {byStatus(status).map((task) => (
                <div key={task.id} className="p-3 bg-surface-container-low rounded-DEFAULT border border-outline-variant/30 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-code-data text-code-data text-on-surface text-sm">{task.title}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${task.priority === "critical" ? "bg-red-500/10 text-red-400" : task.priority === "high" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">{task.description}</p>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> {task.assignedTo}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {task.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
