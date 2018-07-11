import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from './ngrx-store/types';

import { DataService } from './services/data.service';
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

  constructor(
    private data: DataService, 
    private router: Router, 
    private userService: UserService,
    private store: Store<AppState>
  ) {}
  
  ngOnInit() {
    this.store.select('user').subscribe(user => this.user = user);
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
    this.data.clear();
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {}
}
