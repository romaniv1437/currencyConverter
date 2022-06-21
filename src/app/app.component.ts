import { Component } from '@angular/core';
import {ICurrencyData} from "../models/ICurrencyData";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currencyData: ICurrencyData = {
    "quotes": {
      "UAHEUR": 0,
      "UAHUSD": 0
    },
    "source": "currency",
    "success": false,
    "timestamp": 0
  }
  setCurrencyData() {
    let apiUrl = "https://api.apilayer.com/currency_data/live?source=UAH&currencies=USD%2C%20EUR";
    return this.httpClient.get<any>(apiUrl, {headers: {'apikey': 'wvUYEDQ5bdXRpXbwsEDNNi1DXgOrs1fd'}}).subscribe((response) => {
      console.log(response);
      this.currencyData = response;
    })
  }
  constructor(private httpClient: HttpClient) {
    this.setCurrencyData()
  }



}

