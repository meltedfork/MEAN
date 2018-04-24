import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  this.getPokemon();
  }
  getPokemon(){
      let mystery = this._http.get('https://pokeapi.co/api/v2/pokemon/171/');
      mystery.subscribe(data => console.log("Got my pokemon!", data["name"], data["abilities"][0]["ability"]["name"]));
  }
}
