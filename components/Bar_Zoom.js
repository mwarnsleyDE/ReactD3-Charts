import React from 'react';
import { Component } from 'react';

var d3 = require('d3');
var BarZoom = require('react-d3-zoom').BarZoom;

class ZoomBar extends Component {
  constructor(){
    super();
  }
  render(){
    var generalChartData = [
  {
    "letter": "A",
    "frequency": 0.08167
  },
  {
    "letter": "B",
    "frequency": 0.01492
  },
  {
    "letter": "C",
    "frequency": 0.02782
  },
  {
    "letter": "D",
    "frequency": 0.04253
  },
  {
    "letter": "E",
    "frequency": 0.12702
  },
  {
    "letter": "F",
    "frequency": 0.02288
  },
  {
    "letter": "G",
    "frequency": 0.02015
  },
  {
    "letter": "H",
    "frequency": 0.06094
  },
  {
    "letter": "I",
    "frequency": 0.06966
  },
  {
    "letter": "J",
    "frequency": 0.00153
  },
  {
    "letter": "K",
    "frequency": 0.00772
  },
  {
    "letter": "L",
    "frequency": 0.04025
  },
  {
    "letter": "M",
    "frequency": 0.02406
  },
  {
    "letter": "N",
    "frequency": 0.06749
  },
  {
    "letter": "O",
    "frequency": 0.07507
  },
  {
    "letter": "P",
    "frequency": 0.01929
  },
  {
    "letter": "Q",
    "frequency": 0.00095
  },
  {
    "letter": "R",
    "frequency": 0.05987
  },
  {
    "letter": "S",
    "frequency": 0.06327
  },
  {
    "letter": "T",
    "frequency": 0.09056
  },
  {
    "letter": "U",
    "frequency": 0.02758
  },
  {
    "letter": "V",
    "frequency": 0.00978
  },
  {
    "letter": "W",
    "frequency": 0.0236
  },
  {
    "letter": "X",
    "frequency": 0.0015
  },
  {
    "letter": "Y",
    "frequency": 0.01974
  },
  {
    "letter": "Z",
    "frequency": 0.00074
  }
];

    var width = 700,
    height = 400,
    title = "Bar Chart with zoom",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    yTicks = [10, "%"];

    return(
        <BarZoom
        title={title}
        data={generalChartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
        yTicks={yTicks}
      />
    );
  }
}

export default ZoomBar;
