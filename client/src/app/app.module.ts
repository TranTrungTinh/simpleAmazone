import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StoreModule } from '@ngrx/store';
/*import component */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
/*import service */
import { RequestService } from './services/request.service';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

import { MustBeUserGuard } from './guards/must-be-user.guard';
import { MustBeGuestGuard } from './guards/must-be-guest.guard';

import { userReducer } from './ngrx-store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    StoreModule.forRoot({ user: userReducer })
  ],
  providers: [
    RequestService, 
    DataService, 
    UserService,
    MustBeUserGuard,
    MustBeGuestGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
