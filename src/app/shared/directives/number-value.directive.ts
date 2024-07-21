import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Directive, ElementRef, HostListener, Inject, InjectionToken, PLATFORM_ID, inject, input } from '@angular/core';
import { numberRegex } from '@shared/validations/regex/regex';


@Directive({
  selector: '[appNumberValue]',
  standalone: true
})
export class NumberValueDirective {
  numberRegex = new RegExp(numberRegex);
  element: HTMLInputElement;
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private paltFormId: InjectionToken<Object>
  ) {
    this.element = this.elementRef.nativeElement;
    inject(DestroyRef).onDestroy(() => {
      if(isPlatformBrowser(this.paltFormId)){
        // this.element.removeEventListener('input', this.input as HTMLInputElement);
        this.document.removeEventListener('paste', this.paste);
      }
    });
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
