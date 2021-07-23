import React, { useEffect, useState } from "react"
import { Button, ButtonToolbar, Card, Container, Jumbotron } from "react-bootstrap"
import { Api } from "./api"
import "./App.css"
import "./bootstrap.min.css"
import { Colors } from "./Colors"
import { Header } from "./components/Header"
import StockChart from "./components/StockChart"
import StockMetricsTable from "./components/StockMetricsTable"
import { CONFIG } from "./Config"
import { StockHistory, StockMetric, StockProfile } from "./Response"
import { sp500 } from "./sp500"
import "./style.css"
import { addDays, choose, convertQuarterMapping, createOpposite, randomInt } from "./utils"

const App: React.FC = () => {
  const [profile, setProfile] = useState<StockProfile>()
  const [history, setHistory] = useState<StockHistory[]>()
  const [predict, setPredict] = useState<StockHistory[][]>()
  const [metrics, setMetrics] = useState<StockMetric[]>()
  const [quarterMapping, setQuarterMapping] = useState<Map<Date, string>>()
  const [symbol, setSymbol] = useState<string>()
  const [correctAnswer, setCorrectAnswer] = useState<0|1>()
  const [numCorrect, setNumCorrect] = useState<number>(0)
  const [numIncorrect, setNumIncorrect] = useState<number>(0)
  const [playable, setPlayable] = useState<boolean>(true)
  const [messageResult, setMessageResult] = useState<string>("")

  const loadAll = () => {
    const s = choose(sp500)

    Api.getMetrics(s).then(m => {
      if (m === undefined) { throw Error(`unable to get metrics for ${symbol}`) }
      if (m.length < CONFIG.quartersHistory + CONFIG.quartersPredict) {
        return loadAll()
      }

      const startIdx = randomInt(0, m.length - CONFIG.quartersHistory - CONFIG.quartersPre