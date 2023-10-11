import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private urlEndPoint: string = 'http://localhost:8080/employees';


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Employee[])
    );
  }

  getEmployeeById(id): Observable<Employee> {
    return this.http.get(`${this.urlEndPoint}/${id}`).pipe(
      map(response => response as Employee)
    );
  }
}
