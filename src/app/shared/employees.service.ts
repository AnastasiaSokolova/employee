import { Injectable } from '@angular/core';

import { EMPLOYEES } from './mock-employees';
import { Employees } from './employees';

@Injectable()
export class EmployeesService {
    getEmployee(id: number): Promise<Employees> {
         return this.getEmployees()
             .then(employee => employee.find(employee => employee.id === id));
    }
    getEmployees(): Promise<Employees[]> {
       return Promise.resolve(EMPLOYEES);
    }
}