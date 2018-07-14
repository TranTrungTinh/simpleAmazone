import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  categoryId: string
  page = 1;
  category: any;
  limit = 5;

  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;

  constructor(
    private request: RequestService,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(res => this.categoryId = res['id']);
    setTimeout(() => {
      this.getProducts();
    }, 500)
  }

  get lower() {
    return this.limit * (this.page - 1) + 1
  }

  get upper() {
    return Math.min( this.limit * this.page, this.category.totalProduct )
  }

  getProducts(event?: any) {
    if(event) this.category = null;
    setTimeout(() => {
      this.request.get(`/api/categories/${this.categoryId}?page=${this.page}`)
      .then(response => this.category = response.results);
    }, 500)
  }

}
