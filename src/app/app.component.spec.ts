import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DomAccessor } from '@shared/spec/DomAccessor';

describe('AppComponent', () => {
  // let domService: DomAccessor<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // domService = new DomAccessor(fixture);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).withContext('first test').toBeTruthy();
  });

  it(`should have the 'BaseProject' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BaseProject');
  });

  it('should render title', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, BaseProject');
  });
});
