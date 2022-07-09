
interface StockNode {
    quarter: string
    time: number
    date: Date | null
    close: number
  }
  
  interface StockChartProps {
    history: StockHistory[],
    predict: StockHistory[][],
    quarterMapping: 