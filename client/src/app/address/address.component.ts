import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { AppState, UserInfo } from '../ngrx-store/types';
import { SET_MESSAGE } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  user: UserInfo;
  message = ''
  
  constructor(private store: Store<AppState>, private userService: UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: SET_MESSAGE, message: ''});
      this.store.select('user').subscribe(user => this.user = user);
      this.store.select('message').subscribe(m => this.message = m);
    }, 1000);
  }

  update() {
    this.userService.updateAddress(this.user.address);
  }

}
