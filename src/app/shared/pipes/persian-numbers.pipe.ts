import { Pipe, PipeTransform } from '@angular/core';
import { persianNumbersTransform } from './transformers/transforms';

@Pipe({
  name: 'persianNumbers',
  standalone: true
})
export class PersianNumbersPipe implements PipeTransform {

  transform(val: string): string {
    return persianNumbersTransform(val);
  }

}
