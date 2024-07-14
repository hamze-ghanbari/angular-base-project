import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DismissEventDirective } from './dismiss-event.directive';


@Component({
  standalone: true,
  template: `
    <input type="text" appDismissEvent />
    `,
  imports: [DismissEventDirective],
})
class TestDismissEventComponent { }


fdescribe('DismissEventDirective', () => {
  let fixture: ComponentFixture<TestDismissEventComponent>;
  let elementsDirective: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [DismissEventDirective, TestDismissEventComponent],
    }).createComponent(TestDismissEventComponent);
    fixture.detectChanges();

    elementsDirective = fixture.debugElement.query(By.directive(DismissEventDirective));
  });

  it('#1__should create an instance', () => {
    const directive = new DismissEventDirective();
    expect(directive).toBeTruthy();
  });

  it('#2__copy hostListener', () => {
    const event = new KeyboardEvent('copy', {
      cancelable: true
    });
    elementsDirective.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTruthy();

  });

  it('#3__paste hostListener', () => {
    const event = new KeyboardEvent('paste', {
      cancelable: true
    });
    elementsDirective.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTruthy();
  });

  it('#4__cut hostListener', () => {
    const event = new KeyboardEvent('cut', {
      cancelable: true
    });
    elementsDirective.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTruthy();
  });

});
