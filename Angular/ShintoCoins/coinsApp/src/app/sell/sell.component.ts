import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  amount: number;
  balance: number;
  value: number;
  message = "";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.balance = this._httpService.getBalance();
    this.value = this._httpService.getValue();
  }

  sellShintoCoin() {
    if (this.balance > this.amount && this.amount > 0) {
      console.log("received a proper number", this.amount);
      this._httpService.selling(this.amount);
      this.balance = this._httpService.getBalance();
      this.value = this._httpService.getValue();
      this.message = "Congratulations Ninja! You sold ShintoCoins!"
      this.amount;
    }
    else {
      console.log("received a else number", this.amount);
      this.message = "Now, now- that amount doesn't work!"
    }
  }
}
