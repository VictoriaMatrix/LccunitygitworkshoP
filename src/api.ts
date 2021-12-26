import rp from "request-promise"
import { StockHistoricalResponse,
  StockHistory,
  StockList,
  StockMetric,
  StockMetricsResponse,
  StockProfile,
  StockProfileResponse,
} from "./Response"
import { convertDate, conve