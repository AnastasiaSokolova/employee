import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Employees } from '../shared/employees';


@Component({
	selector: 'employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css'],

})

export class EmployeeForm {
	@Input() employee: Employees;
	@Output() onSubmit = new EventEmitter();


	onSub(): void {
      this.onSubmit.emit();
    }
}