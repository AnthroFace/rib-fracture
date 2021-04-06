import React from "react";
import HeatMap from "react-heatmap-grid";
import { leftRibValues } from "./RightRibHeatGrid"; 

const xLabels = ["a", "al", "pl", "p"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
const yLabels = ["", "", "", "", "", "", "", "", "", "", "", ""];

//const right_xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];

//const right_yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


var ralrib1=8, rplrib1=1, rprib1=10, 
rarib2=9, ralrib2=3,rplrib2=1, rprib2=5,   
rarib3=6, ralrib3=3, rplrib3=4, rprib3=1, 
rarib4=1, ralrib4=3, rplrib4=4, rprib4=10,  
rarib5=4, ralrib5=6, rplrib5=9, rprib5=2,
rarib6=2, ralrib6=0, rplrib6=1, rprib6=3, 
rarib7=6, ralrib7=4, rplrib7=7, rprib7=9, 
rarib8=4, ralrib8=1, rplrib8=8, rprib8=2,
rarib9=1, ralrib9=3, rplrib9=4, rprib9=7,
rarib10=6, ralrib10=3, rplrib10=5, rprib10=7,
ralrib11=6, rplrib11=1, rprib11=2, 
ralrib12=9, rplrib12=7, rprib12=1; 

var rightRibValues ={
  vralrib1: ralrib1, vrplrib1:rplrib1, vrprib1: rprib1, 
  vrarib2:rarib2, vralrib2:ralrib2, vrplrib2:rplrib2, vrprib2:rprib2,
  vrarib3:rarib3, vralrib3:ralrib3, vrplrib3:rplrib3, vrprib3:rprib3,
  vrarib4:rarib4, vralrib4:ralrib4, vrplrib4:rplrib4, vrprib4:rprib4,
  vrarib5:rarib5, vralrib5:ralrib5, vrplrib5:rplrib5, vrprib5:rprib5,
  vrarib6:rarib6, vralrib6:ralrib6, vrplrib6:rplrib6, vrprib6:rprib6,
  vrarib7:rarib7, vralrib7:ralrib7, vrplrib7:rplrib7, vrprib7:rprib7,
  vrarib8:rarib8, vralrib8:ralrib8, vrplrib8:rplrib8, vrprib8:rprib8,
  vrarib9:rarib9, vralrib9:ralrib9, vrplrib9:rplrib9, vrprib9:rprib9, 
  vrarib10:rarib10, vralrib10:ralrib10, vrplrib10:rplrib10, vrprib10:rprib10,
  vralrib11:ralrib11, vrplrib11:rplrib11, vrprib11:rprib11, 
  vralrib12:ralrib12, vrplrib12:rplrib12, vrprib12:rprib12
}; 

export { rightRibValues };


var rightBarTotals ={
  rightbar1: rplrib1+ralrib1+rprib1, 
  rightbar2: rprib2+rplrib2+ralrib2+rarib2,
  rightbar3: rprib3+rplrib3+ralrib3+rarib3,
  rightbar4: rprib4+rplrib4+ralrib4+rarib4,
  rightbar5: rprib5+rplrib5+ralrib5+rarib5,
  rightbar6: rprib6+rplrib6+ralrib6+rarib6,
  rightbar7: rprib7+rplrib7+ralrib7+rarib7,
  rightbar8: rprib8+rplrib8+ralrib8+rarib8,
  rightbar9: rprib9+rplrib9+ralrib9+rarib9,
  rightbar10: rprib10+rplrib10+ralrib10+rprib10,
  rightbar11: rplrib11+ralrib11+rprib11,
  rightbar12: rplrib12+ralrib12+rprib12,
}; 

export { rightBarTotals }; 


var bottomRightBarTotals ={
  //right side p
  bottomright1: rprib1+rprib2+rprib3+rprib4+rprib5+rprib6+rprib7+rprib8+rprib9+rprib10+rprib11+rprib12,
  //right side pl
  bottomright2: rplrib1+rplrib2+rplrib3+rplrib4+rplrib5+rplrib6+rplrib7+rplrib8+rplrib9+rplrib10+rplrib11+rplrib12,
  //right side al
  bottomright3: ralrib1+ralrib2+ralrib3+ralrib4+ralrib5+ralrib6+ralrib7+ralrib8+ralrib9+ralrib10+ralrib11+ralrib12,
  //right side a
  bottomright4: rarib2+rarib3+rarib4+rarib5+rarib6+rarib7+rarib8+rarib9+rarib10,
}; 

export { bottomRightBarTotals }; 


const data = [
  [" ", ralrib1, rplrib1, rprib1],
  [rarib2, ralrib2, rplrib2, rprib2],
  [rarib3, ralrib3, rplrib3, rprib3],
  [rarib4, ralrib4, rplrib4, rprib4],
  [rarib5, ralrib5, rplrib5, rprib5],
  [rarib6, ralrib6, rplrib6, rprib6],
  [rarib7, ralrib7, rplrib7, rprib7],
  [rarib8, ralrib8, rplrib8, rprib8],
  [rarib9, ralrib9, rplrib9, rprib9],
  [rarib10, ralrib10, rplrib10, rprib10],
  [" ", ralrib11, rplrib11, rprib11],
  [" ", ralrib12, rplrib12, rprib12]
];


/*
//To get max and min of both sides of grid. Working on this page but errors on rightribheatgrid.js
var nums = [rplrib1, ralrib1, rprib1, rprib2, rplrib2, 
  ralrib2, rarib2, rprib3, rplrib3, ralrib3, rarib3,
  rprib4, rplrib4, ralrib4, rarib4, rprib5, rplrib5, 
  ralrib5, rarib5, rprib6, rplrib6, ralrib6, rarib6, 
  rprib7, rplrib7, ralrib7, rarib7, rprib8, rplrib8, 
  ralrib8, rarib8, rprib9, rplrib9, ralrib9, rarib9,
  rprib10, rplrib10, ralrib10, rarib10, rplrib11, ralrib11, 
  rprib11, rplrib12, ralrib12, rprib12,
//left rib variables
  leftRibValues.vlarib1, leftRibValues.vlalrib1, leftRibValues.vlplrib1, leftRibValues.vlarib2, leftRibValues.vlalrib2, leftRibValues.vlplrib2, 
  leftRibValues.vlprib2, leftRibValues.vlarib3, leftRibValues.vlalrib3, leftRibValues.vlplrib3, leftRibValues.vlprib3,
  leftRibValues.vlarib4, leftRibValues.vlalrib4, leftRibValues.vlplrib4, leftRibValues.vlprib4, leftRibValues.vlarib5, leftRibValues.vlalrib5, 
  leftRibValues.vlplrib5, leftRibValues.vlprib5, leftRibValues.vlarib6, leftRibValues.vlalrib6, leftRibValues.vlplrib6, leftRibValues.vlprib6, 
  leftRibValues.vlarib7,leftRibValues.vlalrib7, leftRibValues.vlplrib7, leftRibValues.vlprib7, leftRibValues.vlarib8, leftRibValues.vlalrib8, 
  leftRibValues.vlplrib8, leftRibValues.vlprib8, leftRibValues.vlarib9, leftRibValues.vlalrib9, leftRibValues.vlplrib9, leftRibValues.vlprib9, 
  leftRibValues.vlarib10, leftRibValues.vlalrib10, leftRibValues.vlplrib10, leftRibValues.vlprib10, leftRibValues.vlarib11, 
  leftRibValues.vlalrib11, leftRibValues.vlplrib11, leftRibValues.vlarib12, leftRibValues.vlalrib12, leftRibValues.vlplrib12
];

var maxValue = Math.max.apply(null,nums);
var minValue = Math.min.apply(null, nums);

*/

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
        cellStyle={(background, value, minValue, maxValue, data, x, y) => ({
          background: `rgb(230, 40,0, ${1 - (maxValue - value) / (maxValue - minValue)})`,
          fontSize: "11.5px",
          color: "#000"
        })}
        //renders number
        cellRender={value => value && <div>{value}</div>}
      />


      </div>
    );
  }