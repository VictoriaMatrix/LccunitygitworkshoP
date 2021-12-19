import {Secret} from "./secret"
import {convertDate} from "./utils"

export const URLS = {
    history: (stock: string, from: Date, to: Date) => `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?from=${convertDate(from)