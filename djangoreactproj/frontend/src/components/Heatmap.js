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

import CircleLegend from "./CircleLegend";
import CircleText from "./CircleText";
import SquareLegend from "./SquareLegend";
import SquareText from "./SquareText";
import HeatImageLabel from "./HeatImageLabel";
import HeatGridLabel from "./HeatGridLabel";

import combinedHeatmap from "./combinedHeatmap";
import CoolTabs from 'react-cool-tabs';
import ImageMapper from "react-image-mapper";
import { Label } from 'reactstrap';

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
    return (
      <div>
      <Box  class = "heatbaby">
      <div><HeatImageLabel/></div>
      </Box>
      <Box  class = "heatparent" > 
        <Box padding = "240px 0px 0px 150px" style={{position: "absolute" }}>
        <div><CircleLegend/></div>
        </Box>
        <Box padding = "240px 0px 0px 150px" style={{position: "absolute" }}>
        <div><CircleText/></div>
        </Box>
        <Box border={0} style={{postion:"absolute"}} padding = "0px 0px 0px 500px">
        <div><RibHeatImage rib_count={this.props.rib_count}
        /></div>
        </Box>
      </Box>     
      </div>
    );}
}

class Content2 extends Component {
  render() {
    // console.log("context2", this.props.rib_count);
    return (
      <div>
      <Box  class = "heatgridbaby">
      <div><HeatGridLabel/></div>
      </Box>
      <Box  class = "heatgridparent" >
        <Box padding = "240px 0px 0px 95px" style={{position: "absolute" }}>
        <div><SquareLegend/></div>
        </Box>
        <Box padding = "240px 0px 0px 65px" style={{position: "absolute" }} >
        <div><SquareText/></div>
        </Box>
        <Box   padding="0px 200px 35px 00px" border={0} style={{position: "absolute", transform: 'rotate(180deg)'}}>
            <div><RightVertBar/></div>
        </Box>
        <Box padding="60px 12px 50px 550px" style={{position: "absolute" }}>
        <div><RibHeatGrid/></div>
        </Box>

        <Box padding="60px 12px 0px 760px" style={{position: "absolute" }}>
        <div><RightRibHeatGrid/></div>
        </Box>
        <Box padding="25px 0px 0px 950px" style={{position: "absolute" }}>
            <div><LeftVertBar/></div>
        </Box>
        
        <Box   class = "verticleright" border={0} style={{transform: 'rotate(90deg)'}}>
        <div><RightHorBar/></div>
        </Box>
        
        <Box   class = "verticleleft" border={0} style={{ transform: 'rotate(90deg)'}}>
            <div><LeftHorBar/></div>
        </Box>
        </Box>
        </div>
    );}
}

export  default  class  Example  extends  React.Component {
render() {
   return (
     <div>
       <Box class = "tabs">
         <CoolTabs
           tabKey={'1'}
           style={{ width:  1400, height:  1800, background:  'white' }}
           activeTabStyle={{ background:  '#FFFEE9', color:  '#963A2F'  }}
           unActiveTabStyle={{ background:  '#D0F0C0', color:  '#963A2F' }}
           activeLeftTabBorderBottomStyle={{ background:  '#963A2F', height:  4 }}
           activeRightTabBorderBottomStyle={{ background:  '#963A2F', height:  4 }}
           tabsBorderBottomStyle={{ background:  '#D0F0C0', height:  4 }}
           leftContentStyle={{ background:  '#FFFEE9' }}
           rightContentStyle={{ background:  '#FFFEE9' }}
           leftTabTitle={'Heat Map Grid'}
           rightTabTitle={'Heat Map Image'}
           leftContent={<Content1/>}
           rightContent={<Content2/>}
           contentTransitionStyle={'transform 0.6s ease-in'}
           borderTransitionStyle={'all 0.6s ease-in'}/>
     </Box>
     </div>
);
}}



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

        <Box
          padding="904px 245px 942px 3px"
          border={0}
          style={{ position: "absolute", transform: "rotate(90deg)" }}
        >
          <div>
            <LeftHorBar rib_count={this.props.rib_count} />
          </div>
        </Box>
      </Box>
    );
  }
}

class Heatmap extends React.Component {
  state = {
    rib_count: "empty",
  };

  componentDidMount() {
    // console.log(this.props.location.state);
    // res.data.patients ? res.data.patients : res.data
    // var { ribCount } = "";
    // console.log("heatmap props", this.props);
    // if (this.props.rib_counts) {
    // ribCount = this.props.rib_counts;
    //   // } else if (this.props.location.state) {
    //   // ribCount = this.props.location.state;
    // } else {
    //   ribCount = {
    //     sternum: 0,
    //     lprib1: 0,
    //     lplrib1: 0,
    //     lalrib1: 0,
    //     lprib2: 0,
    //     lplrib2: 0,
    //     lalrib2: 0,
    //     larib2: 0,
    //     lprib3: 0,
    //     lplrib3: 0,
    //     lalrib3: 0,
    //     larib3: 0,
    //     lprib4: 0,
    //     lplrib4: 0,
    //     lalrib4: 0,
    //     larib4: 0,
    //     lprib5: 0,
    //     lplrib5: 0,
    //     lalrib5: 0,
    //     larib5: 0,
    //     lprib6: 0,
    //     lplrib6: 0,
    //     lalrib6: 0,
    //     larib6: 0,
    //     lprib7: 0,
    //     lplrib7: 0,
    //     lalrib7: 0,
    //     larib7: 0,
    //     lprib8: 0,
    //     lplrib8: 0,
    //     lalrib8: 0,
    //     larib8: 0,
    //     lprib9: 0,
    //     lplrib9: 0,
    //     lalrib9: 0,
    //     larib9: 0,
    //     lprib10: 0,
    //     lplrib10: 0,
    //     lalrib10: 0,
    //     larib10: 0,
    //     lprib11: 0,
    //     lplrib11: 0,
    //     lalrib11: 0,
    //     lprib12: 0,
    //     lplrib12: 0,
    //     lalrib12: 0,
    //     rprib1: 0,
    //     rplrib1: 0,
    //     ralrib1: 0,
    //     rprib2: 0,
    //     rplrib2: 0,
    //     ralrib2: 0,
    //     rarib2: 0,
    //     rprib3: 0,
    //     rplrib3: 0,
    //     ralrib3: 0,
    //     rarib3: 0,
    //     rprib4: 0,
    //     rplrib4: 0,
    //     ralrib4: 0,
    //     rarib4: 0,
    //     rprib5: 0,
    //     rplrib5: 0,
    //     ralrib5: 0,
    //     rarib5: 0,
    //     rprib6: 0,
    //     rplrib6: 0,
    //     ralrib6: 0,
    //     rarib6: 0,
    //     rprib7: 0,
    //     rplrib7: 0,
    //     ralrib7: 0,
    //     rarib7: 0,
    //     rprib8: 0,
    //     rplrib8: 0,
    //     ralrib8: 0,
    //     rarib8: 0,
    //     rprib9: 0,
    //     rplrib9: 0,
    //     ralrib9: 0,
    //     rarib9: 0,
    //     rprib10: 0,
    //     rplrib10: 0,
    //     ralrib10: 0,
    //     rarib10: 0,
    //     rprib11: 0,
    //     rplrib11: 0,
    //     ralrib11: 0,
    //     rprib12: 0,
    //     rplrib12: 0,
    //     ralrib12: 0,
    //   };
    // }
    // var ribCount = JSON.parse(ribCount);
    // // console.log("LPRIB1", ribCount["lprib1"]);
    // this.setState({ rib_count: ribCount });
  }

  render() {
    // console.log("render rib count", this.state.rib_count)
    // var ribCount = this.props.rib_counts;
    // ribCount = JSON.parse(ribCount);
    var ribCount = (ribCount = {
      sternum: 0,
      lprib1: 0,
      lplrib1: 0,
      lalrib1: 0,
      lprib2: 0,
      lplrib2: 0,
      lalrib2: 0,
      larib2: 0,
      lprib3: 0,
      lplrib3: 0,
      lalrib3: 0,
      larib3: 0,
      lprib4: 0,
      lplrib4: 0,
      lalrib4: 0,
      larib4: 0,
      lprib5: 0,
      lplrib5: 0,
      lalrib5: 0,
      larib5: 0,
      lprib6: 0,
      lplrib6: 0,
      lalrib6: 0,
      larib6: 0,
      lprib7: 0,
      lplrib7: 0,
      lalrib7: 0,
      larib7: 0,
      lprib8: 0,
      lplrib8: 0,
      lalrib8: 0,
      larib8: 0,
      lprib9: 0,
      lplrib9: 0,
      lalrib9: 0,
      larib9: 0,
      lprib10: 0,
      lplrib10: 0,
      lalrib10: 0,
      larib10: 0,
      lprib11: 0,
      lplrib11: 0,
      lalrib11: 0,
      lprib12: 0,
      lplrib12: 0,
      lalrib12: 0,
      rprib1: 0,
      rplrib1: 0,
      ralrib1: 0,
      rprib2: 0,
      rplrib2: 0,
      ralrib2: 0,
      rarib2: 0,
      rprib3: 0,
      rplrib3: 0,
      ralrib3: 0,
      rarib3: 0,
      rprib4: 0,
      rplrib4: 0,
      ralrib4: 0,
      rarib4: 0,
      rprib5: 0,
      rplrib5: 0,
      ralrib5: 0,
      rarib5: 0,
      rprib6: 0,
      rplrib6: 0,
      ralrib6: 0,
      rarib6: 0,
      rprib7: 0,
      rplrib7: 0,
      ralrib7: 0,
      rarib7: 0,
      rprib8: 0,
      rplrib8: 0,
      ralrib8: 0,
      rarib8: 0,
      rprib9: 0,
      rplrib9: 0,
      ralrib9: 0,
      rarib9: 0,
      rprib10: 0,
      rplrib10: 0,
      ralrib10: 0,
      rarib10: 0,
      rprib11: 0,
      rplrib11: 0,
      ralrib11: 0,
      rprib12: 0,
      rplrib12: 0,
      ralrib12: 0,
    });
    if (this.props.rib_counts) {
      ribCount = this.props.rib_counts;
      ribCount = JSON.parse(ribCount);
    }
    return (
      <div>
        {/* rib count variable {console.log(ribCount)} */}
        {/* <pre>{JSON.stringify(ribCount, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(this.state.rib_count, null, 2)}</pre> */}
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
            leftTabTitle={"Heat Map Image"}
            rightTabTitle={"Heat Map Grid"}
            // leftContent={<Content1 rib_count={this.state.rib_count} />}
            // rightContent={<Content2 rib_count={this.state.rib_count} />}
            leftContent={<Content1 rib_count={ribCount} />}
            rightContent={<Content2 rib_count={ribCount} />}
            contentTransitionStyle={"transform 0.6s ease-in"}
            borderTransitionStyle={"all 0.6s ease-in"}
          />
        </Box>
      </div>
    );
  }
}

export default Heatmap;
