import { flatten } from "lodash"
import { Colors } from "../../Colors"
import { StockNode } from "../../types"
import { seqArray, unique } from "../../utils"

export const getChartData = (g: typeof google, data: StockNode[], predict: StockNode[][]) => {
    const actualData = new g.visualization.DataTable()
    actualData.addColumn({type: "date", label: "Date"})
    actualData.addColumn({type: "number", label: "Historic"})
    data.forEach(n => actualData.addRow(n.date ? [n.date, n.close] : undefined))

    const predictDatas = predict.map((p, idx) => {
      const predictData = new g.visualization.DataTable()
      predictD