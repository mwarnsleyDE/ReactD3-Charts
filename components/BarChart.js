import React from 'react';
import { Component } from 'react';

var d3 = require('d3');
var Chart = require('react-d3-core').Chart;
var BarChart = require('react-d3-basic').BarChart;

class BarChartExample extends Component {
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

    var width = 960,
      height = 500,
      margins = {top: 50, right: 50, bottom: 50, left: 50},
      id = "test-chart",
      title = "Bar Chart",
      svgClassName = "test-chart-class",
      titleClassName = "test-chart-title-class",
      legendClassName = "test-legend",
      legendPosition = "right",
      showLegend = true,
      showXAxis = true,
      showYAxis = true,
      chartSeries = [
        {
          field: 'frequency',
          name: 'Frequency'
        }
      ],
      x = function(d) {
        return d.letter;
      },
      xOrient = 'bottom',
      xTickOrient = 'bottom',
      xDomain = generalChartData.map(function(d) { return d.letter; }),
      xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
      xScale = 'ordinal',
      xAxisClassName = 'x-axis',
      xLabel = "Letter",
      xLabelPosition = 'bottom',
      y = function(d) {
        return +d;
      },
      yOrient = 'left',
      yTickOrient = 'right',
      yRange = [height - margins.top - margins.bottom, 0],
      yDomain = [0, +d3.max(generalChartData, function(d) { return d.frequency; })],
      yScale = 'linear',
      yAxisClassName = 'y-axis',
      yLabel = "Frequency",
      yTicks = [10, "%"],
      yLabelPosition = 'left';

    return(
        <Chart
          title={title}
          id={id}
          width={width}
          height={height}
          >
          <BarChart
            title= {title}
            data= {generalChartData}
            width= {width}
            height= {height}
            id= {id}
            margins= {margins}
            svgClassName= {svgClassName}
            titleClassName= {titleClassName}
            yAxisClassName= {yAxisClassName}
            xAxisClassName= {xAxisClassName}
            legendClassName= {legendClassName}
            legendPosition= {legendPosition}
            categoricalColors= {d3.scale.category10()}
            chartSeries = {chartSeries}
            showLegend= {showLegend}
            showXAxis= {showXAxis}
            showYAxis= {showYAxis}
            x= {x}
            xDomain= {xDomain}
            xRangeRoundBands= {xRangeRoundBands}
            xScale= {xScale}
            xOrient= {xOrient}
            xTickOrient= {xTickOrient}
            xLabel = {xLabel}
            y= {y}
            yOrient= {yOrient}
            yRange= {yRange}
            yDomain= {yDomain}
            yScale= {yScale}
            yTickOrient= {yTickOrient}
            yTicks= {yTicks}
            yLabel = {yLabel}
            yLabelPosition = {yLabelPosition}
          />
        </Chart>
    );
  }
}

export default BarChartExample;
