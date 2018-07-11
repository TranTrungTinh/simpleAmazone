import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class DataService {

  message = '';
  messageType = 'danger';
  user: any;

  constructor(private router: Router) { 
    this.router.events.subscribe(e => {
      if(event instanceof NavigationStart) {
        this.message = '';
      }
    });
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
