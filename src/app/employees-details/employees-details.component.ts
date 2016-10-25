import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../shared/employees';
import { EmployeesService } from '../shared/employees.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message } from 'primeng/primeng';
import { EmployeesResolve } from '../shared/employees-resolve.service';


@Component({
    selector: 'e-detail',
    templateUrl: './employees-details.component.html',
    styleUrls: ['./employees-details.component.css']
})

export class EmployeesDetailsComponent implements OnInit {
    employee: Employees;
    msgs: Message[] = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    ngOnInit() {
        this.route.data.forEach((data: { employee: Employees }) => {
           this.employee = data.employee;
        });
    }
    onSubmit(): void {
        this.service.editEmployee(this.employee).then(res =>  this.router.navigateByUrl('/employees'), error =>  this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'}));
    }
}
 
