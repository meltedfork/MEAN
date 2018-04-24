import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  guess: number;
  message = "";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {}

  mineShintoCoin(): void {
    console.log("received a guess: ", this.guess)
    if (this.guess == 13) {
      this._httpService.mining();
      this.message = "Congratulations Ninja! You earned a ShintoCoin!"
    }
    else {
      this.message = "Interesting choice. Try again!"
    }
  }


}
