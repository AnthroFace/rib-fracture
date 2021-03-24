import React, { Component } from "react";
import RibHeatImage from "./RibHeatImage";
//import RibHeatGrid from "./RibHeatGrid";
import Box from "@material-ui/core/Box";
import RibHeatGrid from "./RibHeatGrid";
import RightRibHeatGrid from "./RightRibHeatGrid";
import "./../heatmap.css";
import LeftVertBar from "./LeftVertBar";
import RightVertBar from "./RightVertBar";
import LeftHorBar from "./LeftHorBar";
import RightHorBar from "./RightHorBar";
import CoolTabs from "react-cool-tabs";

//const xLabels = ["p", "pl", "al", "a"];
// Display only even labels
/*const xLabelsVisibility = new Array(4)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));*/
//const yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

//const right_xLabels = ["p", "pl", "al", "a", " ", "a", "al", "pl", "p"];

//const right_yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

/* ["",lprib1, lalrib1, larib1 ],
[lprib2, lplrib2, lalrib2, larib2],
[lprib3, lplrib3, lalrib3, larib3],
[lprib4, lplrib4, lalrib4, larib4],
[lprib5, lplrib5, lalrib5, larib5],
[lprib6, lplrib6, lalrib6, larib6],
[lprib7, lplrib7, lalrib7, larib7],
[lprib8, lplrib8, lalrib8, larib8],
[lprib9, lplrib9, lalrib9, larib9],
[lprib10, lplrib10, lalrib10, larib10],
[lprib11, lplrib11, lalrib11, larib11],
[lprib12, lplrib12, lalrib12, larib12]*/

/*const ldata = [
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

      <div className = 'RibHeatImage'>
        <RibHeatImage 
        />
        content
    </div>
  render(){
    return(
      <div className= 'heatMapGrid'>
      <Box padding ="35px 0px 0px 180px" style={{position: "relative" 
        }}>
<Box   padding="0px 0px 0px 0px" border={0} style={{position: "fixed",
          transform: 'rotate(180deg)'
        }}>
            <div><RightVertBar
            /></div>
        </Box>
        </Box>
        <Box padding="60px 12px 0px 540px" style={{position: "fixed" 
        }}>
        <div><p><RibHeatGrid/></p></div>

        </Box>

        <Box padding="60px 12px 0px 750px" style={{position: "fixed" 
        }}>

        <div><p><RightRibHeatGrid/></p></div>
        </Box>


        <Box padding="25px 0px 0px 950px" style={{position: "fixed" 
        }}>
            <div><p><LeftVertBar
            /></p></div>
        </Box>

        <Box  padding="0px 0px 0px 220px" border={0} style={{position: "fixed" 
        }}>
        <Box   padding="207px 0px 0px 900px" border={0} style={{position: "fixed" ,transform: 'rotate(90deg)'
        }}>
        <div><p><RightHorBar
            /></p></div>
        </Box>
        <Box   padding="0px 0px 207px 900px" border={0} style={{position: "fixed", transform: 'rotate(90deg)'
        }}>
            <div><p><LeftHorBar
            /></p></div>
        </Box>
        </Box>
        </div>
    )
  }






      <Box   padding="0px 0px 0px 650px" border={0} style={{position: "relative",
    transform: 'rotate(180deg)'
    }}>
      <div><RightVertBar
      /></div>
  </Box>
*/

class Content1 extends Component {
  render() {
    console.log("context1", this.props.rib_count);
    return (
      <Box padding="50px 0px 0px 300px">
        <RibHeatImage />
      </Box>
    );
  }
}

class Content2 extends Component {
  render() {
    console.log("context2", this.props.rib_count);
    return (
      <Box padding="0px 0px 0px 0px">
        <Box
          padding="0px 0px 35px 0px"
          border={0}
          style={{ position: "absolute", transform: "rotate(180deg)" }}
        >
          <div>
            <RightVertBar rib_count={this.props.rib_count} />
          </div>
        </Box>

        <Box padding="60px 12px 50px 350px" style={{ position: "absolute" }}>
          <div>
            <RibHeatGrid rib_count={this.props.rib_count} />
          </div>
        </Box>

        <Box padding="60px 12px 0px 560px" style={{ position: "absolute" }}>
          <div>
            <RightRibHeatGrid rib_count={this.props.rib_count} />
          </div>
        </Box>

        <Box padding="25px 0px 0px 750px" style={{ position: "absolute" }}>
          <div>
            <LeftVertBar />
          </div>
        </Box>

        <Box
          padding="865px 0px 738px 0px"
          border={0}
          style={{ position: "absolute", transform: "rotate(90deg)" }}
        >
          <div>
            <RightHorBar rib_count={this.props.rib_count} />
          </div>
        </Box>

        <Box
          padding="904px 245px 942px 3px"
          border={0}
          style={{ position: "absolute", transform: "rotate(90deg)" }}
        >
          <div>
            <LeftHorBar />
          </div>
        </Box>
      </Box>
    );
  }
}

export default class Example extends React.Component {
  state = {
    rib_count: "",
  };

  componentDidMount() {
    // console.log(this.props.location.state);
    var { ribCount } = this.props.location.state;

    var ribCount = JSON.parse(ribCount);
    // console.log("LPRIB1", ribCount["lprib1"]);
    this.setState({ rib_count: ribCount });
  }

  render() {
    // console.log("render rib count", this.state.rib_count)
    return (
      <div>
        <Box padding="25px 0px 0px 275px">
          <CoolTabs
            tabKey={"1"}
            style={{ width: 1200, height: 1800, background: "white" }}
            activeTabStyle={{ background: "#FFFEE9", color: "#963A2F" }}
            unActiveTabStyle={{ background: "#D0F0C0", color: "#963A2F" }}
            activeLeftTabBorderBottomStyle={{
              background: "#963A2F",
              height: 4,
            }}
            activeRightTabBorderBottomStyle={{
              background: "#963A2F",
              height: 4,
            }}
            tabsBorderBottomStyle={{ background: "#D0F0C0", height: 4 }}
            leftContentStyle={{ background: "#FFFEE9" }}
            rightContentStyle={{ background: "#FFFEE9" }}
            leftTabTitle={"Heat Map Grid"}
            rightTabTitle={"Heat Map Image"}
            leftContent={<Content1 rib_count={this.state.rib_count} />}
            rightContent={<Content2 rib_count={this.state.rib_count} />}
            contentTransitionStyle={"transform 0.6s ease-in"}
            borderTransitionStyle={"all 0.6s ease-in"}
          />
        </Box>
      </div>
    );
  }
}

//right,bottom,left,top
/*
       <Box padding = "50px 0px 0px 400px">
         <CoolTabs
           tabKey={'1'}
           style={{ width:  1000, height:  700, background:  'white' }}
           activeTabStyle={{ background:  'red', color:  'white' }}
           unActiveTabStyle={{ background:  'green', color:  'black' }}
           activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
           activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
           tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
           leftContentStyle={{ background:  'lightgreen' }}
           rightContentStyle={{ background:  'lightblue' }}
           leftTabTitle={'Left title'}
           rightTabTitle={'Right title'}
           leftContent={<Content1/>}
           rightContent={<Content2/>}
           contentTransitionStyle={'transform 0.6s ease-in'}
           borderTransitionStyle={'all 0.6s ease-in'}/>
     </Box>




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




        <Box   padding="50px 75px"    style={{
          position: "relative"
          //display: "flex", 
         //transform: "translate(-50%, -50%)",
        }}>
            <RibHeatImage 
            />
        </Box>




export default Heatmap */
