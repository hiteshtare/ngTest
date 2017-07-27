import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // animations modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import {
  AutoCompleteModule, ButtonModule, InputTextModule, PanelModule, SliderModule,
  FieldsetModule
} from 'primeng/primeng'; // PrimeNG modules
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core'; // ng2 dynamic form
import { DynamicFormsPrimeNGUIModule } from '@ng2-dynamic-forms/ui-primeng'; // ng2 dynamic form

import { appRoutingProviders, routing } from './app.routing'; // routing
import { ConclusionComponent } from './modules/conclusion/conclusion.component'; // custom components
import { LoanComponent } from './modules/loan/loan.component';
import { OccupationComponent } from './modules/occupation/occupation.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { WelcomeComponent } from './modules/welcome/welcome.component'; // custom components

import { CompanyService } from './shared/services/company.service'; // custom shared services
import { JsonService } from './shared/services/json.service';
import { StorageService } from './shared/services/storage.service'; // custom shared services
import { IndianCurrencyPipe } from './shared/pipes/indian-currency.pipe'; // custom pipes
import { AppComponent } from './app.component'; // app


describe('App: ngTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConclusionComponent,
        IndianCurrencyPipe,
        LoanComponent,
        OccupationComponent,
        PersonalComponent,
        WelcomeComponent,
      ],
      imports: [
        AutoCompleteModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsPrimeNGUIModule,
        FieldsetModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        PanelModule,
        SliderModule],
      providers: [CompanyService, JsonService, StorageService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
