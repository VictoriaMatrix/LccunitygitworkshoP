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
      `https://financialmodelingp