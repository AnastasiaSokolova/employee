import { Injectable }  from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EmployeesService } from './employees.service.ts';

import { Employees } from './employees';


@Injectable()
export class EmployeesResolve implements Resolve<Employees> {
  
  constructor( private es: EmployeesService,
              private router: Router ) {}

  resolve( route: ActivatedRouteSnapshot ): Promise<boolean>|boolean {
    let id = route.params['id'];
    return this.es.getEmployee(id).then(res => {
      if (res) {
        return res;
      } else { 
        this.router.navigate(['/employees']);
        return false;
      }
    });
  }
}