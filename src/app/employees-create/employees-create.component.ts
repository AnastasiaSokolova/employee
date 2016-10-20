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
    
    getToken(): string {
        var TokenGenerator = require( 'token-generator' )({
          salt: '3456789',
          timestampMap: '1234567890', 
        });
        var token = TokenGenerator.generate();
        console.log(token);
        return token;
    }
   

	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    onSubmit(form: any) {
        this.employee.id = this.getToken();
        this.service.AddEmployee(this.employee).then(res =>  this.router.navigateByUrl('/employees'))
    }
}