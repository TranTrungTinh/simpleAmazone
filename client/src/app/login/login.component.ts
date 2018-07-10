import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  btnDisable = false;

  constructor(private data: DataService, private userService: UserService) { }

  ngOnInit() {
  }

  validate(): boolean {
    if(this.email) {
      if(this.password) {
        return true;
      } else {
        this.data.error('Password is not entered');
      }
    } else {
      this.data.error('Email is not entered');
    }
  }

  login() {
    this.btnDisable = true;
    if(this.validate()) {
      this.userService.signIn(this.email, this.password);
      this.btnDisable = false;
    }
  }

}
