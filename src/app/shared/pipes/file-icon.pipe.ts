import { Pipe, PipeTransform } from '@angular/core';
import { imageRegex, wordRegex } from '@shared/validations/regex/regex';
import { fileIconTransform } from './transformers/transforms';

@Pipe({
  name: 'fileIcon',
  standalone: true
})
export class FileIconPipe implements PipeTransform {

  transform(value: string): string {
    return fileIconTransform(value);
  }
}
