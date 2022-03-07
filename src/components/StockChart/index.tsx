import _ from "lodash"
import React, { Fragment, useEffect, useState } from "react"
import { GoogleChartLoader } from "../../ReactGoogleChartsLoader"
import { StockHistory } from "../../Response"
import { StockChartProps, StockNode } from "../../types"
import { getQuarter } from "../../utils"
import { getChartData, getChartOptions } from "./utils"

const StockChart: React.FC<StockChartProps> = (props) => {

  const [g, setG] = useState<typeof google>()

  // TODO: chart ref.current is always null
  const chartRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    draw()
  }, [g, props.predict])

  const convertHistory = (history: StockHistory[]): StockNode[] =>
    history.map(h => ({
      close: h.close,
      date: h.date,
  