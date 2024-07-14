import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostBinding, Inject, InjectionToken, Input, PLATFORM_ID, Renderer2, afterNextRender, afterRender } from '@angular/core';

@Directive({
  selector: '[appMatIcon]',
  standalone: true
})
export class MatIconDirective {
  @Input() appMatIcon: string = '';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private paltFormId: InjectionToken<Object>
  ) {
    // afterNextRender(() => {
    //   const child = this.document.createElement('mat-icon');
    //   child.textContent = this.appMatIcon;
    //   child.setAttribute('data-mat-icon-type', 'font');
    //   child.setAttribute('role', 'img');
    //   child.setAttribute('class', 'mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color');
    //   this.renderer.appendChild(this.elementRef.nativeElement, child);
    // });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.paltFormId)) {
      const child = this.document.createElement('mat-icon');
      child.textContent = this.appMatIcon;
      child.setAttribute('data-mat-icon-type', 'font');
      child.setAttribute('role', 'img');
      child.setAttribute('class', 'mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color');
      this.renderer.appendChild(this.elementRef.nativeElement, child);
    }
  }
}
