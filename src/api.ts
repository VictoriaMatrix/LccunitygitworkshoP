import rp from "request-promise"
import { StockHistoricalResponse,
  StockHistory,
  StockList,
  StockMetric,
  StockMetricsResponse,
  StockProfile,
  StockProfileResponse,
} from "./Response"
import { convertDate, convertNumeric, parseDate } from "./utils"

const Urls = {
    history: (stock: string, from: Date, to: Date) =>
      `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?from=${convertDate(from)}&to=${convertDate(to)}&apikey=${process.env.REACT_APP_API_KEY}`,
    list: () =>
    `https://financialmodelingprep.com/api/v3/company/stock/list?apikey=${process.env.REACT_APP_API_KEY}`,
    metrics: (stock: string) =>
      `https://financialmodelingprep.com/api/v3/company-key-metrics/${stock}?period=quarter&apikey=${process.env.REACT_APP_API_KEY}`,
    // news: (stock: string, before: Date) =>
    // `https://newsapi.org/v2/everything?q=${stock}&from=${before}&apiKey=${Secret.REACT_APP_NEWS_API_KEY}`,
    newsRaw: (stock: string, before: Date) =>
    `https://news.google.com/search?q=${stock}+before:${convertDate(before)}&hl=en-US&gl=US&ceid=US:en`,
    prof