import {Component, Input} from '@angular/core';
import {ICurrencyData} from "../../models/ICurrencyData";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() currencyData: ICurrencyData = {
    quotes: {
      UAHEUR: 0,
      UAHUSD: 0
    },
    source: '',
    success: false,
    timestamp: 0
  }
  getQuotes() {
    return this.currencyData.quotes
  }
}
