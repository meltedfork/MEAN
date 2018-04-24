import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {           
  tasks = [];
  oneTask = [];
  title = "Suzanne loves MEAN";
  newTask: any;
  // editTask = [];
  
  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.newTask = {title: "", description: ""};
    
  //   this.getTasksFromService();
  // }
  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log("Got the tasks!", data) // data = {message: "Success", data: Array(2)}
  //     this.tasks = data["data"];
  //   });
  // }
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("this is info from addTask: ", data),
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" }
    })
  }

  getAllTasks(){
    let allTasks = this._httpService.getTasks();
    allTasks.subscribe(data => { 
      console.log("******* getAllTasks: ", data)
       this.tasks = data["data"];
    });
  }

  getOneTask(id){
    console.log("getonetask id: ", id)
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("this is info from getOneTask: ", data)
      this.oneTask = data["data"];
    })
  }

  showEditForm(id){
    console.log("this is info from showEditForm: ", id)
    // this.editTaskForm = data["data"];
  }

  submitEdits(id, param){
    console.log("******* submitEdits route in app.comp", id,param);
    let observable = this._httpService.editTask(id, param);
    observable.subscribe(newdata => {
      console.log("****got to subscribe in submitEdits app.ts", newdata)
      // this.editTask = newdata["data"];
    })
  }

  deleteTask(id){
    console.log("***** deleteTask id: ", id);
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("****got to subscribe in deleteTask app.ts", data)
    })
  }
}