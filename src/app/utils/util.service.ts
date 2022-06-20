import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  removeItemFromArray(list: any[], obj: any): any[] {
    const index = list.indexOf(obj, 0);
    if (index > -1) {
      list.splice(index, 1);
    }

    return list;
  }
}
