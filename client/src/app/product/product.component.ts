import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { DataService } from '../services/data.service';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState, Review, Product } from '../ngrx-store/types';
import { SET_REVIEWS, ADD_REVIEW } from '../ngrx-store/actionTypes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  reviews: Review[];
  myReview = {
    title: '',
    description: '',
    rating: 0,
    idProduct: ''
  };

  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;
  

  constructor(
    private request: RequestService, 
    public data: DataService,
    private active: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('reviews').subscribe(r => this.reviews = r);
    this.active.params.subscribe(res => {
      this.myReview.idProduct = res['id'];
      this.request.get(`/api/products/${res['id']}`)
      .then(responese => {
        const { product } = responese;
        this.product = product;
        this.store.dispatch({ type: SET_REVIEWS, reviews: product.reviews });
      });
    });
    this.data.clear();
  }


  addReview() {
    const { title, description, rating, idProduct } = this.myReview;
    if(!title || !description) this.data.error('Please input title and description !!!')
    else 
      this.request.post('/api/reviews', {title, description, rating, idProduct})
      .then(responese => {
        this.store.dispatch({ type: ADD_REVIEW, review: responese.review });
        this.data.success('Thanks for your review.');
        setTimeout(() => this.data.clear(), 5000);
      })
      .catch(error => this.data.error(error.message));
    
  }

}
