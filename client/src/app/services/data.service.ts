import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_MESSAGE } from '../ngrx-store/actionTypes';

@Injectable()
export class DataService {

  message = '';
  messageType = 'danger';

  constructor(private store: Store<string>) {
    this.store.dispatch({ type: SET_MESSAGE, message: ''});
  }

  error(message: string) {
    this.message = message;
    this.messageType = 'danger';
  }

  success(message: string) {
    this.message = message;
    this.messageType = 'success';
  }

  warning(message: string) {
    this.message = message;
    this.messageType = 'warning';
  }

  clear() {
    this.message = '';
    this.messageType = 'danger';
  }

}
