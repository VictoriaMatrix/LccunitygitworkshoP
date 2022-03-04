import _ from "lodash"
import React, { Fragment, useEffect, useState } from "react"
import { GoogleChartLoader } from "../../ReactGoogleChartsLoader"
import { StockHistory } from "../../Response"
import { StockChartProps, StockNode } from "../../types"
import { getQuarter } from "../../u