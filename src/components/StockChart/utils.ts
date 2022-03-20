import { flatten } from "lodash"
import { Colors } from "../../Colors"
import { StockNode } from "../../types"
import { seqArray, unique } from "../../utils"

export const getChartData = (g: typeof google, data: StockNode[], predict: StockNode[][]) => {
    const actualData = new g.visualization.Data