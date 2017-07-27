import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AutoCompleteModule, ButtonModule, InputTextModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules

import { StorageService } from './../../shared/services/storage.service';
import { CompanyService } from './../../shared/services/company.service';
import { OccupationComponent } from './occupation.component';

describe('OccupationComponent', () => {
  let component: OccupationComponent;
  let fixture: ComponentFixture<OccupationComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OccupationComponent],
      imports: [AutoCompleteModule,
        BrowserAnimationsModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        PanelModule, RouterTestingModule],
      providers: [CompanyService, StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create `OccupationForm` comprises of FormComponent', () => {
    expect(component.occupationForm instanceof FormGroup).toBe(true);
  });

  it('should create FormControls for `companyName`', () => {
    expect(Object.keys(component.occupationForm.controls)).toEqual(['companyName']);
  });

  it('`OccupationForm` should be invalid when empty', () => {
    expect(component.occupationForm.valid).toBeFalsy();
  });

  it('`CompanyName` field should be invalid when empty', () => {
    const companyName = component.occupationForm.controls['companyName'];
    expect(companyName.valid).toBeFalsy();
  });

  it('`OccupationForm` should be valid when all fields are entered', () => {
    component.occupationForm.controls['companyName'].setValue('Diebold Nixdorf');
    expect(component.occupationForm.valid).toBeTruthy();
  });

  it('`Next` button should be disabled when all fields are empty', () => {
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeTruthy();
  });

  it('`Next` button should be enabled only when all fields are entered', () => {
    component.occupationForm.controls['companyName'].setValue('Diebold Nixdorf');
    fixture.detectChanges();
    const btnNext = compiled.querySelector('button[name="next"]');
    expect(btnNext.disabled).toBeFalsy();
  });

});
