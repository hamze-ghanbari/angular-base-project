import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'jalaliDate',
  standalone: true
})
export class JalaliDatePipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value || value === '0001-01-01T00:00:00') { return ''; }
    const MomentDate = moment(value);
    if (MomentDate.isBefore('0622-03-22')) {
      return '';
    }
    return MomentDate.format('jYYYY/jM/jD');
  }

}
