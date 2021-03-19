import React from "react";
import "./../RightHorBar.css";
import { bottomRightBarTotals } from "./RibHeatGrid";

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
  /*
  class BarChart extends React.Component {
    state = {
      data: [
        { value: 1},
        {  value: 2},
        {  value: 3 },
        {  value: 4},
      ]
    }
*/
  class BarChart extends React.Component {
    state = {
      data: [
        // { value: bottomRightBarTotals.bottomright1},
        // {  value: bottomRightBarTotals.bottomright2 },
        // {  value: bottomRightBarTotals.bottomright3 },
        // {  value: bottomRightBarTotals.bottomright4},
      ]
    }

    componentDidMount () {
      var d = this.props.rib_count;
      console.log("YOYOYO", d);
      var bottomRightBarTotals ={
        bottomright1: d['rarib1']+d['rarib2']+d['rarib3']+d['rarib4']+d['rarib5']+d['rarib6']+d['rarib7']+d['rarib8']+d['rarib9']+d['rarib10']+d['rarib11']+d['rarib12'],
        bottomright2: d['ralrib1']+d['ralrib2']+d['ralrib3']+d['ralrib4']+d['ralrib5']+d['ralrib6']+d['ralrib7']+d['ralrib8']+d['ralrib9']+d['ralrib10']+d['ralrib11']+d['ralrib12'],
        bottomright3: d['rplrib1']+d['rplrib2']+d['rplrib3']+d['rplrib4']+d['rplrib5']+d['rplrib6']+d['rplrib7']+d['rplrib8']+d['rplrib9']+d['rplrib10']+d['rplrib11']+d['rplrib12'],
        bottomright4: d['rprib2']+d['rprib3']+d['rprib4']+d['rprib5']+d['rprib6']+d['rprib7']+d['rprib8']+d['rprib9']+d['rprib10'],
      };
      
      this.setState({ data: [
        { value: bottomRightBarTotals.bottomright1},
        {  value: bottomRightBarTotals.bottomright2 },
        {  value: bottomRightBarTotals.bottomright3 },
        {  value: bottomRightBarTotals.bottomright4},
      ]
      });
    }  
    
    render() {
      
      let barHeight =46;
          
      let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="900" height="500" >
        <g className="container">

          <g className="chart" transform="translate(50,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
  
export default BarChart;