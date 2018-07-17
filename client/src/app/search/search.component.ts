import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  page = 1;
  query = '';
  products: any;
  limit = 5;

  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;

  constructor(
    private request: RequestService,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(res => {
      this.query = res['query']
      setTimeout(() => this.getProducts(), 100);
    });
  }

  get lower() {
    return this.limit * (this.page - 1) + 1
  }

  get upper() {
    return Math.min( this.limit * this.page, this.products.totalProduct )
  }

  getProducts(event?: any) {
    if(event) this.products = null;
    setTimeout(() => {
      this.request.get(`/api/search/products?query=${this.query}&page=${this.page}`)
      .then(response => this.products = response.results);
    }, 500)
  }

}
