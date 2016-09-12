import { Component, Input } from '@angular/core';
import { Employees } from './employees';



@Component({
    selector: 'e-detail',
    templateUrl: './employees-details.component.html',
    styleUrls: ['./employees-details.component.css']
})

export class EmployeesDetailsComponent {
    @Input()
    employee: Employees;
}