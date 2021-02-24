import React, { Component } from "react";
import "./../LeftVertBar.css";
import ReactDOM from 'react-dom';
import RightRibHeatGrid from './RightRibHeatGrid';
import { leftBarTotals } from './RightRibHeatGrid';

function BarGroup(props) {
    let barPadding = 2
    let barColour = 'red'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }
  
  class BarChart extends React.Component {
    state = {
      data: [
        { value: leftBarTotals.leftbar1},
        {  value: leftBarTotals.leftbar2},
        {  value: leftBarTotals.leftbar3},
        {  value: leftBarTotals.leftbar4},
        {  value: leftBarTotals.leftbar5},
        { value: leftBarTotals.leftbar6},
        { value: leftBarTotals.leftbar7},
        {  value: leftBarTotals.leftbar8},
        {  value: leftBarTotals.leftbar9},
        {  value: leftBarTotals.leftbar10},
        {  value: leftBarTotals.leftbar11},
        { value: leftBarTotals.leftbar12}
      ]
    }
  
    render() {
      let barHeight =46
          
      let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="400" height="650" >
        <g className="container">

          <g className="chart" transform="translate(50,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
  
export default BarChart;
