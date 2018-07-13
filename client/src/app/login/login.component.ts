import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserService } from '../services/user.service';
import { SET_MESSAGE } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup;
  message = '';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private store: Store<string>
  ) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_MESSAGE, message: '' });
    this.store.select('message').subscribe(m => this.message = m);

    this.formSignIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get email() {
    return this.formSignIn.get('email');
  }

  get password() {
    return this.formSignIn.get('password');
  }

  login() {
    this.userService.signIn(this.email.value, this.password.value);
  }

}
