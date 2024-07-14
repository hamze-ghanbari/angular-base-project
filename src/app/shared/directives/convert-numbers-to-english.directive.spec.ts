import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertNumbersToEnglishDirective } from './convert-numbers-to-english.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


  @Component({
    standalone: true,
    template: `
      <input type="text" appConvertNumbersToEnglish />
      `,
    imports: [ConvertNumbersToEnglishDirective],
  })
  class TestConvertNumbersComponent { }
  
  
  fdescribe('ConvertNumbersToEnglishDirective', () => {
    let fixture: ComponentFixture<TestConvertNumbersComponent>;
    let elementsDirective: DebugElement;
    let directive: ConvertNumbersToEnglishDirective;
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        imports: [ConvertNumbersToEnglishDirective, TestConvertNumbersComponent],
      }).createComponent(TestConvertNumbersComponent);
      fixture.detectChanges();
  
      elementsDirective = fixture.debugElement.query(By.directive(ConvertNumbersToEnglishDirective));
      directive = elementsDirective.injector.get(ConvertNumbersToEnglishDirective);
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
      spyOn(directive, 'convertNumbersToEnglish').and.callThrough();
      elementsDirective.triggerEventHandler('input', event);
      expect(directive.convertNumbersToEnglish).toHaveBeenCalled();
    });
  
    it('#convertNumbersToEnglish method', () => {
      expect(elementsDirective.nativeElement.value).toBe('');
      elementsDirective.nativeElement.value = '۰۱۲۳۴٤۵٥۶٦۷۸۹';
      directive.convertNumbersToEnglish('۰۱۲۳۴٤۵٥۶٦۷۸۹');
      fixture.detectChanges();
      expect(elementsDirective.nativeElement.value).not.toBe('۰۱۲۳۴٤۵٥۶٦۷۸۹');
      expect(elementsDirective.nativeElement.value).toBe('0123445566789');
    });
  
  });
  