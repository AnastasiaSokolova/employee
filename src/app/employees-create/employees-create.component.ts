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
    //
    /*employee: Employees = {
    id: null,
    firstname:'',
    lastname: '',
    age: null,
    position: '',
    skill: '',
    language_level: '',
    experience: null
   }*/

	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    onSubmit(form: any) {
    	let data: Employees =  this.employee;/* Employees = {
                id: form.value.id,
                firstname: form.value.firstname,
                lastname: form.value.lastname,
                age: form.value.age,
                position: form.value.position,
                skill: form.value.skill,
                language_level: form.value.language_level,
                experience: form.value.experience
        };*/
        this.service.AddEmployee(data).then(res =>  this.router.navigateByUrl('/employees'));
        // employees  => this.employees.push(employee),
    }
}