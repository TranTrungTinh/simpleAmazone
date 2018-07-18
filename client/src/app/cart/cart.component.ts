import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Cart } from '../ngrx-store/types';
import { UPDATE_PRODUCT, DELETE_PRODUCT } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart;
  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;
  quantity = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('cart').subscribe(c => {
      this.cart = c;
      this.quantity = this.cart.products.map(e => e.quantity);
    });
  }

  onChange(index, _id) {
    if(this.quantity[index] <= 0) this.quantity[index] = 1;
    this.store.dispatch({ type:  UPDATE_PRODUCT, payload: { _id , quantity: this.quantity[index] }});
  }

  delete(_id) {
    this.store.dispatch({ type:  DELETE_PRODUCT, _id });
  }

}
