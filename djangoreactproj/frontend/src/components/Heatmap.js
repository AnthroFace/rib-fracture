import React, { Component } from 'react'
import RibHeatImage from "./RibHeatImage";
//import RibHeatGrid from "./RibHeatGrid";
import Box from "@material-ui/core/Box";
import HeatMap from "react-heatmap-grid";

const xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
const yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const data = [
  [" ", "5", "8", "18", " ", "9", "0", "3", " "],
  ["15", "10", "13", "19", " ", "15", "7", "8", "2"],
  ["7", "13", "12", "14", " ", "6", "5", "0", "9"],
  ["3", "6", "7", "25", " ", "25", "20", "18", "21"],
  ["5", "15", "20", "25", " ", "24", "24", "21", "18"],
  ["0", "6", "8", "23", " ", "25", "26", "24", "22"],
  ["13", "16", "12", "25", " ", "23", "15", "9", "10"],
  ["3", "4", "6", "19", " ", "25", "16", "18", "20"],
  ["9", "13", "9", "15", " ", "7", "21", "8", "9"],
  ["12", "17", "19", "9", " ", "18", "4", "11", "4"],
  [" ", "6", "2", "20", " ", "20", "9", "3", " "],
  [" ", "2", "10", "9", " ", "11", "14", "9", " "]
];

  export default function() {
    return (
      <div style={{ fontSize: "13px" }}>
        <Box padding="50px 0px">
        <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
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
        </Box>

        <Box   padding="0px 25px"    style={{
          position: "static", 
          //display: "flex", 
         // transform: "translate(-50%, -50%)",
        }}>
            <RibHeatImage 
            />
        </Box> 

      </div>
    );
  }

/*

class Heatmap extends Component {

    render() {
      return (
        
        <div className="Heatmap" >

        <Box padding="50px 36px">
            <RibHeatImage 
            />
        </Box>


        </div>
      )
    }
}

export default Heatmap */