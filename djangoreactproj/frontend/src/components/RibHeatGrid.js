import React from "react";
import HeatMap from "react-heatmap-grid";
import { leftRibValues } from "./RightRibHeatGrid"; 

const xLabels = ["a", "al", "pl", "p"];
const yLabels = ["", "", "", "", "", "", "", "", "", "", "", ""];

  export default function(props) {
    var d = props.rib_count;
    // print("ribheatgrid")
    // console.log("ribheatgrid", d);
    // console.log("TYPE", typeof d);

    var data = [
      ["", d["ralrib1"], d["rplrib1"], d["rprib1"]],
      [d["rarib2"], d["ralrib2"], d["rplrib2"], d["rprib2"]],
      [d["rarib3"], d["ralrib3"], d["rplrib3"], d["rprib3"]],
      [d["rarib4"], d["ralrib4"], d["rplrib4"], d["rprib4"]],
      [d["rarib5"], d["ralrib5"], d["rplrib5"], d["rprib5"]],
      [d["rarib6"], d["ralrib6"], d["rplrib6"], d["rprib6"]],
      [d["rarib7"], d["ralrib7"], d["rplrib7"], d["rprib7"]],
      [d["rarib8"], d["ralrib8"], d["rplrib8"], d["rprib8"]],
      [d["rarib9"], d["ralrib9"], d["rplrib9"], d["rprib9"]],
      [d["rarib10"], d["ralrib10"], d["rplrib10"], d["rprib10"]],
      ["", d["ralrib11"], d["rplrib11"], d["rprib11"]],
      ["", d["ralrib12"], d["rplrib12"], d["rprib12"]],
    ];
    var nums = [
      d["rplrib1"],
      d["ralrib1"],
      d["rprib1"],
      d["rprib2"],
      d["rplrib2"],
      d["ralrib2"],
      d["rarib2"],
      d["rprib3"],
      d["rplrib3"],
      d["ralrib3"],
      d["rarib3"],
      d["rprib4"],
      d["rplrib4"],
      d["ralrib4"],
      d["rarib4"],
      d["rprib5"],
      d["rplrib5"],
      d["ralrib5"],
      d["rarib5"],
      d["rprib6"],
      d["rplrib6"],
      d["ralrib6"],
      d["rarib6"],
      d["rprib7"],
      d["rplrib7"],
      d["ralrib7"],
      d["rarib7"],
      d["rprib8"],
      d["rplrib8"],
      d["ralrib8"],
      d["rarib8"],
      d["rprib9"],
      d["rplrib9"],
      d["ralrib9"],
      d["rarib9"],
      d["rprib10"],
      d["rplrib10"],
      d["ralrib10"],
      d["rarib10"],
      d["rplrib11"],
      d["ralrib11"],
      d["rprib11"],
      d["rplrib12"],
      d["ralrib12"],
      d["rprib12"],
      //left rib variables
      d["lprib1"],
      d["lalrib1"],
      d["lplrib1"],
      d["larib2"],
      d["lalrib2"],
      d["lplrib2"],
      d["lprib2"],
      d["larib3"],
      d["lalrib3"],
      d["lplrib3"],
      d["lprib3"],
      d["larib4"],
      d["lalrib4"],
      d["lplrib4"],
      d["lprib4"],
      d["larib5"],
      d["lalrib5"],
      d["lplrib5"],
      d["lprib5"],
      d["larib6"],
      d["lalrib6"],
      d["lplrib6"],
      d["lprib6"],
      d["larib7"],
      d["lalrib7"],
      d["lplrib7"],
      d["lprib7"],
      d["larib8"],
      d["lalrib8"],
      d["lplrib8"],
      d["lprib8"],
      d["larib9"],
      d["lalrib9"],
      d["lplrib9"],
      d["lprib9"],
      d["larib10"],
      d["lalrib10"],
      d["lplrib10"],
      d["lprib10"],
      d["lprib11"],
      d["lalrib11"],
      d["lplrib11"],
      d["lprib12"],
      d["lalrib12"],
      d["lplrib12"],
    ];
    var maxValue = Math.max.apply(Math, nums);
    var minValue = Math.min.apply(Math, nums);

    
    // console.log("data", data)
    return (
      <div>
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          xLabelsLocation={"top"}
          // xLabelsVisibility={xLabelsVisibility}
          xLabelWidth={60}
          data={data}
          squares
          height={45}
          //onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
          cellStyle={(background, value, data, x, y) => ({
            background: `rgb(230, 40,0, ${1 - (maxValue - value) / (maxValue - minValue)})`,
            fontSize: "11.5px",
            color: "#000",
          })}
          //renders number
          cellRender={(value) => value && <div>{value}</div>}
        />
      </div>
    );
  }