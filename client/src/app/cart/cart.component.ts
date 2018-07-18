import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from '../services/request.service';

import { Store } from '@ngrx/store';
import { AppState, Cart, UserInfo } from '../ngrx-store/types';
import { UPDATE_PRODUCT, DELETE_PRODUCT, CLEAR_CART } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  user: UserInfo;
  cart: Cart;
  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;
  quantity = [];

  isLoading = false;
  isSuccess = false;

  constructor(
    private store: Store<AppState>, 
    private modalService: NgbModal,
    private request: RequestService
  ) { }

  ngOnInit() {
    this.store.select('cart').subscribe(c => {
      this.cart = c;
      this.quantity = this.cart.products.map(e => e.quantity);
    });
    this.store.select('user').subscribe(u => this.user = u);
  }

  onChange(index, _id) {
    if(this.quantity[index] <= 0) this.quantity[index] = 1;
    this.store.dispatch({ type:  UPDATE_PRODUCT, payload: { _id , quantity: this.quantity[index] }});
  }

  delete(_id) {
    this.store.dispatch({ type:  DELETE_PRODUCT, _id });
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  checkout() {
    this.isLoading = true;
    setTimeout(() => {
      this.request.post('/api/payment', { order: this.cart })
      .then(response => {
        this.isSuccess = true;
        this.isLoading = false;
        this.store.dispatch({ type:  CLEAR_CART });
      })
    }, 2000)
  }

}
