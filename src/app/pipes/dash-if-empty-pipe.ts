import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
  standalone: false
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any{
    if(value === null || value === undefined || value === '') {
      return '-'
    }
    
    return value;
  }

}
