import { Task } from './task';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
  tasks?: Task[];
}
