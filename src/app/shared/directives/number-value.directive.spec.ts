import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberValueDirective } from './number-value.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { createSpyOn, makeDependecy } from '@shared/spec/MockDependencies';

@Component({
  standalone: true,
  template: `
    <input type="text" appNumberValue />
    `,
  imports: [NumberValueDirective],
})
class TestNumberValueComponent { }


fdescribe('NumberValueDirective', () => {
  let fixture: ComponentFixture<TestNumberValueComponent>;
  let elementsDirective: DebugElement;
  let directive: NumberValueDirective;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [NumberValueDirective, TestNumberValueComponent],
    }).createComponent(TestNumberValueComponent);
    fixture.detectChanges();

    elementsDirective = fixture.debugElement.query(By.directive(NumberValueDirective));
    directive = elementsDirective.injector.get(NumberValueDirective);
  });

  it('#1__default value', () => {
    expect(directive).toBeTruthy();
    expect(elementsDirective.nativeElement.value).toBe('');
  });

  it('#2__paste hostListener', () => {
    const event = new KeyboardEvent('paste', {
      cancelable: true
    });
    elementsDirective.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTruthy();

  });


  it('#3__input hostListener', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 96,
      ctrlKey: false
    };
    eventInit.modifierNumLock = true;
    const event = new KeyboardEvent('input', eventInit);
    spyOn(directive, 'NumberVal').and.callThrough();
    elementsDirective.triggerEventHandler('input', event);
    expect(directive.NumberVal).toHaveBeenCalled();
  });

  it('#4__NumberVal method', () => {
    expect(elementsDirective.nativeElement.value).toBe('');
    elementsDirective.nativeElement.value = 'test1234';
    directive.NumberVal('test');
    fixture.detectChanges();
    expect(elementsDirective.nativeElement.value).toBe('1234');
    expect(elementsDirective.nativeElement.value).toMatch(new RegExp(/^\d*\.?\d*$/));
  });

});
