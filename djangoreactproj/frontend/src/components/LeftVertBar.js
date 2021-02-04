import React, { Component } from "react";
import "./../LeftVertBar.css";
import ReactDOM from 'react-dom';

function BarGroup(props) {
    let barPadding = 2
    let barColour = 'red'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * -0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }
  
  class BarChart extends React.Component {
    state = {
      data: [
        { value: 5},
        {  value: 4 },
        {  value: 3 },
        {  value: 9 },
        {  value: 5 },
        { value: 2 },
        { value: 7 },
        {  value: 4 },
        {  value: 3 },
        {  value: 9 },
        {  value: 5 },
        { value: -2 }
      ]
    }
  
    render() {
      let barHeight =46
          
      let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="800" height="1000" >
        <g className="container">

          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
  
export default BarChart;
