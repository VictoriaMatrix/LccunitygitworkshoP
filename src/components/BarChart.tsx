import React, { useEffect } from 'react'
import * as d3 from 'd3'

const BarChart: React.FC = () => {
    const canvas = React.createRef<HTMLDivElement>()
    const data = [2,4,2,6,8]

    useEffect(() => {
   