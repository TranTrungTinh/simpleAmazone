import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

import { AppState, UserInfo } from '../ngrx-store/types';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  user: UserInfo;
  message = ''
  
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

  update() {
    this.userService.updateAddress(this.user.address);
  }

}
