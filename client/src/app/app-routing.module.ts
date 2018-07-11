import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';

import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [MustBeGuestGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [MustBeGuestGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MustBeUserGuard]
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [MustBeUserGuard]
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [MustBeUserGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
