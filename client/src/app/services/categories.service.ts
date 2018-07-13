import { Injectable } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/types';

import { SET_CATEGORIES, CREATE_CATEGORY, SET_MESSAGE } from '../ngrx-store/actionTypes';


@Injectable()
export class CategoriesService {

  constructor(
    private request: RequestService,
    private store: Store<AppState>
  ) { }

  getCategories() {
    this.request.get('/api/categories')
    .then(response => {
      this.store.dispatch({ type: SET_CATEGORIES, categories: response.categories })
    })
  }

  addCategory(name: string) {
    this.request.post('/api/categories', { name })
    .then(response => {
      this.store.dispatch({ type: CREATE_CATEGORY, category: response.category });
      this.store.dispatch({ type: SET_MESSAGE, message: "Add Category Successful !" })

    })
  }

}
