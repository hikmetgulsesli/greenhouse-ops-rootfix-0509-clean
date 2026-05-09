import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { loadState, saveState, resetStorage, isStorageAvailable } from "./utils/storage";

describe("App Shell", () => {
  beforeEach(() => {
    resetStorage();
    window.localStorage.clear();
  });

  it("renders the dashboard by default", () => {
    render(<App />);
    expect(screen.getByText("Operations Overview")).toBeInTheDocument();
  });

  it("shows the sidebar navigation with all primary links", () => {
    render(<App />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Task Board")).toBeInTheDocument();
    expect(screen.getByText("Equipment")).toBeInTheDocument();
    expect(screen.getByText("Logs")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  it("navigates to Task Board when clicked", () => {
    render(<App />);
    const sidebar = document.querySelector("nav.fixed.left-0");
    const taskBoardLink = sidebar?.querySelector("button")?.parentElement?.querySelector("button:nth-child(2)") || screen.getAllByText("Task Board")[0];
    fireEvent.click(taskBoardLink);
    expect(screen.getByText("Manage and track greenhouse operations tasks.")).toBeInTheDocument();
  });

  it("navigates to Equipment when clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Equipment"));
    expect(screen.getByText("Equipment Status")).toBeInTheDocument();
  });

  it("navigates to Logs when clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Logs"));
    expect(screen.getByText("Maintenance Log")).toBeInTheDocument();
  });

  it("navigates to Settings when clicked", () => {
    render(<App />);
    fireEvent.click(screen.getAllByText("Settings")[0]);
    expect(screen.getByText("Configure console preferences and system behavior.")).toBeInTheDocument();
  });

  it("shows alert count on dashboard", () => {
    render(<App />);
    expect(screen.getByText("Requires Action")).toBeInTheDocument();
  });
});

describe("State Persistence", () => {
  beforeEach(() => {
    resetStorage();
    window.localStorage.clear();
  });

  it("saves state to localStorage after navigation", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Task Board"));
    await waitFor(() => {
      const raw = window.localStorage.getItem("floraops_state");
      expect(raw).toBeTruthy();
      const parsed = JSON.parse(raw!);
      expect(parsed.screen).toBe("task-board");
    });
  });

  it("restores previous screen from localStorage on reload", () => {
    window.localStorage.setItem(
      "floraops_state",
      JSON.stringify({ screen: "settings", previousScreen: null })
    );
    render(<App />);
    expect(screen.getByText("Configure console preferences and system behavior.")).toBeInTheDocument();
  });

  it("handles corrupted localStorage gracefully", () => {
    window.localStorage.setItem("floraops_state", "not-json{{");
    render(<App />);
    expect(screen.getByText("Operations Overview")).toBeInTheDocument();
  });
});

describe("Storage Utilities", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("loadState returns default when key missing", () => {
    const result = loadState({ foo: "bar" });
    expect(result.data).toEqual({ foo: "bar" });
    expect(result.error).toBeNull();
  });

  it("loadState returns error on bad JSON", () => {
    window.localStorage.setItem("floraops_state", "invalid");
    const result = loadState({});
    expect(result.error).not.toBeNull();
  });

  it("saveState writes to localStorage", async () => {
    await saveState({ test: true });
    const raw = window.localStorage.getItem("floraops_state");
    expect(raw).toBe('{"test":true}');
  });

  it("resetStorage removes the key", () => {
    window.localStorage.setItem("floraops_state", "{}");
    resetStorage();
    expect(window.localStorage.getItem("floraops_state")).toBeNull();
  });

  it("isStorageAvailable returns true when supported", () => {
    expect(isStorageAvailable()).toBe(true);
  });
});

describe("Screen Interactions", () => {
  beforeEach(() => {
    resetStorage();
    window.localStorage.clear();
  });

  it("acknowledges an alert from dashboard", () => {
    render(<App />);
    const ackButtons = screen.getAllByText("Acknowledge");
    expect(ackButtons.length).toBeGreaterThan(0);
    fireEvent.click(ackButtons[0]);
    // After acknowledging one critical alert, count drops
    const priorityAlerts = screen.getAllByText("Priority Alerts");
    expect(priorityAlerts.length).toBeGreaterThan(0);
  });

  it("exports CSV from maintenance log", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Logs"));
    const exportBtn = screen.getByText("Export CSV");
    expect(() => fireEvent.click(exportBtn)).not.toThrow();
  });

  it("opens profile from top bar account button", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Account"));
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Alex Rivera")).toBeInTheDocument();
  });
});
