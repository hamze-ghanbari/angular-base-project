import { Pipe, PipeTransform } from '@angular/core';
import { formatBytesTransform } from './transformers/transforms';

@Pipe({
  name: 'formatBytes',
  standalone: true
})
export class FormatBytesPipe implements PipeTransform {

  transform(value: number): string {
    return formatBytesTransform(value);
  }

}
