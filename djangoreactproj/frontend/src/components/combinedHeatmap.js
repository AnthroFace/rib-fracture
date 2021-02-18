import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import LeftVertBar from "./LeftVertBar";
import RightVertBar from "./RightVertBar";
import LeftHorBar from "./LeftHorBar";
import RightHorBar from "./RightHorBar";
import RibHeatGrid from './RibHeatGrid';
import RightRibHeatGrid from './RightRibHeatGrid';
import "./../heatmap.css";
import Box from "@material-ui/core/Box";
import HeatMap from "react-heatmap-grid";

class combinedHeatmap extends React.Component {
    render(){return(

        <div className= 'heatMapGrid'>
              <div><RightVertBar
              /></div>
 


          </div>
    )}
}
export default combinedHeatmap;

/*        <div><RibHeatGrid/></div>

          <div><RightRibHeatGrid/></div>
   
  
  

              <div><LeftVertBar
              /></div>
    
  

          <div><RightHorBar
              /></div>
          

              <div><LeftHorBar
              /></div>*/