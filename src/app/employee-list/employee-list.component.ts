import { Component, Inject, Injector, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { NonInjectableService } from '../non-injectable.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [
    {
      provide: EmployeeService,
      useFactory: () =>  new EmployeeService()
  },
  NonInjectableService
]
})
export class EmployeeListComponent {
  hello !:string;
  searchbox = "";
  nonInjectableService = this.injector.get(NonInjectableService);
  employeeService = this.injector.get(EmployeeService);
  constructor(private router: Router, private injector: Injector) {
  }
  employeeList !:any;

  ngOnInit() {
    this.employeeService.getEmployeeList().pipe(pluck('details')).subscribe((list: any) => {
      this.employeeList = list;
    })
    this.hello = this.nonInjectableService.getHello();
    console.log(this.hello);
   
  }

  viewDetails(id: number) {
    this.router.navigate(["/employee/"+id]);
  }
}
