import React from 'react';
import ReactDOM from 'react-dom';
import BarChartExample from './components/BarChart';
import Pie from './components/PieChart';
import Scatter from './components/ScatterPlot';
import ZoomBar from './components/Bar_Zoom';
var d3 = require('d3');


ReactDOM.render(
  <div id="REACT">
  <BarChartExample />
  <Pie />
  <Scatter />
  <ZoomBar />
  </div>
  ,document.getElementById('app')
)
