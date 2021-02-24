import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ["p", "pl", "al", "a"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
const yLabels = ["", "", "", "", "", "", "", "", "", "", "", ""];

//const right_xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];

//const right_yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


var rplrib1=1, ralrib1=8, rarib1=10, rprib2=5, rplrib2=1, ralrib2=3, rarib2=9, rprib3=1, rplrib3=4, ralrib3=3, rarib3=6,
rprib4=10, rplrib4=4, ralrib4=3, rarib4=1, rprib5=2, rplrib5=9, ralrib5=6, rarib5=4, rprib6=3, rplrib6=1, ralrib6=0, rarib6=2, 
rprib7=9, rplrib7=7, ralrib7=4, rarib7=6, rprib8=2, rplrib8=8, ralrib8=1, rarib8=4, rprib9=7, rplrib9=4, ralrib9=3, rarib9=1,
rprib10=11, rplrib10=5, ralrib10=3, rarib10=6, rplrib11=1, ralrib11=6, rarib11=2, rplrib12=7, ralrib12=9, rarib12=1; 

var rightBarTotals ={
  rightbar1: rplrib1+ralrib1+rarib1, 
  rightbar2: rprib2+rplrib2+ralrib2+rarib2,
  rightbar3: rprib3+rplrib3+ralrib3+rarib3,
  rightbar4: rprib4+rplrib4+ralrib4+rarib4,
  rightbar5: rprib5+rplrib5+ralrib5+rarib5,
  rightbar6: rprib6+rplrib6+ralrib6+rarib6,
  rightbar7: rprib7+rplrib7+ralrib7+rarib7,
  rightbar8: rprib8+rplrib8+ralrib8+rarib8,
  rightbar9: rprib9+rplrib9+ralrib9+rarib9,
  rightbar10: rprib10+rplrib10+ralrib10+rarib10,
  rightbar11: rplrib11+ralrib11+rarib11,
  rightbar12: rplrib12+ralrib12+rarib12,
}; 

export { rightBarTotals }; 


var bottomRightBarTotals ={
  bottomright1: rarib1+rarib2+rarib3+rarib4+rarib5+rarib6+rarib7+rarib8+rarib9+rarib10+rarib11+rarib12,
  bottomright2: ralrib1+ralrib2+ralrib3+ralrib4+ralrib5+ralrib6+ralrib7+ralrib8+ralrib9+ralrib10+ralrib11+ralrib12,
  bottomright3: rplrib1+rplrib2+rplrib3+rplrib4+rplrib5+rplrib6+rplrib7+rplrib8+rplrib9+rplrib10+rplrib11+rplrib12,
  bottomright4: rprib2+rprib3+rprib4+rprib5+rprib6+rprib7+rprib8+rprib9+rprib10,
}; 

export { bottomRightBarTotals }; 


const data = [
  [" ", rplrib1, ralrib1, rarib1],
  [rprib2, rplrib2, ralrib2, rarib2],
  [rprib3, rplrib3, ralrib3, rarib3],
  [rprib4, rplrib4, ralrib4, rarib4],
  [rprib5, rplrib5, ralrib5, rarib5],
  [rprib6, rplrib6, ralrib6, rarib6],
  [rprib7, rplrib7, ralrib7, rarib7],
  [rprib8, rplrib8, ralrib8, rarib8],
  [rprib9, rplrib9, ralrib9, rarib9],
  [rprib10, rplrib10, ralrib10, rarib10],
  [" ", rplrib11, ralrib11, rarib11],
  [" ", rplrib12, ralrib12, rarib12]
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