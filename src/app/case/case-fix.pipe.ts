import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseFix'
})
export class CaseFixPipe implements PipeTransform {

  transform(value: string): string {
    return value == "-" ? "": value;
  }

}
