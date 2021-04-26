import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import RibHeatGrid from './RibHeatGrid';
import { Label } from 'reactstrap';
import Box from "@material-ui/core/Box";
import "./../text.css";


class CircleText extends Component {

    
      render() {
        return (
        <div class = "textcircle" style={{postion:"absolute"}}>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 77px">
            <h5 > Least breaks
            </h5>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "0px 0px 0px 70px">
            <h5> -
            </h5>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "2px 0px 0px 70px">
            <h5> -
            </h5>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "10px 0px 0px 70px">
            <h5> -
            </h5>
          </Box>
          <Box border={0} style={{postion:"absolute"}} padding = "28px 0px 0px 70px">
            <h5> Most breaks
            </h5>
          </Box>
          </div>
        );
      }
}
    
export default CircleText;