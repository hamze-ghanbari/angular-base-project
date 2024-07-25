import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Directive, HostListener, Inject, InjectionToken, Input, PLATFORM_ID, inject } from '@angular/core';

@Directive({
  selector: '[appDismissEvent]',
  standalone: true
})
export class DismissEventDirective {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private paltFormId: InjectionToken<Object>
  ) {
    inject(DestroyRef).onDestroy(() => {
      if(isPlatformBrowser(this.paltFormId)){
        this.document.removeEventListener('copy', this.copy);
        this.document.removeEventListener('paste', this.paste);
        this.document.removeEventListener('cut', this.cut);
      }
    });
  }

  @HostListener('copy', ['$event']) copy(event: Event): void {
    event.preventDefault();
  }

  @HostListener('paste', ['$event']) paste(event: Event): void {
    event.preventDefault();
  }

  @HostListener('cut', ['$event']) cut(event: Event): void {
    event.preventDefault();
  }

}
