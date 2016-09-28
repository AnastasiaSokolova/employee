import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesStartPage } from './employees-startpage/employees-startpage.component';

const appRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path: '',
        redirectTo: '/getstarted',
        pathMatch: 'full'
    },
    {
        path: 'details/:id',
        component: EmployeesDetailsComponent
    },
    {
        path: 'getstarted',
        component: EmployeesStartPage
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);