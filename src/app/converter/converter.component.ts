import {Component, Input} from '@angular/core';
import {ICurrencyData} from "../../models/ICurrencyData";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent {
  @Input() currencyData: ICurrencyData = {
    quotes: {
      UAHEUR: 0,
      UAHUSD: 0
    },
    source: '',
    success: false,
    timestamp: 0
  }
  inputCurrencyUSD = 0;
  inputCurrencyEUR = 0;
  choiceUSD = ''
  choiceEUR = ''
  setChoiceEUR(event:any) {
    this.choiceEUR = event.target.value
  }
  setChoiceUSD(event:any) {
    this.choiceUSD = event.target.value
  }
  setCurrencyUSD(event:any) {
    this.inputCurrencyUSD = event.target.value
  }
  setCurrencyEUR(event:any) {
    this.inputCurrencyEUR = event.target.value
  }
  getQuotes() {
    return this.currencyData.quotes
  }
  currencyConverter(inputCurrency:number,  choice:string) {
    const USDtoUAH = this.getQuotes().UAHUSD
    const EURtoUAH = this.getQuotes().UAHEUR
    switch (choice) {
      case 'UAH to EUR': {
        return inputCurrency * EURtoUAH
      }
      case 'EUR to UAH': {
        return inputCurrency/EURtoUAH
      }
      case 'UAH to USD': {
        return inputCurrency * USDtoUAH
      }
      case 'USD to UAH': {
        return inputCurrency/USDtoUAH
      }
    }
    return 'Choose currency'
  }
}
