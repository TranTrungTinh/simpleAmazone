import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { AppState, UserInfo } from '../ngrx-store/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserInfo;

  constructor(private store: Store<AppState>, private userService: UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.select('user').subscribe(user => this.user = user);
    }, 1500);
  }

}
