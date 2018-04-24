import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledger = [];
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.ledger = this._httpService.getLedger();
  }

}
