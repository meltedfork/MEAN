import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    ledger = [];
    balance = 0;
    value = 1;

    constructor(private _http: HttpClient) { }

    getValue() {
        return this.value;
    }
    getBalance() {
        return this.balance;
    }
    getLedger() {
        return this.ledger;
    }

    mining() {
        console.log("****** here at the mining method in service");
        var transaction = { action: "mine", amount: 1, value: this.value }
        console.log("****** transaction arrive??", transaction);
        this.ledger.push(transaction);
        console.log("***** transaction go through?? ", this.ledger);
        this.balance += 1;
        this.value = this.balance * 1;
    }

    buying(num) {
        console.log("****** here at the buy method", num);
        var transaction = { action: "bought", amount: num, value: this.value }
        console.log("****** transaction arrive??", transaction);
        this.ledger.push(transaction);
        console.log("***** transaction go through?? ", this.ledger);
        this.balance += num;
        this.value = this.balance * 1;
    }

    selling(num) {
        console.log("****** here at the sell method", num);
        var transaction = { action: "sold", amount: 1, value: this.value }
        console.log("****** transaction arrive??", transaction);
        this.ledger.push(transaction);
        console.log("***** transaction go through?? ", this.ledger);
        this.balance -= num;
        this.value = this.balance * 1;
    }
}
