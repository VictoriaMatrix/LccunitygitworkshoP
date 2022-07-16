
import { timeParse } from "d3-time-format"
import _ from "lodash"
import { StockHistory } from "./Response"

export const fromEntries = (arr: Array<[string, any]>): object =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ))

export const convertNumeric = (obj: { [s: string]: any }) =>
  fromEntries(Object.entries(obj).map(([k, v]) => ([k, isNaN(Number(v)) ? v : Number(v)])))

export const choose = <T>(choices: T[]): T => {
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

export const randomInt = (from: number, to: number): number => Math.floor(Math.random() * (to - from) + from)

export const addDays = (date: Date, numberOfDays: number): Date => {
  const newDate = new Date(date.getTime())
  newDate.setDate(date.getDate() + numberOfDays)
  return newDate
}

export const partition = <T>(arr: T[], cmp: (item: T) => boolean): [T[], T[]] => {
  const initialState: [T[], T[]] = [[], []]
  return arr
    .reduce((result, element) => {
      result[cmp(element) ? 0 : 1].push(element)
      return result
    },      initialState)
}

export const unique = <T>(arr: T[]): T[] => {
  const seen = new Set()
  return arr.filter(item => {
      return seen.has(item) ? false : seen.add(item)
  })
}

export const diff = (arr: number[]): number[] => {
  if (arr.length < 2) { return [0] }

  const diffs: number[] = []
  let prior = arr[0]
  arr.slice(1).forEach(cur => {
      const d = prior - cur
      prior = cur
      diffs.push(d)
  })
  return diffs
}

export const createOpposite = (original: StockHistory[]): StockHistory[] => {
  const fake = _.cloneDeep(original).sort(
    (a, b) => a.date == null ? 1 : b.date == null ? -1 : a.date.getTime() - b.date.getTime())
  const deltas = diff(fake.map(p => p.close))
  let cur = fake ? fake[0].close : 0
  deltas.forEach( (d, idx) => {
    cur += d
    fake[idx + 1].close = cur
  })
  return fake
}

export const getQuarter = (date: Date, quarterMapping: Map<Date, string>): string => {