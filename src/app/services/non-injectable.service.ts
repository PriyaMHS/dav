import { Injectable } from '@angular/core';

@Injectable()
export class NonInjectableService {

  constructor() { }
  getHello() {
    return 'hello';
  }
}
