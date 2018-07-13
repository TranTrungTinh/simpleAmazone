import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

import { AppState, UserInfo } from '../ngrx-store/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user: UserInfo;
  btnDisable = false;

  newPassword = '';
  confirmPassword = '';

  constructor(
    private store: Store<AppState>, 
    private userService: UserService,
    public data: DataService
  ) { }

  ngOnInit() {
    this.data.clear();
    setTimeout(() => {
      this.store.select('user').subscribe(user => this.user = user);
    }, 1000);
  }

  validate(): boolean {
    if(!this.newPassword.trim()) return true;
    if(this.newPassword.length < 5) {
      this.data.error('New password must have 5 laters !!!');
      return false;
    }
    if(this.newPassword !== this.confirmPassword) {
      this.data.error('Comfirm Password does not match !!!');
      return false;
    }
    this.data.success('');
    return true;
  }

  update() {
    if(this.validate()) {
      const password = this.newPassword.trim();
      this.userService.updateUserInfo(this.user.name, password);
    }
  }

}
