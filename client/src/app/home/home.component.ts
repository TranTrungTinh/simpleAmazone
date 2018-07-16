import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;

  constructor(private request: RequestService) { }

  ngOnInit() {
    setTimeout(() => {
      this.request.get('/api/all/products')
      .then(response => this.products = response.products);
    }, 1500);
  }

}
