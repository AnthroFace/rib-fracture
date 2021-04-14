import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import RibHeatGrid from './RibHeatGrid';
import { Label } from 'reactstrap';
import Box from "@material-ui/core/Box";
import "./../text.css";

class SquareText extends Component {

    
      render() {
        return (
        <div style={{postion:"absolute"}}>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h6 > Least breaks
            </h6>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h6> -
            </h6>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h6> -
            </h6>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h6> -
            </h6>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h6> Most breaks
            </h6>
          </Box>
          </div>
        );
      }
}
    
export default SquareText;