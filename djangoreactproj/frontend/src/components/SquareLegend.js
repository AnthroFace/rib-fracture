import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import RibHeatGrid from './RibHeatGrid';
import { Label } from 'reactstrap';
import Box from "@material-ui/core/Box";
import "./../legend.css";
var URL = "/images/blank.png";
var MAP ={
    name: "legend2-map",
    areas: [
      {
        name: "legend1",
        shape: "rect",
        coords: [5, 5, 25, 15],
        fillColor: "rgb(255,228,196)",
        preFillColor: "rgb(255,228,196)"
      },
      {
        name: "legend2",
        shape: "rect",
        coords: [5, 35, 25, 45],
        fillColor: "rgb(233,150,122)",
        preFillColor: "rgb(233,150,122)"
      },
      {
        name: "legend3",
        shape: "rect",
        coords: [5, 65, 25, 75],
        fillColor: "rgb(255,127,80)",
        preFillColor: "rgb(255,127,80)"
      }
      ,
      {
        name: "legend4",
        shape: "rect",
        coords: [5, 95, 25,105],
        fillColor: "rgb(255,99,71)",
        preFillColor: "rgb(255,99,71)"
      },
      {
        name: "legend5",
        shape: "rect",
        coords: [5, 125, 25, 135],
        fillColor: "rgb(220,20,60)",
        preFillColor: "rgb(220,20,60)"
      }
  
    ]
  }
class SquareLegend extends Component {
  load()
  {
  
  };
  
    render() {
      return (
        <div className="legend3">
          <div className="legend3c">
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
  
  export default SquareLegend;