import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;
  defaultImage = 'https://i.redd.it/ounq1mw5kdxy.gif';
  offset = 100;
  
  constructor(private request: RequestService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(res => {
      this.request.get(`/api/products/${res['id']}`)
      .then(responese => this.product = responese.product);
    });
  }

}
