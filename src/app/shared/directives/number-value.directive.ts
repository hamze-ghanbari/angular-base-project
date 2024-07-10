import { Directive, ElementRef, HostListener } from '@angular/core';
import { numberRegex } from '@shared/validations/regex/regex';


@Directive({
  selector: '[appNumberValue]',
  standalone: true
})
export class NumberValueDirective {
  numberRegex = new RegExp(numberRegex);
  element: HTMLInputElement;
  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event.data']) input(data: string) {
    this.NumberVal(data);
  }

  // @HostListener('paste', ['$event.clipboardData']) paste(event: any) {
  //   this.NumberVal(event.getData('text'));
  // }

  @HostListener('paste', ['$event']) paste(event: Event) {
    event.preventDefault();
  }

  NumberVal(data: string) {
    if (!this.numberRegex.test(data))
      this.element.value = this.element.value.toString().replace(data, "");
    //   this.element.value = this.element.value;
    // else
  }
}
