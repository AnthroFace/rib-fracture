import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./../App.css";
import Box from "@material-ui/core/Box";

class Home extends Component {
  render() {
    return (
      <div>
        <div style = {{          left: "48%",
          top: "30%",
          transform: "translate(-50%, -50%)" ,  position: "fixed"}}>
          <Box borderTop={0} borderBottom={0}>
            <img
              variant="h1"
              component="h2"
              height="200"
              src="/images/AnthrofaceLogo1.png"
              alt=""
            />
          </Box>
         </div> 
      <div 
        style={{
          position:"fixed",
          left: "48%",
          top: "40%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box border={0} textAlign="center" style ={{padding:"250px 0px 0px 0px"}}>
          <Box border={0} class = "buttons" >
          <Box>
          <div style ={{padding : "5px"}} >
            <Button
              style={{
                //  borderRadius: 35,
                color: "#96382f",
                backgroundColor: "#fffee9",
                padding: "18px 47px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Database"
            >
              Database
            </Button>
            </div>
            <div style ={{padding : "5px"}} >
            <Button
              style={{
                // borderRadius: 35,
                color: "#96382f",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Import"
            >
              Import Data
            </Button>
            </div>
            <div style ={{padding : "5px"}}>
            <Button
              style={{
                // borderRadius: 35,
                color:"#96382f",
                backgroundColor: "#fffee9",
                padding: "18px 54px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Heatmap"
            >
              Heatmap
            </Button>
            </div>
            </Box>
            <Box>
            <div  style ={{padding : "5px"}}>
            <Button 
              style={{
                // borderRadius: 35,
                color: "#963A2F",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Create"
            >
              New Patient
            </Button>
            </div>
            <div style ={{padding : "5px"}}>
            <Button
              style={{
                // borderRadius: 35,
                color:"#96382f",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Export"
            >
              Export Data
            </Button>
            </div>
            
            <div style ={{padding : "5px"}}>
            <Button
              style={{
                // borderRadius: 35,
                color:"#96382f",
                backgroundColor: "#fffee9",
                padding: "18px 23px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              href="/Dataset"
            >
              Select Dataset
            </Button>
            </div>
            </Box>
          </Box>
        </Box>
      </div>
      </div>
    );
  }
}
export default Home;

/*  <Typography variant="h1" component="h2" gutterBottom>
         Anthroface
        </Typography>*/
