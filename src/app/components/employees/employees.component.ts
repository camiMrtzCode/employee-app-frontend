import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public searchId: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.searchId = '';

    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

  search() {
    if (this.searchId === null || this.searchId === '') {
      this.employeeService.getEmployees().subscribe(
        employees => this.employees = employees
      );
    } else {
      this.employeeService.getEmployeeById(this.searchId).subscribe(
        employees => this.employees = [employees]
      );
    }
  }
}
