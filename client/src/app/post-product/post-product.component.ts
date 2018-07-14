import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';
import { CategoriesService } from '../services/categories.service';
import { ProductService } from '../services/product.service';
import { AppState, Category } from '../ngrx-store/types';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {

  categories: Category[];
  formPost: FormGroup;

  constructor(
    private store: Store<AppState>,
    private catService: CategoriesService,
    private productService: ProductService,
    private fb: FormBuilder,
    public data: DataService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.catService.getCategories();
      this.store.select('categories').subscribe(c => this.categories = c);
    }, 500);

    this.formPost = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['',[Validators.required]],
      category: ['', [Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  get title() {
    return this.formPost.get('title');
  }

  get price() {
    return this.formPost.get('price');
  }

  get description() {
    return this.formPost.get('description');
  }

  get category() {
    return this.formPost.get('category');
  }

  postProduct() {
    this.productService.addProductByOwner(
      this.title.value, this.price.value, this.description.value, this.category.value
    );
    this.formPost.reset('');
  }

}
