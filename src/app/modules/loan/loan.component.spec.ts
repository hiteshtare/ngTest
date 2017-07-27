import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule, PanelModule, SliderModule } from 'primeng/primeng'; // PrimeNG modules

import { StorageService } from './../../shared/services/storage.service';
import { IndianCurrencyPipe } from './../../shared/pipes/indian-currency.pipe';
import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanComponent,
        IndianCurrencyPipe],
      imports: [
        BrowserAnimationsModule,
        ButtonModule,
        FormsModule,
        PanelModule,
        ReactiveFormsModule,
        SliderModule,
        RouterTestingModule],
      providers: [FormBuilder, StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create `LoanForm` comprises of FormComponent', () => {
    expect(component.loanForm instanceof FormGroup).toBe(true);
  });

  it('should create FormControls for `loanAmount` and `existingEMI`', () => {
    expect(Object.keys(component.loanForm.controls)).toEqual(['loanAmount', 'existingEMI']);
  });

  it('`LoanForm` should be invalid when empty', () => {
    expect(component.loanForm.valid).toBeFalsy();
  });

  it('`LoanAmount` field should be invalid when empty', () => {
    const loanAmount = component.loanForm.controls['loanAmount'];
    expect(loanAmount.valid).toBeFalsy();
  });

  it('`ExistingEMI` field should be invalid when empty', () => {
    const existingEMI = component.loanForm.controls['existingEMI'];
    expect(existingEMI.valid).toBeFalsy();
  });

  it('`LoanForm` should be valid when all fields are entered', () => {
    component.loanForm.controls['loanAmount'].setValue('3200000');
    component.loanForm.controls['existingEMI'].setValue('50000');
    expect(component.loanForm.valid).toBeTruthy();
  });

  it('`Next` button should be disabled when all fields are empty', () => {
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeTruthy();
  });

  it('`Next` button should be disabled only when `LoanAmount` is entered ', () => {
    component.loanForm.controls['loanAmount'].setValue('3200000');
    fixture.detectChanges();
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeTruthy();
  });

  it('`Next` button should be disabled only when `ExistingEMI` is entered ', () => {
    component.loanForm.controls['existingEMI'].setValue('50000');
    fixture.detectChanges();
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeTruthy();
  });

  it('`Next` button should be enabled only when all fields are entered', () => {
    component.loanForm.controls['loanAmount'].setValue('3200000');
    component.loanForm.controls['existingEMI'].setValue('50000');
    fixture.detectChanges();
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeFalsy();
  });


});
