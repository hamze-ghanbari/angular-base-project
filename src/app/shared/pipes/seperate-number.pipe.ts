import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperateNumber',
  standalone: true
})
export class SeperateNumberPipe implements PipeTransform {

  transform(value: string | number): string {
    return value ?  Number(value).toLocaleString() : '';
  }

}
