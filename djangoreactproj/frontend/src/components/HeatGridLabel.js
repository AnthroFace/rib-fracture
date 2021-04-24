import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./../labels.css";
import { Label } from 'reactstrap';
class HeatGridLabel extends Component {

    
    render() {
      return (
      <div className = "HeatGridLabel" >
        <Box border={0} style={{postion:"absolute"}} class = "horizontalright" > 
          <h7 > Horizontal Right Rib Total </h7>
        </Box>
        <Box border={0} style={{postion:"absolute"}} class = "horizontalleft"> 
          <h7> Horizontal Left Rib Total </h7> 
        </Box>
        <Box border={0} style={{postion:"absolute"}} class = "vertright" > 
          <h7 > Vertical Right Rib Total </h7>
        </Box>
        <Box border={0} style={{postion:"absolute"}} class = "vertleft"> 
          <h7> Vertical Left Rib Total </h7> 
        </Box>
        </div>
      );
    }
}
  
export default HeatGridLabel;

/*       <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
<h5> pl</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</Box>
<Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 0px" >
  <h5> p </h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</Box>*/
