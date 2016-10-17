import {Component, OnInit} from '@angular/core';
import {Employees} from '../shared/employees';

import {EmployeesService} from '../shared/employees.service';
import {Router} from '@angular/router';

@Component({
    selector: 'list-emp',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css'],
    providers: [EmployeesService]
})

export class EmployeeListComponent implements OnInit {
    employees: Employees[];
    selectedEmployee: Employees;
  

    constructor(private employeesService: EmployeesService,
                private router: Router) {}


    showDetails(employee: Employees): void {
        this.router.navigate(['/details', employee.id]);
    }

    getEmployees(): void {
        this.employeesService.getEmployees().then(employees => this.employees = employees);
    }

    deleteEmployee(id: String) : void {
        this.employeesService.deleteEmployee(id).then(() => this.getEmployees());
    }

    ngOnInit(): void {
        this.getEmployees();
    }
}
