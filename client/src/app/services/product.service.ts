import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/types';

import { RequestService } from './request.service';
import { DataService } from './data.service';
import { SET_PRODUCTS } from '../ngrx-store/actionTypes';

@Injectable()
export class ProductService {

  constructor(
    private request: RequestService,
    private data: DataService,
    private store: Store<AppState>
  ) { }

  getProductsByOwner() {
    this.request.get('/api/products')
    .then(response => {
      this.store.dispatch({ type: SET_PRODUCTS, products: response.products })
    });
  }

  addProductByOwner(title: string, price: string, description: string, category: string) {
    this.request.post('/api/products', { title, price, description, category })
    .then(response => {
      this.data.success('Post Product For Sale Successful !!!');
    })
  }
}
