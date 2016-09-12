import { Injectable } from '@angular/core';

import { EMPLOYEES } from './mock-employees';
import { Employees } from './employees';

@Injectable()
export class EmployeesService {
    getEmployees(): Promise<Employees[]> {
        return Promise.resolve(EMPLOYEES);
    }
}