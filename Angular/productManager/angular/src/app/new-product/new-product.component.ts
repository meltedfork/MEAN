import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct = {
    title: "", 
    price: Number, 
    image: "" 
  };
  errors;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  addProduct(): void{
    console.log("Added a Product in FrontEnd", this.newProduct)
    var observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      if(data['message'] == 'Success'){
      console.log("***** frontend addProduct:", this.newProduct);
      this.newProduct = {title: "", price: Number, image: "" }
      this._router.navigate(['/products']);
      }
      else{
        console.log("errors in the add product method: frontend")
      }
    })
  }
}
