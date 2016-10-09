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
    //mode = 'Observable';

    constructor(private employeesService: EmployeesService,
                private router: Router) {
    }


    showDetails(employee: Employees): void {
        this.router.navigate(['/details', employee.id]);
    }

    getEmployees(): void {
        this.employeesService.getEmployees().then(employees => this.employees = employees);
    }

    showMsg(res: any) {
        if(res.status == 200) {
            console.log(res.msg);
            this.getEmployees();
        }
    }

    deleteEmployee(id: String) : void {
        console.log(id)
        this.employeesService.deleteEmployee(id).then(res => this.showMsg(res));//change this
    }

    ngOnInit(): void {
        this.getEmployees();//don`t need
    }
}
