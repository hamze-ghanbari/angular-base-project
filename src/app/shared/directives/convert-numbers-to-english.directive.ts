import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appConvertNumbersToEnglish]',
  standalone: true
})
export class ConvertNumbersToEnglishDirective {
  element: HTMLInputElement;
  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }
  
  @HostListener('input') input() {
    this.convertNumbersToEnglish(this.element.value);
  }

  @HostListener('paste', ['$event']) paste(event: Event) {
    event.preventDefault();
  }


  convertNumbersToEnglish(str: string) {
    let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

    if (typeof str === 'string') {
        for (let i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i.toString()).replace(arabicNumbers[i], i.toString());
        }
    }
    this.element.value = str;
}

}
