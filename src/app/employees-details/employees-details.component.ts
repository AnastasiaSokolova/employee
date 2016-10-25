import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../shared/employees';
import { EmployeesService } from '../shared/employees.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import {Message} from 'primeng/primeng';

@Component({
    selector: 'e-detail',
    templateUrl: './employees-details.component.html',
    styleUrls: ['./employees-details.component.css'],
    providers: [EmployeesService]
})

export class EmployeesDetailsComponent implements OnInit {
    employee: Employees;
    msgs: Message[] = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
          let id = params['id']; 
          this.service.getEmployee(id).then(employee => this.employee = employee);
        });
    }
    onSubmit(): void {
        this.service.editEmployee(this.employee).then(res =>  this.router.navigateByUrl('/employees'), error =>  this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'}));
    }
}
 
