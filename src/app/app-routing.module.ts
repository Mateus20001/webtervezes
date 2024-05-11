import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllasokComponent } from './allasok/allasok.component';
import { AllasDetailComponent } from './allas-detail/allas-detail.component';
import { AllasFormComponent } from './allas-form/allas-form.component';
import { ErdekesAdatokComponent } from './erdekes-adatok/erdekes-adatok.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BejelentkezesFormComponent } from './bejelentkezes-form/bejelentkezes-form.component';
import { authGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/bejelentkezes', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AllasDetailComponent, canActivate: [authGuard] },
  { path: 'allasok', component: AllasokComponent},
  { path: 'jelentkezes', component: AllasFormComponent, canActivate: [authGuard]},
  { path: 'erdekesadatok', component: ErdekesAdatokComponent},
  { path: 'bejelentkezes', component: BejelentkezesFormComponent},
  { path: 'regisztracio', component: RegistrationFormComponent},
  { path: 'profil', component: ProfileComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
