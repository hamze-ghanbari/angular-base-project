import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDismissEvent]',
  standalone: true
})
export class DismissEventDirective {
  constructor() {}

  @HostListener('copy', ['$event']) copy(event: Event) {
    event.preventDefault();
  }

  @HostListener('paste', ['$event']) paste(event: Event) {
    event.preventDefault();
  }

  @HostListener('cut', ['$event']) cut(event: Event) {
    event.preventDefault();
  }

}
