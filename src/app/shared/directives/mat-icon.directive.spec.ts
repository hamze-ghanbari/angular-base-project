import { Component, DebugElement } from '@angular/core';
import { MatIconDirective } from './mat-icon.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DomAccessor } from '@shared/spec/DomAccessor';

@Component({
  standalone: true,
  template: `
    <span [appMatIcon]="'home'"></span>
    `,
  imports: [MatIconDirective],
})
class TestMatIconComponent { }

fdescribe('MatIconDirective', () => {
  let fixture: ComponentFixture<TestMatIconComponent>;
  let elementsDirective: DebugElement;
  let directive: MatIconDirective;
  let dom: DomAccessor<TestMatIconComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [MatIconDirective, TestMatIconComponent],
    }).createComponent(TestMatIconComponent);
    fixture.detectChanges();

    elementsDirective = fixture.debugElement.query(By.directive(MatIconDirective));
    directive = elementsDirective.injector.get(MatIconDirective);
  });

  it('#1__default value', () => {
    expect(directive).toBeTruthy();
  });

  it('#2__', () => {
    expect(directive.appMatIcon).toBe('home');
  });

  it('#3__', () => {
    dom = new DomAccessor(fixture);
    let attributes = dom.getAttributeContent('span > mat-icon', ['data-mat-icon-type', 'role', 'class']);
    expect(attributes['data-mat-icon-type']).toEqual('font');
    expect(attributes['role']).toEqual('img');
    expect(attributes['class']).toEqual('mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color');
  });

  it('#4__', () => {
    dom = new DomAccessor(fixture);
    expect(dom.getElement('span > mat-icon').textContent).toBe('');
  });

});
