import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import RibHeatGrid from './RibHeatGrid';
import { Label } from 'reactstrap';
import Box from "@material-ui/core/Box";
import "./../legend.css";



var URL = "/images/blank.png";
var MAP ={
    name: "legend-map",
    areas: [
      {
        name: "legend1",
        shape: "circle",
        coords: [35, 15, 5],
        fillColor: "rgb(255,228,196)",
        preFillColor: "rgb(255,228,196)"
      },
      {
        name: "legend2",
        shape: "circle",
        coords: [35, 45, 10],
        fillColor: "rgb(233,150,122)",
        preFillColor: "rgb(233,150,122)"
      },
      {
        name: "legend3",
        shape: "circle",
        coords: [35, 80, 15],
        fillColor: "rgb(255,127,80)",
        preFillColor: "rgb(255,127,80)"
      }
      ,
      {
        name: "legend4",
        shape: "circle",
        coords: [35, 125, 20],
        fillColor: "rgb(255,99,71)",
        preFillColor: "rgb(255,99,71)"
      },
      {
        name: "legend5",
        shape: "circle",
        coords: [35, 185, 25],
        fillColor: "rgb(220,20,60)",
        preFillColor: "rgb(220,20,60)"
      }
  
    ]
  }
class CircleLegend extends Component {
  load()
  {
  
  };
  
    render() {
      return (
        <div className="legend">
          <div className="legendc">
            <Box style={{ position: "relative" }} padding = "0px 0px 0px 0px">
              <ImageMapper
                width={65}
                height={250}
                //imgWidth="100"
                src={URL}
                map={MAP}
                onLoad={() => this.load()}
              ////  onClick={(area) => this.clicked(area)}
              ////  onMouseEnter={(area) => this.enterArea(area)}
              ////  onMouseLeave={(area) => this.leaveArea(area)}
                // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
               //// onImageClick={(evt) => this.clickedOutside(evt)}
                //onImageMouseMove={(evt) => this.moveOnImage(evt)}
                lineWidth={4}
                strokeColor={"brown"}
              />
  
            </Box>
          </div>
        </div>
        
      );
    } 
  }
  
  export default CircleLegend;
    