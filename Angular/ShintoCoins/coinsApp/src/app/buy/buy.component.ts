import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  amount: number;
  balance: number;
  value: number;
  message = "";
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.balance = this._httpService.getBalance();
    this.value = this._httpService.getValue();
  }

  buyShintoCoin() {
    
    if (this.balance > this.amount && this.amount > 0) {
      console.log("received a proper number", this.amount);
      this._httpService.buying(this.amount);
      this.balance = this._httpService.getBalance();
      this.value = this._httpService.getValue();
      this.message = "Congratulations Ninja! You purchased ShintoCoins!"
      this.amount;
    }
    else if (this.balance < this.amount){
      console.log("received a elseIf number", this.amount);
      this.message = "You don't have enough. Please select a proper amount."
    }
    else {
      console.log("received a else number", this.amount);
      this.message = "Now, now- let's play by the rules!"
    }
  }
}
