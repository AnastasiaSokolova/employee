import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employees-list.component';
import { EmployeesDetailsComponent } from './employees-details.component';

const appRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
    },
    /*{
        path: 'detail/:id',
        component: EmployeesDetailsComponent
    },*/
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);