// Current_price is same as LTP (Last Traded Price)
// ABP stands for Average Buy Price

var portfolio = [
  {
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

var hdfc_stock_data = {
  "stock": {
    "stock_price": "1,626",
    "growth_history": [
      {
        "growth": 0.5,
        "label": "1 Day"
      },
      {
        "growth": 4.1,
        "label": "1 Week"
      },
      {
        "growth": 4.7,
        "label": "1 Mo"
      },
      {
        "growth": 38.5,
        "label": "1 Yr"
      },
      {
        "growth": 27.6,
        "label": "5 Yr"
      },
      {
        "growth": 22.5,
        "label": "10 Yr"
      }
    ],
    "short_name": "HDFC Bank",
    "industry_name": "Bank - Private",
    "current_price": "1,626",
    "yearly_growth": 17.3,
    "symbol": "HDFCBANK",
    "industry": "Financials > Bank - Private",
    "graphs": {
      "stock_price": {
        "values": [
          null, null, null, 189.959795109746, 197.71928584431, 219.970607249454, 307.678835624819, 281.625310309537, 249.119276388136, 227.100294661012, 188.794277595195, 169.215123451412, 258.013509416648, 276.27126381467, 322.691660573649, 323.487845020358, 367.61921149505, 405.780443764135, 447.07583943518, 409.987251223347, 448.565660818427, 461.007917141224, 437.402813351776, 488.791340421378, 509.46681790125, 572.204908113496, 626.12896425413, 635.592297266244, 659.238528347662, 617.448102158967, 647.100254100593, 654.104507275281, 776.032203654182, 825.764714228535, 911.757260470622, 1036.6605724851, 997.749806712709, 1065.40547367068, 1068.48023694246, 1021.91245126184, 1133.84375294572, 1247.825, 1220.8, 1318.15, 1626.0
        ]
      },
      "x_axis": {
        "values": [
          "Mar06", "Jun06", "Sep06", "Dec06", "Mar07", "Jun07", "Sep07", "Dec07", "Mar08", "Jun08", "Sep08", "Dec08", "Mar09", "Jun09", "Sep09", "Dec09", "Mar10", "Jun10", "Sep10", "Dec10", "Mar11", "Jun11", "Sep11", "Dec11", "Mar12", "Jun12", "Sep12", "Dec12", "Mar13", "Jun13", "Sep13", "Dec13", "Mar14", "Jun14", "Sep14", "Dec14", "Mar15", "Jun15", "Sep15", "Dec15", "Mar16", "Jun16", "Sep16", "Dec16", "Mar17"
        ]
      }
    }
  }
};
