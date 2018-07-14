import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/types';

import { RequestService } from './request.service';
import { SET_PRODUCTS } from '../ngrx-store/actionTypes';

@Injectable()
export class ProductService {

  constructor(
    private request: RequestService,
    private store: Store<AppState>
  ) { }

  getProducts() {
    this.request.get('/api/products')
    .then(response => {
      this.store.dispatch({ type: SET_PRODUCTS, products: response.products })
    });
  }
}
