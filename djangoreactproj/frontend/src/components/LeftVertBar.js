import React from "react";
import "./../LeftVertBar.css";

function BarGroup(props) {
    let barPadding = 2
    let barColour = 'red'
    let widthScale = (d) =>
      props.maxValue > 25
        ? ((250 - props.minValue) * (d - props.minValue)) / (props.maxValue - props.minValue) + props.minValue
        : d * 10;
  
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

      var nums = [
      //right vert totals
      d["rplrib12"] + d["ralrib12"] + d["rprib12"],
      d["rplrib11"] + d["ralrib11"] + d["rprib11"],
      d["rprib10"] + d["rplrib10"] + d["ralrib10"] + d["rprib10"],
      d["rprib9"] + d["rplrib9"] + d["ralrib9"] + d["rarib9"],
      d["rprib8"] + d["rplrib8"] + d["ralrib8"] + d["rarib8"],
      d["rprib7"] + d["rplrib7"] + d["ralrib7"] + d["rarib7"],
      d["rprib6"] + d["rplrib6"] + d["ralrib6"] + d["rarib6"],
      d["rprib5"] + d["rplrib5"] + d["ralrib5"] + d["rarib5"],
      d["rprib4"] + d["rplrib4"] + d["ralrib4"] + d["rarib4"],
      d["rprib3"] + d["rplrib3"] + d["ralrib3"] + d["rarib3"],
      d["rprib2"] + d["rplrib2"] + d["ralrib2"] + d["rarib2"],
      d["rplrib1"] + d["ralrib1"] + d["rprib1"],
      //left vert totals
      d["lplrib1"] + d["lalrib1"] + d["lprib1"],
      d["lprib2"] + d["lplrib2"] + d["lalrib2"] + d["larib2"],
      d["lprib3"] + d["lplrib3"] + d["lalrib3"] + d["larib3"],
      d["lprib4"] + d["lplrib4"] + d["lalrib4"] + d["larib4"],
      d["lprib5"] + d["lplrib5"] + d["lalrib5"] + d["larib5"],
      d["lprib6"] + d["lplrib6"] + d["lalrib6"] + d["larib6"],
      d["lprib7"] + d["lplrib7"] + d["lalrib7"] + d["larib7"],
      d["lprib8"] + d["lplrib8"] + d["lalrib8"] + d["larib8"],
      d["lprib9"] + d["lplrib9"] + d["lalrib9"] + d["larib9"],
      d["lprib10"] + d["lplrib10"] + d["lalrib10"] + d["larib10"],
      d["lplrib11"] + d["lalrib11"] + d["lprib11"],
      d["lplrib12"] + d["lalrib12"] + d["lprib12"],
      //right hor totals
      d['rprib1'] + d['rprib2'] + d['rprib3'] + d['rprib4'] + d['rprib5'] +d['rprib6'] + d['rprib7'] + d['rprib8'] + d['rprib9'] +d['rprib10'] + d['rprib11'] + d['rprib12'],
      d['rplrib1']+ d['rplrib2'] + d['rplrib3']+ d['rplrib4'] + d['rplrib5'] + d['rplrib6'] + d['rplrib7'] + d['rplrib8'] + d['rplrib9'] + d['rplrib10'] + d['rplrib11'] + d['rplrib12'],
      d['ralrib1'] + d['ralrib2'] + d['ralrib3'] + d['ralrib4'] + d['ralrib5'] + d['ralrib6'] + d['ralrib7']+ d['ralrib8'] + d['ralrib9'] + d['ralrib10'] + d['ralrib11'] +d['ralrib12'],
      d['rarib2'] + d['rarib3'] + d['rarib4'] + d['rarib5'] + d['rarib6'] +d['rarib7'] +d ['rarib8'] + d['rarib9'] + d['rarib10'],
      //left hor totals
      d['larib2'] + d['larib3'] + d['larib4'] + d['larib5'] + d['larib6'] + d['larib7'] + d['larib8'] + d['larib9'] + d['larib10'],
      d['lalrib1'] + d['lalrib2'] + d['lalrib3'] + d['lalrib4'] + d['lalrib5'] + d['lalrib6'] + d['lalrib7'] + d['lalrib8'] + d['lalrib9'] + d['lalrib10']+ d['lalrib11'] + d['lalrib12'],
      d['lplrib1'] +d['lplrib2'] + d['lplrib3'] + d['lplrib4'] + d['lplrib5'] + d['lplrib6'] + d['lplrib7'] + d['lplrib8'] + d['lplrib9'] + d['lplrib10'] + d['lplrib11'] + d['lplrib12'],
      d['lprib2'] + d['lprib3'] + d['lprib4'] + d['lprib5'] + d['lprib6'] + d['lprib7'] + d['lprib8'] + d['lprib9'] + d['lprib10']
    ];

    var maxValue = Math.max.apply(Math, nums);
    var minValue = Math.min.apply(Math, nums);
          
      let barGroups = data.map((d, i) => (
        <g transform={`translate(0, ${i * barHeight})`}>
          <BarGroup
            d={d}
            barHeight={barHeight}
            maxValue={maxValue}
            minValue={minValue}
          />
        </g>
      ));                         
      
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
