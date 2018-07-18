import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, UserInfo, Cart } from './ngrx-store/types';

import { UserService } from './services/user.service';

import { LOG_OUT } from './ngrx-store/actionTypes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchTerm = '';
  isCollapsed = true;
  user: UserInfo;
  cart: Cart;

  constructor(
    private router: Router, 
    private userService: UserService,
    private store: Store<AppState>
  ) {}
  
  ngOnInit() {
    this.store.select('user').subscribe(user => this.user = user);
    this.store.select('cart').subscribe(c => this.cart = c);
    this.userService.checkToken();
  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.store.dispatch({ type: LOG_OUT });
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {
    if(this.searchTerm) {
      this.collapse();
      this.router.navigate(['search', { query: this.searchTerm }]);
    }
  }
}
