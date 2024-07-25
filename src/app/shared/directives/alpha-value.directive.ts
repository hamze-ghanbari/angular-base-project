import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Directive, ElementRef, HostListener, Inject, InjectionToken, Input, OnChanges, PLATFORM_ID, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[appAlphaValue]',
  standalone: true
})
// ************ it does not work, it must be changed
export class AlphaValueDirective implements OnChanges {
  alphaRegex: RegExp = new RegExp(/^[a-z ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوِِّژؤيةإأءًٌٍَُِّۀآ]*$/ig);
  element: HTMLInputElement;
  @Input() appAlphaValue: 'fa' | 'en' | '' = '';
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private paltFormId: InjectionToken<Object>
  ) {
    this.element = this.elementRef.nativeElement;
    inject(DestroyRef).onDestroy(() => {
      if(isPlatformBrowser(this.paltFormId)){
        // this.element.removeEventListener('input', this.input);
        this.document.removeEventListener('paste', this.paste);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.appAlphaValue = changes['appAlphaValue'].currentValue;
    switch (this.appAlphaValue) {
      case 'fa':
        this.alphaRegex = new RegExp(/^[ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوِِّژؤيةإأءًٌٍَُِّۀآ]*$/ig);
        break;
        case 'en':
          this.alphaRegex = new RegExp(/^[a-zA-Z?><;,{}[\]\-_+=!@#$%\^&*|']*$/ig);
          break;
        }
  }

  @HostListener('input', ['$event.data']) input(data: string): void {

    this.alphaVal(data);
  }

  @HostListener('paste', ['$event']) paste(event: Event): void {
    event.preventDefault();
  }

  alphaVal(data: string): void {
    // if (this.alphaRegex.test(data)) {
    //   this.element.value = this.element.value;
    // } else {
    //   this.element.value = this.element.value.toString().replace(data, "");
    // }

    if (!this.alphaRegex.test(data))
      this.element.value = this.element.value.toString().replace(data, "");
  }
}
