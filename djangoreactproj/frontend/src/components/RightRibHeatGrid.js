import React from "react";
import HeatMap from "react-heatmap-grid";
import { rightRibValues } from "./RibHeatGrid"; 

const xLabels = ["p", "pl", "al", "a"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
const yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

//const right_xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];

//const right_yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

var larib1=1, lalrib1=8, lplrib1=10, larib2=5, lalrib2=1, lplrib2=3, lprib2=9, larib3=1, lalrib3=4, lplrib3=3, lprib3=6,
larib4=10, lalrib4=4, lplrib4=3, lprib4=1, larib5=2, lalrib5=9, lplrib5=6, lprib5=4, larib6=3, lalrib6=1, lplrib6=0, lprib6=2, 
larib7=9, lalrib7=7, lplrib7=4, lprib7=6, larib8=2, lalrib8=8, lplrib8=1, lprib8=4, larib9=7, lalrib9=4, lplrib9=3, lprib9=1,
larib10=11, lalrib10=5, lplrib10=3, lprib10=6, larib11=1, lalrib11=6, lplrib11=2, larib12=7, lalrib12=9, lplrib12=1; 

var leftRibValues ={
  vlarib1: larib1, vlalrib1: lalrib1, vlplrib1: lplrib1, vlarib2: larib2, vlalrib2: lalrib2, vlplrib2: lplrib2, 
  vlprib2: lprib2, vlarib3: larib3, vlalrib3: lalrib3, vlplrib3: lplrib3, vlprib3: lprib3,
  vlarib4: larib4, vlalrib4: lalrib4, vlplrib4: lplrib4, vlprib4: lprib4, vlarib5: larib5, vlalrib5: lalrib5, 
  vlplrib5: lplrib5, vlprib5: lprib5, vlarib6: larib6, vlalrib6: lalrib6, vlplrib6: lplrib6, vlprib6: lprib6, 
  vlarib7: larib7, vlalrib7: lalrib7, vlplrib7: lplrib7, vlprib7: lprib7, vlarib8: larib8, vlalrib8: lalrib8, 
  vlplrib8: lplrib8, vlprib8: lprib8, vlarib9: larib9, vlalrib9: lalrib9, vlplrib9: lplrib9, vlprib9: lprib9, 
  vlarib10: larib10, vlalrib10: lalrib10, vlplrib10: lplrib10, vlprib10: lprib10, vlarib11: larib11, 
  vlalrib11: lalrib11, vlplrib11: lplrib11, vlarib12: larib12, vlalrib12: lalrib12, vlplrib12: lplrib12, 
}; 

export { leftRibValues };

var leftBarTotals ={
  leftbar1: larib1+lalrib1+lplrib1, 
  leftbar2: larib2+lalrib2+lplrib2+lprib2,
  leftbar3: larib3+lalrib3+lplrib3+lprib3,
  leftbar4: larib4+lalrib4+lplrib4+lprib4,
  leftbar5: larib5+lalrib5+lplrib5+lprib5,
  leftbar6: larib6+lalrib6+lplrib6+lprib6,
  leftbar7: larib7+lalrib7+lplrib7+lprib7,
  leftbar8: larib8+lalrib8+lplrib8+lprib8,
  leftbar9: larib9+lalrib9+lplrib9+lprib9,
  leftbar10: larib10+lalrib10+lplrib10+lprib10,
  leftbar11: larib11+lalrib11+lplrib11,
  leftbar12: larib12+lalrib12+lplrib12,
}; 

export { leftBarTotals }; 

var bottomLeftBarTotals ={
  bottomleft1: larib1+larib2+larib3+larib4+larib5+larib6+larib7+larib8+larib9+larib10+larib11+larib12,
  bottomleft2: lalrib1+lalrib2+lalrib3+lalrib4+lalrib5+lalrib6+lalrib7+lalrib8+lalrib9+lalrib10+lalrib11+lalrib12,
  bottomleft3: lplrib1+lplrib2+lplrib3+lplrib4+lplrib5+lplrib6+lplrib7+lplrib8+lplrib9+lplrib10+lplrib11+lplrib12,
  bottomleft4: lprib2+lprib3+lprib4+lprib5+lprib6+lprib7+lprib8+lprib9+lprib10,
}; 

export { bottomLeftBarTotals }; 


const data = [
  [larib1, lplrib1, lalrib1, " "],
  [lprib2, lplrib2, lalrib2, larib2],
  [lprib3, lplrib3, lalrib3, larib3],
  [lprib4, lplrib4, lalrib4, larib4],
  [lprib5, lplrib5, lalrib5, larib5],
  [lprib6, lplrib6, lalrib6, larib6],
  [lprib7, lplrib7, lalrib7, larib7],
  [lprib8, lplrib8, lalrib8, larib8],
  [lprib9, lplrib9, lalrib9, larib9],
  [lprib10, lplrib10, lalrib10, larib10],
  [larib11, lplrib11, lalrib11, " "],
  [larib12, lplrib12, lalrib12, " "]
];

//just to do max for both sides, causing error on this page only with right values, but not on ribheatimage.js or ribheatgrid.js
/*
var nums1 = [ 
   rightRibValues.vrplrib1,rightRibValues.vralrib1, rightRibValues.vrprib1, rightRibValues.vrprib2, rightRibValues.vrplrib2, 
  rightRibValues.vralrib2, rightRibValues.vrarib2, rightRibValues.vrprib3, rightRibValues.vrplrib3, rightRibValues.vralrib3, rightRibValues.vrarib3,
  rightRibValues.vrprib4, rightRibValues.vrplrib4, rightRibValues.vralrib4, rightRibValues.vrarib4, rightRibValues.vrprib5, rightRibValues.vrplrib5, 
  rightRibValues.vralrib5, rightRibValues.vrarib5, rightRibValues.vrprib6, rightRibValues.vrplrib6, rightRibValues.vralrib6, rightRibValues.vrarib6, 
  rightRibValues.vrprib7, rightRibValues.vrplrib7, rightRibValues.vralrib7, rightRibValues.vrarib7, rightRibValues.vrprib8, rightRibValues.vrplrib8, 
  rightRibValues.vralrib8, rightRibValues.vrarib8, rightRibValues.vrprib9, rightRibValues.vrplrib9, rightRibValues.vralrib9, rightRibValues.vrarib9,
  rightRibValues.vrprib10, rightRibValues.vrplrib10, rightRibValues.vralrib10, rightRibValues.vrarib10, rightRibValues.vrplrib11, rightRibValues.vralrib11, 
  rightRibValues.vrprib11, rightRibValues.vrplrib12, rightRibValues.vralrib12, rightRibValues.vrprib12, 
//left rib variables
  larib1, lalrib1, lplrib1, larib2, lalrib2, lplrib2, 
  lprib2, larib3, lalrib3, lplrib3, lprib3,
  larib4, lalrib4, lplrib4, lprib4, larib5, lalrib5, 
  lplrib5, lprib5, larib6, lalrib6, lplrib6, lprib6, 
  larib7,lalrib7, lplrib7, lprib7, larib8, lalrib8, 
  lplrib8, lprib8, larib9, lalrib9, lplrib9, lprib9, 
  larib10, lalrib10, lplrib10, lprib10, larib11, 
  lalrib11, lplrib11, larib12, lalrib12, lplrib12
];
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