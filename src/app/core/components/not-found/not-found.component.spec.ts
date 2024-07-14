import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { DomAccessor } from '@shared/spec/DomAccessor';

fdescribe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let dom: DomAccessor<NotFoundComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dom = new DomAccessor(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#2__', () => {
    expect(dom.contentElement('h1').trim()).toEqual('404');
    expect(dom.contentElement('span').trim()).toEqual('صفحه مورد نظر یافت نشد');
  });
});
