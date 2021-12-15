

export interface StockData extends StockProfileResponse, StockHistoricalResponse {}

export interface StockHistoricalResponse {
  symbol: string
  historical: Array<{
    quarter: string
    date: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    unadjustedVolume: number,
    change: number,
    changePercent: number
    vwap: number
    label: string,
    changeOverTime: number,
  }>
}

export interface StockHistory {
  quarter: string
  date: Date | null,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  unadjustedVolume: number,
  change: number,
  changePercent: number
  vwap: number
  label: string,
  changeOverTime: number
}

export interface StockProfileResponse {
  symbol: string,
  profile: StockProfile
}

export interface StockProfile {
  price: number,
  beta: number,
  volAvg: number,
  mktCap: number,
  lastDiv: number,
  range: string,
  changes: number,
  changesPercentage: string,
  companyName: string,
  exchange: string,
  industry: string,
  website: string,
  description: string,
  ceo: string,
  sector: string,
  image: string
}

export interface StockMetric {
  "date": Date,
  "Revenue per Share": number,
  "Net Income per Share": number,
  "Operating Cash Flow per Share": number,
  "Free Cash Flow per Share": number,
  "Cash per Share": number,
  "Book Value per Share": number,
  "Tangible Book Value per Share": number,
  "Shareholders Equity per Share": number,
  "Interest Debt per Share": number,
  "Market Cap": number,
  "Enterprise Value": number,
  "PE ratio": number,
  "Price to Sales Ratio": number,
  "POCF ratio": number,
  "PFCF ratio": number,
  "PB ratio": number,
  "PTB ratio": number,
  "EV to Sales": number,
  "Enterprise Value over EBITDA": number,
  "EV to Operating cash flow": number,
  "EV to Free cash flow": number,
  "Earnings Yield": number,
  "Free Cash Flow Yield": number,
  "Debt to Equity": number,
  "Debt to Assets": number,
  "Net Debt to EBITDA": number,
  "Current ratio": number,
  "Interest Coverage": number,
  "Income Quality": number,
  "Dividend Yield": number,
  "Payout Ratio": number,
  "SG&A to Revenue": number,
  "R&D to Revenue": number,
  "Intangibles to Total Assets": number,