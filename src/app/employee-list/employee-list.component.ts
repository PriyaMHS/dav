import { Component, Inject, Injector, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NonInjectableService } from '../services/non-injectable.service';
import { AsyncSubject, ReplaySubject, pluck } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [
    EmployeeService,
    NonInjectableService
]
})
export class EmployeeListComponent {
  hello !:string;
  searchbox = "";
  nonInjectableService = this.injector.get(NonInjectableService);
  // employeeService = this.injector.get(EmployeeService);
  activatedRoute = inject(ActivatedRoute);
  private sub = new AsyncSubject();
  constructor(private router: Router, private injector: Injector, private employeeService: EmployeeService) {
  }
  employeeList !:any;

  ngOnInit() {
    // console.log("zzzzzzzzzzz" , this.activatedRoute.fragment['_value']);
    this.employeeService.getEmployeeList().pipe(pluck('details')).subscribe((list: any) => {
      this.employeeList = list;
    })

    this.hello = this.nonInjectableService.getHello();
    // console.log(this.hello);

    this.sub.next(1);
    this.sub.next(2);

    this.sub.subscribe((val) => {
      console.log("val : " + val);
    }, err => console.error("sub1 " + err))

    this.sub.next(3);
    this.sub.next(4);

    this.sub.subscribe((val) => {
      console.log("val2 : " + val);
    }, err => console.error("sub2 " + err))
    this.sub.next(5);
    // this.sub.complete();

    this.sub.error("err");
    this.sub.next(6);

    this.sub.subscribe(
      val => {
        console.log("sub3 " + val);
      },
      err => console.error("sub3 " + err),
      () => console.log("Complete")
    );   
  }

  viewDetails(id: number) {
    this.router.navigate(["/employee/", id], { queryParams: { name: 'priya' }});

    // this.router.navigate(["/employee/", id], { fragment: 'hello'});
  }

  trackById(index, employee) {
    return employee.id;
   }
   
}
