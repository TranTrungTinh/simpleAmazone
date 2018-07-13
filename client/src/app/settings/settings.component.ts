import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserService } from '../services/user.service';
import { AppState, UserInfo } from '../ngrx-store/types';
import { SET_MESSAGE } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user: UserInfo;
  btnDisable = false;
  message = '';

  newPassword = '';
  confirmPassword = '';

  constructor(
    private store: Store<AppState>, 
    private userService: UserService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: SET_MESSAGE, message: ''});
      this.store.select('user').subscribe(user => this.user = user);
      this.store.select('message').subscribe(m => this.message = m);
    }, 1500);
  }

  validate(): boolean {
    if(!this.newPassword.trim()) return true;
    if(this.newPassword.length < 5) {
      this.store.dispatch({ type: SET_MESSAGE, message: 'New password must have 5 laters !!!'});
      return false;
    }
    if(this.newPassword !== this.confirmPassword) {
      this.store.dispatch({ type: SET_MESSAGE, message: 'Comfirm Password does not match !!!'});
      return false;
    }
    this.store.dispatch({ type: SET_MESSAGE, message: ''});
    return true;
  }

  update() {
    if(this.validate()) {
      const password = this.newPassword.trim();
      alert(JSON.stringify(password));
    }
  }

}
