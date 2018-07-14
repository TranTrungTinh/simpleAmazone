import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Product } from '../ngrx-store/types';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  products: Product[];

  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;

  constructor(
    private store: Store<AppState>,
    private proService: ProductService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.proService.getProductsByOwner();
      this.store.select('products').subscribe(p => this.products = p);
    }, 1000);
  }

}
