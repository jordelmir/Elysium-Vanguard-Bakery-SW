export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  PRODUCTION = 'PRODUCTION',
  WASTE = 'WASTE',
  CUSTOMERS = 'CUSTOMERS',
  STAFF = 'STAFF'
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface WorkOrder {
  id: string;
  client: string;
  type: 'Wedding' | 'Corporate' | 'Birthday';
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Quality Check' | 'Ready';
  items: string[];
}

export interface SensorData {
  id: string;
  name: string;
  temp: number;
  humidity: number;
  status: 'optimal' | 'warning' | 'critical';
  targetTemp: number;
}

export interface WasteEntry {
  id: string;
  product: string;
  quantity: number; // in units or kg
  unit: string;
  reason: 'Burnt' | 'Stale' | 'Defect' | 'Overproduction';
  timestamp: string;
  costImpact: number;
}

export interface StaffShift {
  id: string;
  name: string;
  role: 'Baker (AM)' | 'Baker (PM)' | 'Sales' | 'Decorator';
  start: string;
  end: string;
  status: 'On Shift' | 'Scheduled' | 'Off';
}