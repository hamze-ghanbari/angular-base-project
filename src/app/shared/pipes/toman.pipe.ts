import { Pipe, PipeTransform } from '@angular/core';
import { tomanTransform } from './transformers/transforms';

@Pipe({
  name: 'toman',
  standalone: true
})
export class TomanPipe implements PipeTransform {

  transform(value: number | string): number {
    return tomanTransform(value);
  }

}
