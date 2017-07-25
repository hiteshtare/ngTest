import { ConclusionComponent } from './modules/conclusion/conclusion.component';
import { LoanComponent } from './modules/loan/loan.component';
import { OccupationComponent } from './modules/occupation/occupation.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent }, // default
    { path: 'personal', component: PersonalComponent },
    { path: 'occupation', component: OccupationComponent },
    { path: 'loan', component: LoanComponent },
    { path: 'conclusion', component: ConclusionComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
