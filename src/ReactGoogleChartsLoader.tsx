import * as React from "react"
// @ts-ignore
import { default as Script } from "react-load-script"

interface Props {
  chartLanguage?: string
  mapsApiKey?: string
  onLoad: (g: typeof google) => void
  onError: () => void
}

export class GoogleChartLoader extends React.Componen