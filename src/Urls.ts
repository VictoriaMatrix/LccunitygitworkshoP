import {Secret} from "./secret"
import {convertDate} from "./utils"

export const URLS = {
    history: (stock: string, from: Date, to: Date) => `https://financialmodelingprep.c