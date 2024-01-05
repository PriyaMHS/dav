import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(value) {
      if(args && args[0] === "india") {
        return  "+91 " + value.slice(0,2)+ " "+ value.slice(2, 6) + " " + value.slice(6);
      }
      else {
        return "+1 (" + value.slice(0,3)+ ") "+ value.slice(3, 6) + " - " + value.slice(6);
      }
    }
    return value;
  }

}
