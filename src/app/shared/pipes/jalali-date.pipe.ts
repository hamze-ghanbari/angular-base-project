import { Pipe, PipeTransform } from '@angular/core';
import { jalaliDateTransform } from './transformers/transforms';

@Pipe({
  name: 'jalaliDate',
  standalone: true
})
export class JalaliDatePipe implements PipeTransform {

  transform(value: string | Date): string {
  return jalaliDateTransform(value);
}

}