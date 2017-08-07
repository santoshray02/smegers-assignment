import { Component, OnInit } from '@angular/core';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  portfolio = [
  {
    "slug" : "1",
    "current_price": 1626.0,
    "ticker_symbol": "HDFCBANK.NS",
    "in_watchlist": true,
    "valuation": "fair",
    "symbol": "HDFCBANK",
    "returns_percentage": 29.777877102106267,
    "daily_percentage": 0.5,
    "count": 5,
    "marketcap": "Large Cap",
    "name": "HDFC Bank",
    "industry": "Financials",
    "avg_buy_price": 1252.9100000000003
  },
  {
    "slug" : "1",
    "current_price": 7064.8,
    "ticker_symbol": "MARUTI.NS",
    "in_watchlist": false,
    "valuation": "attractive",
    "symbol": "MARUTI",
    "returns_percentage": 14.961719023326577,
    "daily_percentage": 1.1,
    "count": 1,
    "marketcap": "Large Cap",
    "name": "Maruti Suzuki",
    "industry": "Automobiles",
    "avg_buy_price": 6145.35
   },
  {
    "slug" : "1",
    "current_price": 1091.15,
    "ticker_symbol": "EMAMILTD.NS",
    "in_watchlist": true,
    "valuation": "fair",
    "symbol": "EMAMILTD",
    "returns_percentage": 7.405463046509734,
    "daily_percentage": 0.1,
    "count": 6,
    "marketcap": "Large Cap",
    "name": "Emami",
    "industry": "FMCG",
    "avg_buy_price": 1015.9166666666666
  },
  {
    "slug" : "1",
    "current_price": 1493.6,
    "ticker_symbol": "YESBANK.NS",
    "in_watchlist": true,
    "valuation": "unattractive",
    "symbol": "YESBANK",
    "returns_percentage": 5.1942106560552,
    "daily_percentage": 2.0,
    "count": 4,
    "marketcap": "Large Cap",
    "name": "Yes Bank",
    "industry": "Financials",
    "avg_buy_price": 1419.8500000000001
  },
  {
    "slug" : "1",
    "current_price": 1477.7,
    "ticker_symbol": "INDUSINDBK.NS",
    "in_watchlist": false,
    "valuation": "fair",
    "symbol": "INDUSINDBK",
    "returns_percentage": 20.33265133701815,
    "daily_percentage": 1.1,
    "count": 4,
    "marketcap": "Large Cap",
    "name": "Indusind Bank",
    "industry": "Financials",
    "avg_buy_price": 1228.0125
  }
];

  public constructor() {
    
  }

  public ngOnInit():void {
    
  }
  private cssClass : string;
  getCSS(valuation){
    switch (name) {
      case "fair":
        this.cssClass =  "dot-yellow"
        break;
              case "fair":
        this.cssClass =  "dot-yellow"
        break;
      case "unattractive":
        this.cssClass =  "dot-blue"
        break;
      case "attractive":
        this.cssClass =  "dot-green"
        break;
      default:
        return "dot-red"
    }
  }
  
   
}
