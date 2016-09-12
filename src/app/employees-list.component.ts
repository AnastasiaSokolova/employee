import { Component, OnInit } from '@angular/core';
import { Employees } from './employees';

import { EmployeesService } from './employees.service';
import { Router } from '@angular/router';

@Component({
    selector: 'list-emp',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css'],
    providers: [EmployeesService]
})

export class EmployeeListComponent implements OnInit {
    employees: Employees[];
    selectedEmployee: Employees;

    constructor(
        private employeesService: EmployeesService,
        private router: Router
    ) { }

    showDetails(employee: Employees): void {
       this.selectedEmployee = employee;
    }

    getEmployees(): void {
        this.employeesService.getEmployees().then(employees => this.employees = employees);
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    /*gotoDetails(employee: Employees): void {
        let link = ['/detail', employee.id];
        this.router.navigate(link);
    }*/
}
