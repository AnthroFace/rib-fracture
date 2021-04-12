import React from "react";
import "./../LeftHorBar.css";

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
  
    render() {
      let barHeight =46

      var d = this.props.rib_count;

      var data = [
        { value:  d['larib2'] + d['larib3'] + d['larib4'] + d['larib5'] + d['larib6'] + d['larib7'] + d['larib8'] + d['larib9'] + d['larib10'] },
        { value: d['lalrib1'] + d['lalrib2'] + d['lalrib3'] + d['lalrib4'] + d['lalrib5'] + d['lalrib6'] + d['lalrib7'] + d['lalrib8'] + d['lalrib9'] + d['lalrib10']+ d['lalrib11'] + d['lalrib12'] },
        { value: d['lplrib1'] +d['lplrib2'] + d['lplrib3'] + d['lplrib4'] + d['lplrib5'] + d['lplrib6'] + d['lplrib7'] + d['lplrib8'] + d['lplrib9'] + d['lplrib10'] + d['lplrib11'] + d['lplrib12'] },
        { value: d['lprib2'] + d['lprib3'] + d['lprib4'] + d['lprib5'] + d['lprib6'] + d['lprib7'] + d['lprib8'] + d['lprib9'] + d['lprib10'] },
      ];
          
      let barGroups = data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
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