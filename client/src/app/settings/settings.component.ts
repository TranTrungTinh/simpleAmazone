import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { AppState, UserInfo } from '../ngrx-store/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user: UserInfo;
  btnDisable = false;
  
  constructor(private store: Store<AppState>, private userService: UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.select('user').subscribe(user => this.user = user);
    }, 2000);
  }

}
