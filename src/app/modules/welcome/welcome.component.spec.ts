import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'primeng/primeng'; // PrimeNG modules

import { WelcomeComponent } from './welcome.component';
describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [ButtonModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('`Proceed` button should be valid by default', () => {
    const btnProceed = compiled.querySelector('button[name="proceed"]');
    expect(btnProceed.disabled).toBeFalsy();
  });

  it('should render `Welcome to Online Loan Application` in a h2 tag', async(() => {
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to Online Loan Application');
  }));
});
