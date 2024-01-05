import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, of, from, pluck, map, ReplaySubject } from 'rxjs';
import  data  from '../../assets/employee.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private sub = new ReplaySubject();
  http = inject(HttpClient);
  getEmployeeList() {
    return this.http.get('./assets/employee.json');
  }


  getEmployeeById(id: number) {
   return this.http.get('./assets/employee.json').pipe(
    pluck('details'),
    map((userList: any)=> userList.filter((user:any) => user.id === id)[0])
    )
  }
}
