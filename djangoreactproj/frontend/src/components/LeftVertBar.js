import React from "react";
import "./../LeftVertBar.css";

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
        { value: d["lplrib1"] + d["lalrib1"] + d["lprib1"] },
        { value: d["lprib2"] + d["lplrib2"] + d["lalrib2"] + d["larib2"] },
        { value: d["lprib3"] + d["lplrib3"] + d["lalrib3"] + d["larib3"] },
        { value: d["lprib4"] + d["lplrib4"] + d["lalrib4"] + d["larib4"] },
        { value: d["lprib5"] + d["lplrib5"] + d["lalrib5"] + d["larib5"] },
        { value: d["lprib6"] + d["lplrib6"] + d["lalrib6"] + d["larib6"] },
        { value: d["lprib7"] + d["lplrib7"] + d["lalrib7"] + d["larib7"] },
        { value: d["lprib8"] + d["lplrib8"] + d["lalrib8"] + d["larib8"] },
        { value: d["lprib9"] + d["lplrib9"] + d["lalrib9"] + d["larib9"] },
        { value: d["lprib10"] + d["lplrib10"] + d["lalrib10"] + d["larib10"] },
        { value: d["lplrib11"] + d["lalrib11"] + d["lprib11"] },
        { value: d["lplrib12"] + d["lalrib12"] + d["lprib12"] },
      ];
          
      let barGroups = data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
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
