import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../shared/employees';
import { EmployeesService } from '../shared/employees.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'e-detail',
    templateUrl: './employees-details.component.html',
    styleUrls: ['./employees-details.component.css'],
    providers: [EmployeesService]
})

export class EmployeesDetailsComponent implements OnInit {
    @Input() employee: Employees;
    pat: String = '^(A|B|C)(1|2)\+?$';
  


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeesService) {}
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
          let id = +params['id']; 
          this.service.getEmployee(id).then(employee => this.employee = employee);
        });
    }
    onSubmit(form: any): void {
       let data:  Employees = {
                id: form.value.id,
                firstname: form.value.firstname,
                lastname: form.value.lastname,
                age: form.value.age,
                position: form.value.position,
                skill: form.value.skill,
                language_level: form.value.language_level,
                experience: form.value.experience
        };
        this.service.editEmployee(data).then(res =>  this.router.navigateByUrl('/employees'));
    }
}
 
