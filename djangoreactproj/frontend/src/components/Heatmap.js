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

class Content1 extends Component {
  render() {
    // console.log("context1", this.props.rib_count);
    return (
      <Box padding="50px 0px 0px 300px">
        {/* <RibHeatImage rib_count={this.props.rib_count} /> */}
      </Box>
    );
  }
}

class Content2 extends Component {
  render() {
    // console.log("context2", this.props.rib_count);
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
            <LeftVertBar rib_count={this.props.rib_count} />
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
            <LeftHorBar rib_count={this.props.rib_count} />
          </div>
        </Box>
      </Box>
    );
  }
}

export default class Example extends React.Component {
  state = {
    rib_count: "empty",
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
