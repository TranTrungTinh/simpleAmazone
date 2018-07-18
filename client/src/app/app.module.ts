import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StoreModule } from '@ngrx/store';
import { LazyLoadImageModule } from 'ng-lazyload-image';
/*import component */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
/*import service */
import { RequestService } from './services/request.service';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';

import { MustBeUserGuard } from './guards/must-be-user.guard';
import { MustBeGuestGuard } from './guards/must-be-guest.guard';

import { 
  userReducer, 
  categoriesReducer, 
  productByOwnerReducer,
  productByCatReducer,
  reviewReducer,
  cartReducer
} from './ngrx-store/reducers';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    AddressComponent,
    CategoriesComponent,
    PostProductComponent,
    MyProductsComponent,
    CategoryDetailComponent,
    ProductComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    StoreModule.forRoot({ 
      user: userReducer,
      categories: categoriesReducer,
      products: productByOwnerReducer,
      productsByCat: productByCatReducer,
      reviews: reviewReducer,
      cart: cartReducer
    }),
    LazyLoadImageModule
  ],
  providers: [
    RequestService, 
    DataService, 
    UserService,
    CategoriesService,
    ProductService,
    MustBeUserGuard,
    MustBeGuestGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
