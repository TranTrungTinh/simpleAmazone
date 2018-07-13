import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  message = '';
  messageType = 'danger';

  constructor() {}

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
