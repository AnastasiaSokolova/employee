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
    @Input()
    employee: Employees;
   
    //mode = 'Observable';

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
}
 
