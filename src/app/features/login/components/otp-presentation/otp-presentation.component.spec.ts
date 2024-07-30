import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPresentationComponent } from './otp-presentation.component';

describe('OtpPresentationComponent', () => {
  let component: OtpPresentationComponent;
  let fixture: ComponentFixture<OtpPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
