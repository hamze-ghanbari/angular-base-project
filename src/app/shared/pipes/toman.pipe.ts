import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toman',
  standalone: true
})
export class TomanPipe implements PipeTransform {

  transform(value: number | string): number {
    return Math.floor(+value / 10);
  }

}
