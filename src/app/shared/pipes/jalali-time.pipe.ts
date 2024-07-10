import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'jalaliTime',
  standalone: true
})
export class JalaliTimePipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value || value === '0001-01-01T00:00:00') { return ''; }
    const MomentDate = moment(value);
    if (MomentDate.isBefore('0622-03-22')) {
      return '';
    }
    let result = MomentDate.format('HH:mm:ss');
    if (result === '00:00:00') { result = ''; }
    return result;
  }

}
