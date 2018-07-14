import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formRegister: FormGroup;
  message = '';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private store: Store<string>,
    public data: DataService
  ) {}

  ngOnInit() {
    this.data.clear();
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      isSeller: false,
      pw: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        cofirmPassword: ['',[Validators.required]]
      }, { validator: this.passwordMustMatch })
    })
  }

  get name() {
    return this.formRegister.get('name');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get isSeller() {
    return this.formRegister.get('isSeller');
  }

  get pw() {
    return this.formRegister.get('pw');
  }

  get password() {
    return this.formRegister.get('pw').get('password')
  }

  get confirmPassword() {
    return this.formRegister.get('pw').get('cofirmPassword');
  }

  passwordMustMatch(control: AbstractControl) {
    const { value } = control;
    return (value.password === value.cofirmPassword) ? null : { passwordnotmatch: true };
  }

  register() {
    this.userService.signUp(
      this.email.value, 
      this.password.value, 
      this.name.value, 
      this.isSeller.value
    );
  }

}
