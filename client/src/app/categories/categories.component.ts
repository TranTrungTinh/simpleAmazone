import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Category } from '../ngrx-store/types';
import { CategoriesService } from '../services/categories.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  toggleAdd = false;
  name = '';

  constructor(
    private store: Store<AppState>,
    private catService: CategoriesService,
    public data: DataService
  ) { }

  ngOnInit() {
    this.data.clear();
    setTimeout(() => {
      this.catService.getCategories();
      this.store.select('categories').subscribe(c => this.categories = c);
    }, 1000);
  }

  toggle() {
    this.toggleAdd = !this.toggleAdd;
  }

  add() {
    if(this.name.toLocaleLowerCase().trim()) {
      this.catService.addCategory(this.name);
      this.toggle();
    }
  }

}
