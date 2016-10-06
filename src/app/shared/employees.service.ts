import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { EMPLOYEES } from './mock-employees';
import { Employees } from './employees';
//import { Observable } from 'rxjs/observable';

@Injectable()
export class EmployeesService {

 

    constructor (private http: Http) {}
   
    getEmployees(): Promise<Employees[]> {
       return this.http.get('http://localhost:8000/employees').toPromise().then(this.extractData)
    }
     
    private extractData(res: Response) {
    	let body = res.json();
    	return body || { };
    }

    private extractMessage(res: Response) {
        let body = res.json();
        return body || { };
    }



    getEmployee(id: number): Promise<Employees> {
         return this.http.get('http://localhost:8000/details/'+ id).toPromise().then(this.extractData)
    }
    deleteEmployee(id: String):  Promise<Employees[]> {
         return this.http.delete('http://localhost:8000/employees/'+id).toPromise().then(this.extractMessage)
    }
}