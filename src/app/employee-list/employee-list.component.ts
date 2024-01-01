import { Component, Inject, Injector, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NonInjectableService } from '../services/non-injectable.service';
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
  activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router, private injector: Injector) {
  }
  employeeList !:any;

  ngOnInit() {
    // console.log("zzzzzzzzzzz" , this.activatedRoute.fragment['_value']);
    this.employeeService.getEmployeeList().pipe(pluck('details')).subscribe((list: any) => {
      this.employeeList = list;
    })

    this.hello = this.nonInjectableService.getHello();
    console.log(this.hello);
   
  }

  viewDetails(id: number) {
    this.router.navigate(["/employee/", id], { queryParams: { name: 'priya' }});

    // this.router.navigate(["/employee/", id], { fragment: 'hello'});
  }
}
