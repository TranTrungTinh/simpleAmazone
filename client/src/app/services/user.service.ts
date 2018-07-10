import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { DataService } from '../services/data.service';
import { RequestService } from '../services/request.service';

@Injectable()
export class UserService {

  constructor(private data: DataService, private request: RequestService, private router: Router) { }

  signUp(email: string, plainPassword: string, name: string, isSeller: boolean ) {
    this.request.post('/user/signup', {email, plainPassword, name, isSeller})
    .then(response => {
      this.data.success('Registration Successful !');
    })
    .catch(error => this.data.error(error.message));
  }

  signIn(email: string, plainPassword: string) {
    this.request.post('/user/signin', {email, plainPassword})
    .then(response => {
      const { token } = response.user;
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    })
    .catch(error => this.data.error(error.message));
  }
}
