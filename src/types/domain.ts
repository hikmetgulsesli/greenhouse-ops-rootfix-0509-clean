// Domain types for the greenhouse operations console

export type Screen =
  | "dashboard"
  | "task-board"
  | "equipment"
  | "logs"
  | "settings"
  | "profile"
  | "filtered-overview"
  | "empty-state"
  | "storage-error"
  | "help";

export type TaskStatus = "pending" | "in-progress" | "completed" | "overdue";
export type EquipmentStatus = "operational" | "warning" | "critical" | "offline";
export type MaintenanceType = "scheduled" | "unscheduled" | "emergency";
export type Priority = "low" | "medium" | "high" | "critical";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  zone: string;
  assignedTo: string;
  dueDate: string;
  createdAt: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: EquipmentStatus;
  zone: string;
  lastMaintenance: string;
  nextMaintenance: string;
  uptime: number;
  readings: SensorReading[];
}

export interface SensorReading {
  timestamp: string;
  temperature: number;
  humidity: number;
  light: number;
  co2: number;
}

export interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  equipmentName: string;
  type: MaintenanceType;
  description: string;
  operator: string;
  date: string;
  duration: number;
  status: "completed" | "incomplete";
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
  zone: string;
  notifications: boolean;
}

export interface AppSettings {
  theme: "light" | "dark" | "system";
  density: "standard" | "condensed";
  alertsEnabled: boolean;
  autoRefresh: boolean;
  refreshInterval: number;
  temperatureUnit: "celsius" | "fahrenheit";
  language: string;
}

export interface Alert {
  id: string;
  title: string;
  message: string;
  severity: Priority;
  timestamp: string;
  acknowledged: boolean;
  zone: string;
}

export interface AppState {
  screen: Screen;
  previousScreen: Screen | null;
  tasks: Task[];
  equipment: Equipment[];
  maintenanceLog: MaintenanceRecord[];
  alerts: Alert[];
  profile: UserProfile;
  settings: AppSettings;
  filters: FilterState;
  storageError: string | null;
}

export interface FilterState {
  search: string;
  zone: string;
  status: string;
  dateFrom: string;
  dateTo: string;
  priority: string;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: "dark",
  density: "standard",
  alertsEnabled: true,
  autoRefresh: true,
  refreshInterval: 30,
  temperatureUnit: "celsius",
  language: "en",
};

export const DEFAULT_PROFILE: UserProfile = {
  name: "Alex Rivera",
  email: "a.rivera@floraops.io",
  phone: "+1-555-0198",
  role: "Senior Greenhouse Operator",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuASnZfMfIfDL5SoU3-duu2JZwIPu7VjvndE4uf0t_XcN1sydbwgqFdBxoYuMyoKWszB-4y4d0uuGU1-CUO2zNXYccoug37WjSL9wSZkHdsRY5bjRU2Npr6Pz5cTt-Jdfu9pBXqOGgLtJAGOz_KYZNKUQD2ruxIGSx_yvcrYEFSZarsC0PcX9afqc38yFaP_HRjjTbs8zpZlOGLBcCp6kGHHbVZbqFA09eQxoEBc05jZtH8spH6EvRHZEtIOp1gKaFnvlRPgQjUyrKs",
  zone: "Zone A-1 Main",
  notifications: true,
};

export const DEFAULT_FILTERS: FilterState = {
  search: "",
  zone: "",
  status: "",
  dateFrom: "",
  dateTo: "",
  priority: "",
};

export const INITIAL_TASKS: Task[] = [
  {
    id: "tsk-001",
    title: "Inspect irrigation pump #3",
    description: "Check flow rate and filter condition",
    status: "pending",
    priority: "high",
    zone: "Zone A-1",
    assignedTo: "Alex Rivera",
    dueDate: "2024-05-10",
    createdAt: "2024-05-08",
  },
  {
    id: "tsk-002",
    title: "Calibrate pH sensors",
    description: "Recalibrate all active pH probes in Zone B",
    status: "in-progress",
    priority: "medium",
    zone: "Zone B-2",
    assignedTo: "M. Chen",
    dueDate: "2024-05-09",
    createdAt: "2024-05-07",
  },
  {
    id: "tsk-003",
    title: "Replace UV lamp array",
    description: "Swap out expired UV lamps in propagation house",
    status: "overdue",
    priority: "critical",
    zone: "Zone C-3",
    assignedTo: "Alex Rivera",
    dueDate: "2024-05-06",
    createdAt: "2024-05-05",
  },
  {
    id: "tsk-004",
    title: "Weekly nutrient mix prep",
    description: "Prepare 200L batch of standard nutrient solution",
    status: "completed",
    priority: "low",
    zone: "Zone A-1",
    assignedTo: "J. Patel",
    dueDate: "2024-05-08",
    createdAt: "2024-05-01",
  },
];

export const INITIAL_EQUIPMENT: Equipment[] = [
  {
    id: "eq-001",
    name: "Main Climate Controller",
    type: "HVAC",
    status: "operational",
    zone: "Zone A-1",
    lastMaintenance: "2024-04-15",
    nextMaintenance: "2024-05-15",
    uptime: 99.8,
    readings: [],
  },
  {
    id: "eq-002",
    name: "Irrigation Pump #3",
    type: "Irrigation",
    status: "warning",
    zone: "Zone B-2",
    lastMaintenance: "2024-03-20",
    nextMaintenance: "2024-05-12",
    uptime: 87.4,
    readings: [],
  },
  {
    id: "eq-003",
    name: "UV Sterilization Array",
    type: "Lighting",
    status: "critical",
    zone: "Zone C-3",
    lastMaintenance: "2024-02-10",
    nextMaintenance: "2024-05-05",
    uptime: 62.1,
    readings: [],
  },
  {
    id: "eq-004",
    name: "CO2 Injector",
    type: "Environmental",
    status: "operational",
    zone: "Zone A-1",
    lastMaintenance: "2024-04-22",
    nextMaintenance: "2024-05-22",
    uptime: 96.5,
    readings: [],
  },
];

export const INITIAL_MAINTENANCE: MaintenanceRecord[] = [
  {
    id: "mnt-001",
    equipmentId: "eq-001",
    equipmentName: "Main Climate Controller",
    type: "scheduled",
    description: "Filter replacement and sensor calibration",
    operator: "Alex Rivera",
    date: "2024-04-15",
    duration: 45,
    status: "completed",
  },
  {
    id: "mnt-002",
    equipmentId: "eq-002",
    equipmentName: "Irrigation Pump #3",
    type: "unscheduled",
    description: "Impeller seal leak repair",
    operator: "M. Chen",
    date: "2024-03-20",
    duration: 120,
    status: "completed",
  },
  {
    id: "mnt-003",
    equipmentId: "eq-003",
    equipmentName: "UV Sterilization Array",
    type: "emergency",
    description: "Ballast replacement due to failure",
    operator: "J. Patel",
    date: "2024-02-10",
    duration: 180,
    status: "completed",
  },
];

export const INITIAL_ALERTS: Alert[] = [
  {
    id: "alt-001",
    title: "High Humidity Alert",
    message: "Zone C-3 humidity exceeds 85% for 15 minutes",
    severity: "high",
    timestamp: "2024-05-09T08:23:00Z",
    acknowledged: false,
    zone: "Zone C-3",
  },
  {
    id: "alt-002",
    title: "pH Drift Detected",
    message: "Zone B-2 pH reading 6.8, target 5.8-6.2",
    severity: "medium",
    timestamp: "2024-05-09T07:45:00Z",
    acknowledged: false,
    zone: "Zone B-2",
  },
  {
    id: "alt-003",
    title: "UV Lamp Failure",
    message: "UV Sterilization Array offline in Zone C-3",
    severity: "critical",
    timestamp: "2024-05-08T22:10:00Z",
    acknowledged: false,
    zone: "Zone C-3",
  },
];
