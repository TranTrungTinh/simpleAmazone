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
      if(response.success) return this.data.success('Registration Successful !');
      this.data.error(response.message);
    });
  }
}
