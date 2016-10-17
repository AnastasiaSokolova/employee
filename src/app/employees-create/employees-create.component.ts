import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../shared/employees';
import { EmployeesService } from '../shared/employees.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'e-create',
    templateUrl: './employees-create.component.html',
    styleUrls: ['./employees-create.component.css'],
    providers: [EmployeesService]
})

export class EmployeesCreate {
   
    employee = new Employees();
  
	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    onSubmit(form: any) {
        this.service.AddEmployee(this.employee).then(res =>  this.router.navigateByUrl('/employees'))
    }
}