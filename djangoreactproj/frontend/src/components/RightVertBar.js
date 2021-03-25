import React from "react";
import "./../RightVertBar.css";
import { rightBarTotals } from "./RibHeatGrid";

function BarGroup(props) {
  let barPadding = 2;
  let barColour = "red";
  let widthScale = (d) => d * 10;

  let width = widthScale(props.d.value);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.d.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label_r"
        x={-width + 20}
        y={-yMid}
        alignmentBaseline="middle"
      >
        {props.d.value}
      </text>
    </g>
  );
}

class BarChart extends React.Component {
  render() {
    let barHeight = 46;

    var d = this.props.rib_count;

    var data = [
      { value: d["rplrib12"] + d["ralrib12"] + d["rprib12"] },
      { value: d["rplrib11"] + d["ralrib11"] + d["rprib11"] },
      { value: d["rprib10"] + d["rplrib10"] + d["ralrib10"] + d["rprib10"] },
      { value: d["rprib9"] + d["rplrib9"] + d["ralrib9"] + d["rarib9"] },
      { value: d["rprib8"] + d["rplrib8"] + d["ralrib8"] + d["rarib8"] },
      { value: d["rprib7"] + d["rplrib7"] + d["ralrib7"] + d["rarib7"] },
      { value: d["rprib6"] + d["rplrib6"] + d["ralrib6"] + d["rarib6"] },
      { value: d["rprib5"] + d["rplrib5"] + d["ralrib5"] + d["rarib5"] },
      { value: d["rprib4"] + d["rplrib4"] + d["ralrib4"] + d["rarib4"] },
      { value: d["rprib3"] + d["rplrib3"] + d["ralrib3"] + d["rarib3"] },
      { value: d["rprib2"] + d["rplrib2"] + d["ralrib2"] + d["rarib2"] },
      { value: d["rplrib1"] + d["ralrib1"] + d["rprib1"] },
    ];

    let barGroups = data.map((d, i) => (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    ));
    console.log("vertbar", this.props.rib_count);
    return (
      <svg width="400" height="700">
        <g className="container">
          <g className="chart" transform="translate(30,100)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }
}

export default BarChart;
