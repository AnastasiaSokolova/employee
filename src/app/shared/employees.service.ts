import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

//import { EMPLOYEES } from './mock-employees';
import { Employees } from './employees';
//import { Observable } from 'rxjs/observable';

@Injectable()
export class EmployeesService {

 

    constructor (private http: Http) {}
     
    private extractData(res: Response) {
    	let body = res.json();
    	return body || { };
    }

    private headers = new Headers({'Content-Type': 'application/json'});


    getEmployees(): Promise<Employees[]> {
       return this.http.get('http://localhost:8000/employees').toPromise().then(this.extractData)
    }

    getEmployee(id: number): Promise<Employees> {
        return this.http.get('http://localhost:8000/details/'+ id).toPromise().then(this.extractData)
    }
    deleteEmployee(id: String):  Promise<Employees[]> {
        return this.http.delete('http://localhost:8000/employees/'+id).toPromise().then(this.extractData)
    }
    editEmployee(employee: Employees): Promise<Employees> {
        return this.http.put('http://localhost:8000/employees/' + employee.id, JSON.stringify(employee), {headers: this.headers}).toPromise().then(this.extractData)
    }
    AddEmployee(employee: Employees):  Promise<Employees> {
        return this.http.post('http://localhost:8000/employees/', JSON.stringify(employee), {headers: this.headers}).toPromise().then(this.extractData)
    }

}