import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getProducts() {
    return this._http.get(`/api/products`);
  }

  getProduct(id) {
    return this._http.get(`/api/viewProduct/${id}`);
  }

  createProduct(newProduct){
    return this._http.post(`/api/addProduct`, newProduct);
  }

  editProduct(id, edits){
    return this._http.put(`/api/product/${id}`, edits);
  }

  deleteProduct(id){
    return this._http.delete(`/api/product/${id}`);
  }

}
