import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';


import { EmployeeService } from './employee.service';

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

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClient: HttpClient;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: HttpClientStub }
      ]
    });
    service = TestBed.inject(EmployeeService);
    httpClient = TestBed.inject(HttpClient);
  });

  fit('should be created', () => {
    console.log(service);
    expect(service).toBeTruthy();
  });

  fit('Should call GETEmployee api', () => {
    spyOn(service.http, 'get');
    service.getEmployeeList();
    let url = './assets/employee.json';
    expect(service.http.get).toHaveBeenCalledWith(url);
  });
});
