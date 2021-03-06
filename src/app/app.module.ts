import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesStartPage } from './employees-startpage/employees-startpage.component';
import { EmployeesCreate } from './employees-create/employees-create.component';
import { HttpModule } from '@angular/http';

import { EmployeeForm } from './employee-form/employee-form.component';

import { ButtonModule, InputTextModule, DataListModule, DataTableModule, SharedModule, TooltipModule, MessagesModule, GrowlModule} from 'primeng/primeng';
import { routing } from './app.routing';

import { EmployeesResolve } from './shared/employees-resolve.service';
import { EmployeesService } from './shared/employees.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        InputTextModule,
        DataListModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        MessagesModule,
        GrowlModule,
        routing
    ],
    declarations: [
        AppComponent,
        EmployeesStartPage,
        EmployeeForm,
        EmployeeListComponent,
        EmployeesDetailsComponent,
        EmployeesCreate

    ],
    providers: [EmployeesResolve, EmployeesService],
    bootstrap: [ AppComponent ]
})

export class AppModule { }