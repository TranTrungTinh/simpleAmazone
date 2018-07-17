import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
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
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [MustBeUserGuard]
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
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
