
import React from "react"
import { Table } from "react-bootstrap"
import { StockMetric } from "src/Response"
import { getQuarter } from "../utils"

interface StockMetricsTableProps {
  metrics: StockMetric[]
  metricKeys: Ar