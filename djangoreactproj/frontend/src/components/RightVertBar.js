import React from "react";
import "./../RightVertBar.css";
import { rightBarTotals } from './RibHeatGrid';

function BarGroup(props) {
    let barPadding = 2
    let barColour = 'red'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label_r" x={-width+ 20} y={-yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }
  
  class BarChart extends React.Component {
    state = {
      data: [
        { value: rightBarTotals.rightbar12},
        {  value: rightBarTotals.rightbar11},
        {  value: rightBarTotals.rightbar10},
        {  value: rightBarTotals.rightbar9},
        {  value: rightBarTotals.rightbar8},
        { value: rightBarTotals.rightbar7},
        { value: rightBarTotals.rightbar6},
        {  value: rightBarTotals.rightbar5},
        {  value: rightBarTotals.rightbar4},
        {  value: rightBarTotals.rightbar3},
        {  value: rightBarTotals.rightbar2},
        { value: rightBarTotals.rightbar1}
      ]
    }
  
    render() {
      let barHeight =46
          
      let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="400" height="700" >
        <g className="container">

          <g className="chart" transform="translate(30,100)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
  
export default BarChart;
