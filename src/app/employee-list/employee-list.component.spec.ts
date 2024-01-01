import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../services/employee.service';
import { Observable, of, pluck } from 'rxjs';
import  data  from '../../assets/employee.json'
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

class EmployeeServiceStub {
  getEmployeeList() {
    return of(data);
  }
}

class RouterStub {
  navigate(url: string) { return url; }
}

class InjectorStub {

}


class HttpClientStub {
  post(url, payload) {

  }

  get(url, header) {

  }

  patch(url, header) {

  }

  delete(url, header) {

  }
}

class MockActivatedRoute extends ActivatedRoute {
  // params: Observable<any>;
  // queryParams: Observable<any>;
  constructor() {
      super();
      // this.params = of({ modality: 'CT' });
      // this.queryParams = of({});
  }
}

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let service : EmployeeService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: EmployeeService, useClass: EmployeeServiceStub},
        { provide: Router, useClass: RouterStub },
        { provide: Injector, useClass: InjectorStub },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: HttpClient, useClass: HttpClientStub }
      ],
      // imports: [HttpClient, HttpClientModule]
    })
    .compileComponents();
    service = TestBed.inject(EmployeeService);
    httpClient = TestBed.inject(HttpClient);

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    // spyOn(component.employeeService, 'getEmployeeList').and.callFake(() => {
    //   return of(data);
    // });
    // spyOn(component.employeeService, 'getEmployeeList').and.returnValue(of(jasmine.createSpyObj({})));
    expect(component).toBeTruthy();
  });

  // fit('should call ngOnInit', () => {
  //   // spyOn(component.employeeService, 'getEmployeeList');
  //   spyOn(component.employeeService, 'getEmployeeList').and.callFake(() => {
  //     return of(
  //         { 'statusCode': 200, 'data': details, 'token': '34343' }
  //     );
  //   });
  //   component.ngOnInit();
  //   expect(component.hello).toEqual('hello');
  //   expect(component.employeeList).toEqual(details);
  // });
});
