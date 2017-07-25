import { StorageService } from './shared/services/storage.service';
import { IndianCurrency } from './shared/pipes/indian-Currency.pipe';
import { CompanyService } from './shared/services/company.service';
import { appRoutingProviders, routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AutoCompleteModule, ButtonModule, InputTextModule, PanelModule, SliderModule, FieldsetModule
} from 'primeng/primeng'; // PrimeNG modules

import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OccupationComponent } from './modules/occupation/occupation.component';
import { LoanComponent } from './modules/loan/loan.component';
import { ConclusionComponent } from './modules/conclusion/conclusion.component'; // animations modules

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonalComponent,
    OccupationComponent,
    LoanComponent,
    ConclusionComponent,
    IndianCurrency
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    SliderModule,
    FieldsetModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, CompanyService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
