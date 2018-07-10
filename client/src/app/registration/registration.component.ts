import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  password1 = '';
  isSeller = false;

  btnDisable = false;

  constructor(private data: DataService, private userService: UserService) { }

  ngOnInit() {
  }

  validate(): Boolean {
    if(this.name) {
      if(this.email) {
        if(this.password) {
          if(this.password1) {
            if(this.password === this.password1) {
              return true;
            } else {
              this.data.error('Password do not match');
            }
          } else {
            this.data.error('Confirmation Password is not entered');
          }
        } else {
          this.data.error('Password is not entered');
        }
      } else {
        this.data.error('Email is not entered');
      }
    } else {
      this.data.error('Name is not entered');
    }
  }

  register() {
    this.btnDisable = true;
    if(this.validate()) {
      this.userService.signUp(this.email, this.password, this.name, this.isSeller);
      this.btnDisable = false
    }
  }

}
