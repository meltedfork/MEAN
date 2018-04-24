import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));

    // send component data
    return this._http.get('/tasks');
  }
  getOneTask(id) {
  //   let oneObservable = this._http.get('/tasks/:id');
  //   oneObservable.subscribe(data => console.log("Got one task!", data));
  // 
    return this._http.get('/task/' + id);
  }
  addTask(newTask){
    return this._http.post('/task', newTask)
  }
  editTask(id, param){
    console.log("*****editTask in service route", id, param)
    return this._http.put('/task/' + id, param)
  }
  deleteTask(id){
    return this._http.delete('/task/' + id)
  }
}
