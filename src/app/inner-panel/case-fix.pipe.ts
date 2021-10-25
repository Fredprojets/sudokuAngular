import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseFix'
})
export class CaseFixPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == "-" ? "": value;
  }

}
