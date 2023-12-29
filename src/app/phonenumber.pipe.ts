import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if(value) {
      if(args && args[0] === "india") {
        let part1 = value.substr(0,2);
        let part2 = value.substr(2, 4);
        let part3 = value.substr(6);
        return  "+91 " + part1+ " "+ part2 + " " + part3;
      }
      else {
        let part1 = value.substr(0,3);
        let part2 = value.substr(3, 3);
        let part3 = value.substr(6);
        return  "+1 (" + part1+ ") "+ part2 + " - " + part3;
      }
    }
    return value;
  }

}
