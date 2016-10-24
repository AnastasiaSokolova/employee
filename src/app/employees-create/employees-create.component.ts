import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../shared/employees';
import { EmployeesService } from '../shared/employees.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message } from 'primeng/primeng';

import { EmployeeForm } from '../employee-form/employee-form.component';



@Component({
	selector: 'e-create',
    templateUrl: './employees-create.component.html',
    styleUrls: ['./employees-create.component.css'],
    providers: [EmployeesService]
})

export class EmployeesCreate {
   
    employee = new Employees();

    msgs: Message[] = [];

    getToken(): string {
        var TokenGenerator = require( 'token-generator' )({
          salt: '3456789',
          timestampMap: '1234567890', 
        });
        var token = TokenGenerator.generate();
        return token;
    }
   

	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    onSubmit() {
        this.employee.id = this.getToken();
        this.service.AddEmployee(this.employee).then(res =>  this.router.navigateByUrl('/employees'), error =>  this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'}));
    }
}