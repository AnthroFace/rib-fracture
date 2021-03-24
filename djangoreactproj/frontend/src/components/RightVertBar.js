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
  state = {
    data: [
      // { value: rightBarTotals.rightbar12},
      // {  value: rightBarTotals.rightbar11},
      // {  value: rightBarTotals.rightbar10},
      // {  value: rightBarTotals.rightbar9},
      // {  value: rightBarTotals.rightbar8},
      // { value: rightBarTotals.rightbar7},
      // { value: rightBarTotals.rightbar6},
      // {  value: rightBarTotals.rightbar5},
      // {  value: rightBarTotals.rightbar4},
      // {  value: rightBarTotals.rightbar3},
      // {  value: rightBarTotals.rightbar2},
      // { value: rightBarTotals.rightbar1}
    ],
  };

  // DOES NOT WORK
  componentDidMount() {
    var d = this.props.rib_count;
    // console.log(this.props.location.state);
    console.log("rightvertbar", d);
    // var rightBarTotals = {
    //   rightbar1: d["rplrib1"] + d["ralrib1"] + d["rarib1"],
    //   rightbar2: d["rprib2"] + d["rplrib2"] + d["ralrib2+rarib2"],
    //   rightbar3: d["rprib3"] + d["rplrib3"] + d["ralrib3+rarib3"],
    //   rightbar4: d["rprib4"] + d["rplrib4"] + d["ralrib4+rarib4"],
    //   rightbar5: d["rprib5"] + d["rplrib5"] + d["ralrib5"] + d["rarib5"],
    //   rightbar6: d["rprib6"] + d["rplrib6"] + d["ralrib6"] + d["rarib6"],
    //   rightbar7: d["rprib7"] + d["rplrib7"] + d["ralrib7"] + d["rarib7"],
    //   rightbar8: d["rprib8"] + d["rplrib8"] + d["ralrib8"] + d["rarib8"],
    //   rightbar9: d["rprib9"] + d["rplrib9"] + d["ralrib9"] + d["rarib9"],
    //   rightbar10: d["rprib10"] + d["rplrib10"] + d["ralrib10"] + d["rarib10"],
    //   rightbar11: d["rplrib11"] + d["ralrib11"] + d["rarib11"],
    //   rightbar12: d["rplrib12"] + d["ralrib12"] + d["rarib12"],
    // };

    this.setState({
      data: [
        { value: rightBarTotals.rightbar12 },
        { value: rightBarTotals.rightbar11 },
        { value: rightBarTotals.rightbar10 },
        { value: rightBarTotals.rightbar9 },
        { value: rightBarTotals.rightbar8 },
        { value: rightBarTotals.rightbar7 },
        { value: rightBarTotals.rightbar6 },
        { value: rightBarTotals.rightbar5 },
        { value: rightBarTotals.rightbar4 },
        { value: rightBarTotals.rightbar3 },
        { value: rightBarTotals.rightbar2 },
        { value: rightBarTotals.rightbar1 },
      ],
    });
  }
  render() {
    let barHeight = 46;

    let barGroups = this.state.data.map((d, i) => (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    ));

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
