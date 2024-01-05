import { Component, Injector, SimpleChanges,  TemplateRef,  ViewChild,  ViewContainerRef,  inject } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailsComponent {
  injector :Injector = inject(Injector);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  employeeService : EmployeeService = this.injector.get(EmployeeService);
  employee !:Employee;
  editEmployee: boolean = false;
  data2 = "priya";
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;
  // vref = inject(ViewContainerRef);
  constructor(private vref:ViewContainerRef) {
  }
  ngOnInit() {
    let id = parseInt((this.activatedRoute.snapshot.paramMap).get('id'));
    // console.log("pppppppppppppppppppppp", (this.activatedRoute.snapshot.queryParamMap).get('name'));
    this.employeeService.getEmployeeById(id).subscribe((data: Employee) => {
      this.employee = data;
    })
  }

  ngOnchanges(changes: SimpleChanges) {
    console.log("on change called ", changes);
  }

  ngDoCheck() {
    console.log("Do check called");
  }

  ngAfterViewInit() {
    console.log("View init called");
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }

  ngAfterViewChecked() {
    console.log("view checked called");
  }
  
  ngAfterContentInit() {
    console.log("Content init called");
  }

  ngAfterContentChecked() {
    console.log("contect checked called");
  }

  updateEmployee(formData) {
    this.employee = formData;
    this.editEmployee = false;
  }

}
