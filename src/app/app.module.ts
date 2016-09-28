import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesStartPage } from './employees-startpage/employees-startpage.component';

import { routing } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        EmployeesStartPage,
        EmployeeListComponent,
        EmployeesDetailsComponent

    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }