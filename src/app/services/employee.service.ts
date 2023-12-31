import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, of, from, pluck, map } from 'rxjs';
import  data  from '../../assets/employee.json';

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

  getEmployeeById(id: number) {
    // return of(1)
   return this.http.get('./assets/employee.json').pipe(
    pluck('details'),
    map((userList: any)=> userList.filter((user:any) => user.id === id)[0])
    )
  }
}
