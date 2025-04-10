import { VehicleType, AdTool } from './vehicle.types';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  DRIVER = 'driver'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface Driver extends User {
  vehicleType: VehicleType;
  adTool: AdTool;
  license: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Client extends User {
  companyName: string;
  revenue: number;
  drivers: Driver[];
}
