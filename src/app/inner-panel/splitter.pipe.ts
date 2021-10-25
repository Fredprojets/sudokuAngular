import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitter'
})
export class SplitterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('');
  }

}
