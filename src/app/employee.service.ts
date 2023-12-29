import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import  data  from './../assets/employee.json';

// @Injectable({
//   providedIn: 'root'
// })
export class EmployeeService {

  constructor() {
  }
  http = inject(HttpClient);
  getEmployeeList() {
    // of(data)
    return this.http.get('./assets/employee.json');
  }
}
