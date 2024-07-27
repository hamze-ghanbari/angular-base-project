import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';
import { jalaliTimeTransform } from './transformers/transforms';

@Pipe({
  name: 'jalaliTime',
  standalone: true
})
export class JalaliTimePipe implements PipeTransform {

  transform(value: string | Date): string {
    return jalaliTimeTransform(value);
  }

}
