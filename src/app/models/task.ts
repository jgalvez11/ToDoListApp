import { Employee } from './employee';

export interface Task {
  id?: number;
  status: boolean;
  description: string;
  executionDate?: Date;
  daysLate?: number;
  createdAt?: Date;
  employee?: Employee;
}
