import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConclusionComponent } from './modules/conclusion/conclusion.component';
import { LoanComponent } from './modules/loan/loan.component';
import { OccupationComponent } from './modules/occupation/occupation.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'conclusion', component: ConclusionComponent },
    { path: 'loan', component: LoanComponent },
    { path: 'occupation', component: OccupationComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'welcome', component: WelcomeComponent } // default
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
