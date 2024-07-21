import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Directive, ElementRef, HostListener, Inject, InjectionToken, PLATFORM_ID, inject } from '@angular/core';

@Directive({
  selector: '[appConvertNumbersToEnglish]',
  standalone: true
})
export class ConvertNumbersToEnglishDirective {
  element: HTMLInputElement;
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private paltFormId: InjectionToken<Object>
  ) {
    this.element = this.elementRef.nativeElement;
    inject(DestroyRef).onDestroy(() => {
      if(isPlatformBrowser(this.paltFormId)){
        this.element.removeEventListener('input', this.input);
        this.document.removeEventListener('paste', this.paste);
      }
    });
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
