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

      const startIdx = randomInt(0, m.length - CONFIG.quartersHistory - CONFIG.quartersPredict)
      const endIdx = startIdx + CONFIG.quartersHistory

      const priorQuarterDate = m[startIdx].date
      const startDate = addDays(priorQuarterDate, 1)
      const endDate = m[endIdx].date
      const endPredictDate = m[endIdx + CONFIG.quartersPredict].date

      const filteredMetrics = m.filter(sm => sm.date >= startDate && sm.date <= endPredictDate)
      const qm = convertQuarterMapping(m.map(sm => sm.date))

      Api.getHistory(s, startDate, endPredictDate).then(data => {
        const given = data.filter(d => d.date &&  d.date < endDate)
        const predictActual = data.filter(d => d.date && d.date >= endDate)
        const predictFake = createOpposite(predictActual)
        const correctIdx = Math.random() < 0.5 ? 0 : 1
        const predictChoices = correctIdx === 0 ? [predictActual, predictFake] : [predictFake, predictActual]

        setSymbol(s)
        setMetrics(filteredMetrics)
        setQuarterMapping(qm)
        setHistory(given)
        setPredict(predictChoices)
        setCorrectAnswer(correctIdx)
        Api.getProfile(s).then(p => setProfile(p))
        setPlayable(true)
      })
    })
  }

  useEffect(() => {
    loadAll()
    }, [])

  const checkResult = (answer: 0 | 1) => {
    const correct = answer === correctAnswer
    if (correct) {
  