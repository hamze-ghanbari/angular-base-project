import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenComponent } from './forbidden.component';
import { DomAccessor } from '@shared/spec/DomAccessor';

fdescribe('ForbiddenComponent', () => {
  let component: ForbiddenComponent;
  let fixture: ComponentFixture<ForbiddenComponent>;
  let dom: DomAccessor<ForbiddenComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dom = new DomAccessor(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#2__', () => {
    expect(dom.contentElement('h1').trim()).toEqual('403');
    expect(dom.contentElement('span').trim()).toEqual('عدم دسترسی');
  });
});
