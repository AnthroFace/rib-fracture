import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./../labels.css";
import { Label } from 'reactstrap';
class HeatImageLabel extends Component {

    
    render() {
      return (
      <div class = "HeatImageLabel" >
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" > 
          <h5 > a </h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" > 
          <h5 > al </h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
          <h5> pl</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
          <h5> p </h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" > 
          <h5 > p </h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" > 
          <h5 > pl </h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
          <h5> al</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
          <h5> a </h5> 
        </Box>
        </div>
      );
    }
}
  
export default HeatImageLabel;