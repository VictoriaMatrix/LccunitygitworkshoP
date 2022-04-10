
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

const StockMetricsTable: React.FC<StockMetricsTableProps> = (props) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Metric</th>
              {props.metrics.map(q =>
                <th key={`header-${q.date.toDateString()}`}>{getQuarter(q.date, props.quarterMapping)}</th>,
      