import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    let val = value;
    if(val == '20-1-2020'){
      return '20-jan-2020'
    }
    return value;
  }

}
