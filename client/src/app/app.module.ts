import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
/*import component */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
/*import service */
import { RequestService } from './services/request.service';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [RequestService, DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
