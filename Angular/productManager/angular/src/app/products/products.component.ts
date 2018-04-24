import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products = [];

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    console.log("Products returned from db");
    var observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.products = data['products']
      console.log("Products", this.products)
    });
  }

  deleteProduct(id): void{
    console.log("delete product in front end", id);
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log('delete frontend part 2')
      this.getProducts();
    });
  }
}
