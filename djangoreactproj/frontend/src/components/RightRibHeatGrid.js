import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ["a", "al", "pl", "p"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
const yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

//const right_xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];

//const right_yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

/* ["",lprib1, lalrib1, larib1 ],
[lprib2, lplrib2, lalrib2, larib2],
[lprib3, lplrib3, lalrib3, larib3],
[lprib4, lplrib4, lalrib4, larib4],
[lprib5, lplrib5, lalrib5, larib5],
[lprib6, lplrib6, lalrib6, larib6],
[lprib7, lplrib7, lalrib7, larib7],
[lprib8, lplrib8, lalrib8, larib8],
[lprib9, lplrib9, lalrib9, larib9],
[lprib10, lplrib10, lalrib10, larib10],
[lprib11, lplrib11, lalrib11, larib11],
[lprib12, lplrib12, lalrib12, larib12]*/

const data = [
  [ "5", "8", "18", " ", "9", "0", "3", " "],
  ["15", "10", "13", "19", " ", "15", "7", "8", "2"],
  ["7", "13", "12", "14", " ", "6", "5", "0", "9"],
  ["3", "6", "7", "25", " ", "25", "20", "18", "21"],
  ["5", "15", "20", "25", " ", "24", "24", "21", "18"],
  ["0", "6", "8", "23", " ", "25", "26", "24", "22"],
  ["13", "16", "12", "25", " ", "23", "15", "9", "10"],
  ["3", "4", "6", "19", " ", "25", "16", "18", "20"],
  ["9", "13", "9", "15", " ", "7", "21", "8", "9"],
  ["12", "17", "19", "9", " ", "18", "4", "11", "4"],
  [ "6", "2", "20", " ", "20", "9", "3", " "],
  [ "2", "10", "9", " ", "11", "14", "9", " "]
];


  export default function() {
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
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(230, 40,0, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#000"
        })}
        //renders number
        cellRender={value => value && <div>{value}</div>}
      />


      </div>
    );
  }