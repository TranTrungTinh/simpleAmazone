import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Address } from '../ngrx-store/types';

import { DataService } from '../services/data.service';
import { RequestService } from '../services/request.service';

import { SET_USER, SET_MESSAGE } from '../ngrx-store/actionTypes';

@Injectable()
export class UserService {

  constructor(
    private data: DataService, 
    private request: RequestService, 
    private router: Router,
    private store: Store<AppState>
  ) { }

  signUp(email: string, plainPassword: string, name: string, isSeller: boolean ) {
    this.request.post('/user/signup', {email, plainPassword, name, isSeller})
    .then(response => {
      this.store.dispatch({ type: SET_MESSAGE, message: 'Registration Successful !!!' });
    })
    .catch(error => this.data.error(error.message));
  }

  signIn(email: string, plainPassword: string) {
    this.request.post('/user/signin', {email, plainPassword})
    .then(response => {
      const { token } = response.user;
      localStorage.setItem('token', token);
      this.store.dispatch({ type: SET_USER, userInfo: response.user });
      this.router.navigate(['/']);
    })
    .catch(error => this.store.dispatch({ type: SET_MESSAGE, message: error.message }));
  }

  updateAddress(address: Address) {
    this.request.post('/user/address', { profile: address })
    .then(response => {
      this.store.dispatch({ type: SET_USER, userInfo: response.user });
      this.store.dispatch({ type: SET_MESSAGE, message: 'Change address successful !!!' });
    })
  }

  checkToken() {
    if (!localStorage.getItem('token')) return;
    this.request.get('/user/profile')
    .then(response => {
      this.store.dispatch({ type: SET_USER, userInfo: response.user });
      const { token } = response.user;
      localStorage.setItem('token', token);
    })
    .catch(error => this.data.error(error.message));
  }

}
