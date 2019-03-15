import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, exp?:number): any {
    console.log(value)
    // return value * value;
    if(!exp){
      exp = 2;
    }

    return Math.pow(value, exp);
  }

}
