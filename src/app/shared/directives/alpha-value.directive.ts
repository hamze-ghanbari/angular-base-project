import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAlphaValue]',
  standalone: true
})
export class AlphaValueDirective implements OnChanges {
  alphaRegex: RegExp = new RegExp(/^[a-z ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوِِّژؤيةإأءًٌٍَُِّۀآ]*$/ig);
  element: HTMLInputElement;
  @Input() appAlphaValue: 'fa' | 'en' | '' = '';

  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;

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

  @HostListener('input', ['$event.data']) input(data: string) {

    this.alphaVal(data);
  }

  @HostListener('paste', ['$event']) paste(event: Event) {
    event.preventDefault();
  }

  alphaVal(data: string): any {
    console.log('data', data);
    // if (this.alphaRegex.test(data)) {
    //   this.element.value = this.element.value;
    // } else {
    //   this.element.value = this.element.value.toString().replace(data, "");
    // }

    if (!this.alphaRegex.test(data))
      this.element.value = this.element.value.toString().replace(data, "");
  }
}
