import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBooleanToString'
})
export class ConvertBooleanToStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let checkBy = args ? args[0] : 'Yes';
    let elseValue = args && args.length === 2 ? args[1] : 'No';
    if(value) {
      return checkBy;
    } else {
      return elseValue;
    }
   
  }

}
