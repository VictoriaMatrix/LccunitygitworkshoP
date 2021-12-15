

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