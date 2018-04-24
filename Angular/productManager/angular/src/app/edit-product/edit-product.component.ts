import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  edits = {
    title: "",
    price: Number,
    image: "",
  }
  products = [];
  productid;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.productid = params.get('id');
      var observable = this._httpService.getProduct(this.productid);
      observable.subscribe(data => {
        this.edits = data['product']
        console.log("edit from front end ngoninit")
      })
      //data['product']: product is key from server.js
    })
  }

  editProduct(): void {
    let observable = this._httpService.editProduct(this.productid, this.edits);
    observable.subscribe(data => {
      console.log("edit", data);
      this._router.navigate(['/products']);
    })
  }

  deleteProduct(id): void {
    console.log("delete product in front end", id);
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log('delete frontend part 2')
      this._router.navigate(['/products']);
    });
  }
}
