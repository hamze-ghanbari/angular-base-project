import { Pipe, PipeTransform } from '@angular/core';
import { seperateNumberTransform } from './transformers/transforms';

@Pipe({
  name: 'seperateNumber',
  standalone: true
})
export class SeperateNumberPipe implements PipeTransform {

  transform(value: string | number): string {
    return seperateNumberTransform(value);
  }

}
