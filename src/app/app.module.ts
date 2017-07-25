import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // animations modules
import {
  AutoCompleteModule, ButtonModule, InputTextModule, PanelModule, SliderModule,
  FieldsetModule
} from 'primeng/primeng'; // PrimeNG modules

import { AppComponent } from './app.component'; // app
import { appRoutingProviders, routing } from './app.routing'; // routing
import { ConclusionComponent } from './modules/conclusion/conclusion.component'; // custom components
import { LoanComponent } from './modules/loan/loan.component';
import { OccupationComponent } from './modules/occupation/occupation.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { WelcomeComponent } from './modules/welcome/welcome.component'; // custom components

import { StorageService } from './shared/services/storage.service'; // custom shared services
import { CompanyService } from './shared/services/company.service'; // custom shared services

import { IndianCurrency } from './shared/pipes/indian-Currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConclusionComponent,
    IndianCurrency,
    LoanComponent,
    OccupationComponent,
    PersonalComponent,
    WelcomeComponent
  ],
  imports: [
    AutoCompleteModule,
    BrowserModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    SliderModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, CompanyService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
