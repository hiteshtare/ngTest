import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormsPrimeNGUIModule } from '@ng2-dynamic-forms/ui-primeng';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule, InputTextModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules
import { DynamicFormService, DynamicFormValidationService } from '@ng2-dynamic-forms/core'; // ng2 dynamic form

import { StorageService } from './../../shared/services/storage.service';
import { JsonService } from './../../shared/services/json.service';
import { PersonalComponent } from './personal.component';

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalComponent],
      imports: [
        BrowserAnimationsModule,
        ButtonModule,
        DynamicFormsPrimeNGUIModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        ReactiveFormsModule,
        PanelModule,
        RouterTestingModule],
      providers: [DynamicFormService, DynamicFormValidationService, JsonService, StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create `PersonalForm` comprises of FormComponent', () => {
    expect(component.personalForm instanceof FormGroup).toBe(true);
  });

  it('should create FormControls for `loanAmount` and `existingEMI`', () => {
    expect(Object.keys(component.personalForm.controls)).toEqual(['firstName', 'lastName', 'email', 'mobileNo', 'dob']);
  });

  it('`PersonalForm` should be invalid when empty', () => {
    expect(component.personalForm.valid).toBeFalsy();
  });

  it('`FirstName` field should be invalid when empty', () => {
    const firstName = component.personalForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });

  it('LastName` field should be invalid when empty', () => {
    const lastName = component.personalForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
  });

  it('Email` field should be invalid when empty', () => {
    const email = component.personalForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('MobileNo` field should be invalid when empty', () => {
    const mobileNo = component.personalForm.controls['mobileNo'];
    expect(mobileNo.valid).toBeFalsy();
  });

  it('DateOfBirth` field should be invalid when empty', () => {
    const dob = component.personalForm.controls['dob'];
    expect(dob.valid).toBeFalsy();
  });

  it('`PersonalForm` should be valid when all fields are entered', () => {
    component.personalForm.controls['firstName'].setValue('Hitesh');
    component.personalForm.controls['lastName'].setValue('Tare');
    component.personalForm.controls['email'].setValue('hiteshtare@gmail.com');
    component.personalForm.controls['mobileNo'].setValue('8082679112');
    component.personalForm.controls['dob'].setValue('09/03/1990');
    expect(component.personalForm.valid).toBeTruthy();
    fixture.detectChanges();
  });

  // it('`Next` button should be disabled when all fields are empty', () => {
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });

  // it('`Next` button should be disabled only when `FirstName` is entered ', () => {
  //   component.personalForm.controls['firstName'].setValue('Hitesh');
  //   fixture.detectChanges();
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });

  // it('`Next` button should be disabled only when `LastName` is entered ', () => {
  //   component.personalForm.controls['lastName'].setValue('Tare');
  //   fixture.detectChanges();
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });

  // it('`Next` button should be disabled only when `Email` is entered ', () => {
  //   component.personalForm.controls['email'].setValue('hiteshtare@gmail.com');
  //   fixture.detectChanges();
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });


  // it('`Next` button should be disabled only when `MobileNo` is entered ', () => {
  //   component.personalForm.controls['mobileNo'].setValue('8082679112');
  //   fixture.detectChanges();
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });


  // it('`Next` button should be disabled only when `DateOfBirth` is entered ', () => {
  //   component.personalForm.controls['dob'].setValue('09/03/1990');
  //   fixture.detectChanges();
  //   const btnNext = compiled.querySelector('button[name="next"]');
  //   expect(btnNext.disabled).toBeTruthy();
  // });

  it('`Next` button should be enabled only when all fields are entered', () => {
    component.personalForm.controls['firstName'].setValue('Hitesh');
    component.personalForm.controls['lastName'].setValue('Tare');
    component.personalForm.controls['email'].setValue('hiteshtare@gmail.com');
    component.personalForm.controls['mobileNo'].setValue('8082679112');
    component.personalForm.controls['dob'].setValue('09/03/1990');
    fixture.detectChanges();
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeFalsy();
  });
});
