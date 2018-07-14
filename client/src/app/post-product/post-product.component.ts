import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from '../services/data.service';
import { CategoriesService } from '../services/categories.service';
import { AppState, Category } from '../ngrx-store/types';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {

  categories: Category[];

  constructor(
    private store: Store<AppState>,
    private catService: CategoriesService,
    public data: DataService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.catService.getCategories();
      this.store.select('categories').subscribe(c => this.categories = c);
    }, 1000);
  }

}
