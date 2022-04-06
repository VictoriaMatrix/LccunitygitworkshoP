
import React from "react"
import { Table } from "react-bootstrap"
import { StockMetric } from "src/Response"
import { getQuarter } from "../utils"

interface StockMetricsTableProps {
  metrics: StockMetric[]
  metricKeys: Array<{
    accessor: (m: StockMetric) => number,
    colName: string,
  }>
  quarterMapping: Map<Date, string>
}

const StockMetricsTable: React.F