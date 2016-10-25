import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesStartPage } from './employees-startpage/employees-startpage.component';
import { EmployeesCreate } from './employees-create/employees-create.component';

import { EmployeesResolve } from './shared/employees-resolve.service';

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
        resolve: {
            employee: EmployeesResolve
        },
        component: EmployeesDetailsComponent
    },
    {
        path: 'getstarted',
        component: EmployeesStartPage
    },
    {
        path: 'createNew',
        component: EmployeesCreate
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);