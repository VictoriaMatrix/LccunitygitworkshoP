import {Secret} from "./secret"
import {convertDate} from "./utils"

export const URLS = {
    history: (stock: string, from: Date, to: Date) => `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?from=${convertDate(from)}&to=${convertDate(to)}`,
    metrics: (stock: string) => `https://financialmodelingprep.com/api/v3/company-key-metrics/${stock}?period=quarter