import * as React from "react"
// @ts-ignore
import { default as Script } from "react-load-script"

interface Props {
  chartLanguage?: string
  mapsApiKey?: string
  onLoad: (g: typeof google) => void
  onError: () => void
}

export class GoogleChartLoader extends React.Component<Props> {
  public render() {
    const { onError } = this.props
    return (
      <Script
        url="https://www.gstatic.com/charts/loader.js"
        onError={onError}
        onLoad={() => {
          if (window && window.google) {
            this.handleGoogleChartsLoaderScriptLoa