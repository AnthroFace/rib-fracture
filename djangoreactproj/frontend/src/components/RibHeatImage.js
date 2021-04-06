import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import { rightRibValues } from "./RibHeatGrid";
import { leftRibValues } from "./RightRibHeatGrid";
import HeatMap from "react-heatmap-grid";

var URL = "/images/rib_image.png";

class RibImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredArea: null,
      msg: null,
      moveMsg: null,
    };
  }
  load = () => {
    // this.setState({ msg: "Hover ribs to see total breaks for each area" });
  };
  clicked = (area) => {
    // this.setState({
    //    msg: `You clicked on ${area.name}`,
    // });
    //this.props.onSelectLocation(area.name);
  };
  clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    // this.setState({
    //   msg: `Please select a rib section`,
    // });
  };
  // moveOnImage = (evt) => {
  //   const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
  //   this.setState({
  //     moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`,
  //   });
  // };
  enterArea = (area) => {
    // this.setState({
    //   hoveredArea: area,
    //   msg: `Rib ${area.name} has ${area.breakValue} break(s)`,
    // });
  };
  leaveArea = (area) => {
    // this.setState({
    //   hoveredArea: null,
    //   msg: null,
    // });
  };
  // moveOnArea(area, evt) {
  // 	const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
  // 	this.setState({
  // 		moveMsg: `${area.name}`
  // 	});
  // };

  getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  render() {
    var d = this.props.rib_count;
    console.log("ribheatimage render", d);

    //right rib variables
    var nums = [
      d["rplrib1"],
      d["ralrib1"],
      d["rprib1"],
      d["rprib2"],
      d["rplrib2"],
      d["ralrib2"],
      d["rarib2"],
      d["rprib3"],
      d["rplrib3"],
      d["ralrib3"],
      d["rarib3"],
      d["rprib4"],
      d["rplrib4"],
      d["ralrib4"],
      d["rarib4"],
      d["rprib5"],
      d["rplrib5"],
      d["ralrib5"],
      d["rarib5"],
      d["rprib6"],
      d["rplrib6"],
      d["ralrib6"],
      d["rarib6"],
      d["rprib7"],
      d["rplrib7"],
      d["ralrib7"],
      d["rarib7"],
      d["rprib8"],
      d["rplrib8"],
      d["ralrib8"],
      d["rarib8"],
      d["rprib9"],
      d["rplrib9"],
      d["ralrib9"],
      d["rarib9"],
      d["rprib10"],
      d["rplrib10"],
      d["ralrib10"],
      d["rarib10"],
      d["rplrib11"],
      d["ralrib11"],
      d["rprib11"],
      d["rplrib12"],
      d["ralrib12"],
      d["rprib12"],
      //left rib variables
      d["lprib1"],
      d["lalrib1"],
      d["lplrib1"],
      d["larib2"],
      d["lalrib2"],
      d["lplrib2"],
      d["lprib2"],
      d["larib3"],
      d["lalrib3"],
      d["lplrib3"],
      d["lprib3"],
      d["larib4"],
      d["lalrib4"],
      d["lplrib4"],
      d["lprib4"],
      d["larib5"],
      d["lalrib5"],
      d["lplrib5"],
      d["lprib5"],
      d["larib6"],
      d["lalrib6"],
      d["lplrib6"],
      d["lprib6"],
      d["larib7"],
      d["lalrib7"],
      d["lplrib7"],
      d["lprib7"],
      d["larib8"],
      d["lalrib8"],
      d["lplrib8"],
      d["lprib8"],
      d["larib9"],
      d["lalrib9"],
      d["lplrib9"],
      d["lprib9"],
      d["larib10"],
      d["lalrib10"],
      d["lplrib10"],
      d["lprib10"],
      d["lprib11"],
      d["lalrib11"],
      d["lplrib11"],
      d["lprib12"],
      d["lalrib12"],
      d["lplrib12"],
    ];
    var maxValue = Math.max.apply(Math, nums);
    var minValue = Math.min.apply(Math, nums);

    //5, 10, 15, 20, 25 radius
    //darkest red "rgb(220,20,60)"
    //next darkest "rgb(255,99,71)"
    //third darkest "rgb(255,127,80)"
    //second lightest "rgb(233,150,122)"
    //lightest red "rgb(255,228,196)"

    var MAP = {
      name: "my-map",
      areas: [
        // rib 1      //need to check naming on ribs with 3 sections
        {
          name: "r.al.rib.1",
          breakValue: d["ralrib1"],
          shape: "circle",
          coords: [
            163,
            47,
            30 * (1 - (maxValue - d["ralrib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib1"]) / (maxValue - minValue)
          })`,
          //preFillColor: "rgb(255,99,71)"
        },
        {
          name: "r.pl.rib.1",
          breakValue: d["rplrib1"],
          shape: "circle",
          coords: [
            205,
            52,
            30 * (1 - (maxValue - d["rplrib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib1"]) / (maxValue - minValue)
          })`,
          // preFillColor: "rgb(255,228,196)"
        },
        {
          name: "r.p.rib.1",
          breakValue: d["rprib1"],
          shape: "circle",
          coords: [
            257,
            50,
            30 * (1 - (maxValue - d["rprib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib1"]) / (maxValue - minValue)
          })`,
          // preFillColor: "rgb(233,150,122)"
        },
        {
          name: "l.p.rib.1",
          breakValue: d["larib1"],
          shape: "circle",
          coords: [
            330,
            51,
            30 * (1 - (maxValue - d["larib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib1"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.1",
          breakValue: d["lplrib1"],
          shape: "circle",
          coords: [
            381,
            53,
            30 * (1 - (maxValue - d["lplrib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib1"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.1",
          breakValue: d["lalrib1"],
          shape: "circle",
          coords: [
            425,
            52,
            30 * (1 - (maxValue - d["lalrib1"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib1"]) / (maxValue - minValue)
          })`,
        },
        // rib 2
        {
          name: "r.a.rib.2",
          breakValue: d["rarib2"],
          shape: "circle",
          coords: [
            113,
            89,
            30 * (1 - (maxValue - d["rarib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.2",
          breakValue: d["ralrib2"],
          shape: "circle",
          coords: [
            152,
            96,
            30 * (1 - (maxValue - d["ralrib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.2",
          breakValue: d["rplrib2"],
          shape: "circle",
          coords: [
            197,
            99,
            30 * (1 - (maxValue - d["rplrib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.2",
          breakValue: d["rprib2"],
          shape: "circle",
          coords: [
            252,
            99,
            30 * (1 - (maxValue - d["rprib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib2"]) / (maxValue - minValue)
          })`,
        },

        {
          name: "l.p.rib.2",
          breakValue: d["lprib2"],
          shape: "circle",
          coords: [
            338,
            99,
            30 * (1 - (maxValue - d["lprib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.2",
          breakValue: d["lplrib2"],
          shape: "circle",
          coords: [
            390,
            103,
            30 * (1 - (maxValue - d["lplrib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.2",
          breakValue: d["lalrib2"],
          shape: "circle",
          coords: [
            435,
            102,
            30 * (1 - (maxValue - d["lalrib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib2"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.2",
          breakValue: d["larib2"],
          shape: "circle",
          coords: [
            477,
            97,
            30 * (1 - (maxValue - d["larib2"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib2"]) / (maxValue - minValue)
          })`,
        },

        // rib 3
        {
          name: "r.a.rib.3",
          breakValue: d["rarib3"],
          shape: "circle",
          coords: [
            100,
            138,
            30 * (1 - (maxValue - d["rarib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.3",
          breakValue: d["ralrib3"],
          shape: "circle",
          coords: [
            145,
            139,
            30 * (1 - (maxValue - d["ralrib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.3",
          breakValue: d["rplrib3"],
          shape: "circle",
          coords: [
            193,
            142,
            30 * (1 - (maxValue - d["rplrib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.3",
          breakValue: d["rprib3"],
          shape: "circle",
          coords: [
            254,
            144,
            30 * (1 - (maxValue - d["rprib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.3",
          breakValue: d["lprib3"],
          shape: "circle",
          coords: [
            340,
            144,
            30 * (1 - (maxValue - d["lprib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.3",
          breakValue: d["lplrib3"],
          shape: "circle",
          coords: [
            395,
            146,
            30 * (1 - (maxValue - d["lplrib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.3",
          breakValue: d["lalrib3"],
          shape: "circle",
          coords: [
            444,
            145,
            30 * (1 - (maxValue - d["lalrib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib3"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.3",
          breakValue: d["larib3"],
          shape: "circle",
          coords: [
            488,
            145,
            30 * (1 - (maxValue - d["larib3"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib3"]) / (maxValue - minValue)
          })`,
        },

        // rib 4
        {
          name: "r.a.rib.4",
          breakValue: d["rarib4"],
          shape: "circle",
          coords: [
            90,
            186,
            30 * (1 - (maxValue - d["rarib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.4",
          breakValue: d["ralrib4"],
          shape: "circle",
          coords: [
            140,
            189,
            30 * (1 - (maxValue - d["ralrib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.4",
          breakValue: d["rplrib4"],
          shape: "circle",
          coords: [
            190,
            196,
            30 * (1 - (maxValue - d["rplrib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.4",
          breakValue: d["rprib4"],
          shape: "circle",
          coords: [
            252,
            192,
            30 * (1 - (maxValue - d["rprib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.4",
          breakValue: d["lprib4"],
          shape: "circle",
          coords: [
            337,
            193,
            30 * (1 - (maxValue - d["lprib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.4",
          breakValue: d["lplrib4"],
          shape: "circle",
          coords: [
            398,
            199,
            30 * (1 - (maxValue - d["lplrib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.4",
          breakValue: d["lalrib4"],
          shape: "circle",
          coords: [
            447,
            193,
            30 * (1 - (maxValue - d["lalrib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib4"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.4",
          breakValue: d["larib4"],
          shape: "circle",
          coords: [
            496,
            194,
            30 * (1 - (maxValue - d["larib4"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib4"]) / (maxValue - minValue)
          })`,
        },

        // rib 5
        {
          name: "r.a.rib.5",
          breakValue: d["rarib5"],
          shape: "circle",
          coords: [
            70,
            240,
            30 * (1 - (maxValue - d["rarib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.5",
          breakValue: d["ralrib5"],
          shape: "circle",
          coords: [
            132,
            243,
            30 * (1 - (maxValue - d["ralrib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.5",
          breakValue: d["rplrib5"],
          shape: "circle",
          coords: [
            187,
            247,
            30 * (1 - (maxValue - d["rplrib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.5",
          breakValue: d["rprib5"],
          shape: "circle",
          coords: [
            247,
            245,
            30 * (1 - (maxValue - d["rprib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.5",
          breakValue: d["lprib5"],
          shape: "circle",
          coords: [
            338,
            245,
            30 * (1 - (maxValue - d["lprib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.5",
          breakValue: d["lplrib5"],
          shape: "circle",
          coords: [
            400,
            249,
            30 * (1 - (maxValue - d["lplrib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.5",
          breakValue: d["lalrib5"],
          shape: "circle",
          coords: [
            455,
            248,
            30 * (1 - (maxValue - d["lalrib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib5"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.5",
          breakValue: d["larib5"],
          shape: "circle",
          coords: [
            505,
            247,
            30 * (1 - (maxValue - d["larib5"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib5"]) / (maxValue - minValue)
          })`,
        },

        // rib 6
        {
          name: "r.a.rib.6",
          breakValue: d["rarib6"],
          shape: "circle",
          coords: [
            66,
            292,
            30 * (1 - (maxValue - d["rarib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.6",
          breakValue: d["ralrib6"],
          shape: "circle",
          coords: [
            132,
            294,
            30 * (1 - (maxValue - d["ralrib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.6",
          breakValue: d["rplrib6"],
          shape: "circle",
          coords: [
            187,
            298,
            30 * (1 - (maxValue - d["rplrib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.6",
          breakValue: d["rprib6"],
          shape: "circle",
          coords: [
            247,
            294,
            30 * (1 - (maxValue - d["rprib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.6",
          breakValue: d["lprib6"],
          shape: "circle",
          coords: [
            338,
            294,
            30 * (1 - (maxValue - d["lprib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.6",
          breakValue: d["lplrib6"],
          shape: "circle",
          coords: [
            400,
            299,
            30 * (1 - (maxValue - d["lplrib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: "red",
        },
        {
          name: "l.al.rib.6",
          breakValue: d["lalrib6"],
          shape: "circle",
          coords: [
            455,
            298,
            30 * (1 - (maxValue - d["lalrib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib6"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.6",
          breakValue: d["larib6"],
          shape: "circle",
          coords: [
            507,
            299,
            30 * (1 - (maxValue - d["larib6"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib6"]) / (maxValue - minValue)
          })`,
        },

        // rib 7
        {
          name: "r.a.rib.7",
          breakValue: d["rarib7"],
          shape: "circle",
          coords: [
            69,
            343,
            30 * (1 - (maxValue - d["rarib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.7",
          breakValue: d["ralrib7"],
          shape: "circle",
          coords: [
            128,
            344,
            30 * (1 - (maxValue - d["ralrib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.7",
          breakValue: d["rplrib7"],
          shape: "circle",
          coords: [
            180,
            348,
            30 * (1 - (maxValue - d["rplrib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.7",
          breakValue: d["rprib7"],
          shape: "circle",
          coords: [
            247,
            344,
            30 * (1 - (maxValue - d["rprib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.7",
          breakValue: d["lprib7"],
          shape: "circle",
          coords: [
            338,
            344,
            30 * (1 - (maxValue - d["lprib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.7",
          breakValue: d["lplrib7"],
          shape: "circle",
          coords: [
            408,
            350,
            30 * (1 - (maxValue - d["lplrib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.7",
          breakValue: d["lalrib7"],
          shape: "circle",
          coords: [
            462,
            349,
            30 * (1 - (maxValue - d["lalrib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib7"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.7",
          breakValue: d["larib7"],
          shape: "circle",
          coords: [
            506,
            350,
            30 * (1 - (maxValue - d["larib7"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib7"]) / (maxValue - minValue)
          })`,
        },

        // rib 8
        {
          name: "r.a.rib.8",
          breakValue: d["rarib8"],
          shape: "circle",
          coords: [
            76,
            392,
            30 * (1 - (maxValue - d["rarib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.8",
          breakValue: d["ralrib8"],
          shape: "circle",
          coords: [
            128,
            395,
            30 * (1 - (maxValue - d["ralrib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.8",
          breakValue: d["rplrib8"],
          shape: "circle",
          coords: [
            185,
            397,
            30 * (1 - (maxValue - d["rplrib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.8",
          breakValue: d["rprib8"],
          shape: "circle",
          coords: [
            249,
            396,
            30 * (1 - (maxValue - d["rprib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.8",
          breakValue: d["lprib8"],
          shape: "circle",
          coords: [
            338,
            397,
            30 * (1 - (maxValue - d["lprib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.8",
          breakValue: d["lplrib8"],
          shape: "circle",
          coords: [
            404,
            401,
            30 * (1 - (maxValue - d["lplrib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.8",
          breakValue: d["lalrib8"],
          shape: "circle",
          coords: [
            461,
            399,
            30 * (1 - (maxValue - d["lalrib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib8"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.8",
          breakValue: d["larib8"],
          shape: "circle",
          coords: [
            508,
            398,
            30 * (1 - (maxValue - d["larib8"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib8"]) / (maxValue - minValue)
          })`,
        },

        // rib 9
        {
          name: "r.a.rib.9",
          breakValue: d["rarib9"],
          shape: "circle",
          coords: [
            90,
            444,
            30 * (1 - (maxValue - d["rarib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.9",
          breakValue: d["ralrib9"],
          shape: "circle",
          coords: [
            136,
            443,
            30 * (1 - (maxValue - d["ralrib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.9",
          breakValue: d["rplrib9"],
          shape: "circle",
          coords: [
            192,
            446,
            30 * (1 - (maxValue - d["rplrib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.9",
          breakValue: d["rprib9"],
          shape: "circle",
          coords: [
            251,
            444,
            30 * (1 - (maxValue - d["rprib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.9",
          breakValue: d["lprib9"],
          shape: "circle",
          coords: [
            334,
            444,
            30 * (1 - (maxValue - d["lprib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.9",
          breakValue: d["lplrib9"],
          shape: "circle",
          coords: [
            396,
            447,
            30 * (1 - (maxValue - d["lplrib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.9",
          breakValue: d["lalrib9"],
          shape: "circle",
          coords: [
            452,
            446,
            30 * (1 - (maxValue - d["lalrib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib9"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.9",
          breakValue: d["larib9"],
          shape: "circle",
          coords: [
            494,
            449,
            30 * (1 - (maxValue - d["larib9"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib9"]) / (maxValue - minValue)
          })`,
        },

        // rib 10
        {
          name: "r.a.rib.10",
          breakValue: d["rarib10"],
          shape: "circle",
          coords: [
            105,
            492,
            30 * (1 - (maxValue - d["rarib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rarib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.10",
          breakValue: d["ralrib10"],
          shape: "circle",
          coords: [
            148,
            489,
            30 * (1 - (maxValue - d["ralrib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.10",
          breakValue: d["rplrib10"],
          shape: "circle",
          coords: [
            199,
            491,
            30 * (1 - (maxValue - d["rplrib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.10",
          breakValue: d["rprib10"],
          shape: "circle",
          coords: [
            256,
            488,
            30 * (1 - (maxValue - d["rprib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.10",
          breakValue: d["lprib10"],
          shape: "circle",
          coords: [
            330,
            488,
            30 * (1 - (maxValue - d["lprib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lprib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.10",
          breakValue: d["lplrib10"],
          shape: "circle",
          coords: [
            388,
            493,
            30 * (1 - (maxValue - d["lplrib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.10",
          breakValue: d["lalrib10"],
          shape: "circle",
          coords: [
            444,
            491,
            30 * (1 - (maxValue - d["lalrib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib10"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.10",
          breakValue: d["larib10"],
          shape: "circle",
          coords: [
            483,
            496,
            30 * (1 - (maxValue - d["larib10"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib10"]) / (maxValue - minValue)
          })`,
        },

        // rib 11
        {
          name: "r.al.rib.11",
          breakValue: d["ralrib11"],
          shape: "circle",
          coords: [
            155,
            538,
            30 * (1 - (maxValue - d["ralrib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib11"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.11",
          breakValue: d["rplrib11"],
          shape: "circle",
          coords: [
            210,
            537,
            30 * (1 - (maxValue - d["rplrib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib11"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.11",
          breakValue: d["rprib11"],
          shape: "circle",
          coords: [
            260,
            536,
            30 * (1 - (maxValue - d["rprib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib11"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.11",
          breakValue: d["larib11"],
          shape: "circle",
          coords: [
            324,
            535,
            30 * (1 - (maxValue - d["larib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib11"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.11",
          breakValue: d["lplrib11"],
          shape: "circle",
          coords: [
            375,
            538,
            30 * (1 - (maxValue - d["lplrib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib11"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.11",
          breakValue: d["lalrib11"],
          shape: "circle",
          coords: [
            430,
            540,
            30 * (1 - (maxValue - d["lalrib11"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib11"]) / (maxValue - minValue)
          })`,
        },

        // rib 12
        {
          name: "r.al.rib.12",
          breakValue: d["ralrib12"],
          shape: "circle",
          coords: [
            168,
            582,
            30 * (1 - (maxValue - d["ralrib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["ralrib12"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.12",
          breakValue: d["rplrib12"],
          shape: "circle",
          coords: [
            216,
            582,
            30 * (1 - (maxValue - d["rplrib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rplrib12"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.12",
          breakValue: d["rprib12"],
          shape: "circle",
          coords: [
            257,
            581,
            30 * (1 - (maxValue - d["rprib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["rprib12"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.12",
          breakValue: d["larib12"],
          shape: "circle",
          coords: [
            326,
            581,
            30 * (1 - (maxValue - d["larib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["larib12"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.12",
          breakValue: d["lplrib12"],
          shape: "circle",
          coords: [
            373,
            583,
            30 * (1 - (maxValue - d["lplrib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lplrib12"]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.12",
          breakValue: d["lalrib12"],
          shape: "circle",
          coords: [
            416,
            585,
            30 * (1 - (maxValue - d["lalrib12"]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - d["lalrib12"]) / (maxValue - minValue)
          })`,
        },
      ],
    };
    console.log(MAP);

    return (
      <div className="grid">
        <div className="presenter">
          <div style={{ position: "relative" }}>
            <ImageMapper
              width={550}
              height={625}
              //imgWidth="100"
              src={URL}
              map={MAP}
              onLoad={this.load}
              onClick={(area) => this.clicked(area)}
              onMouseEnter={(area) => this.enterArea(area)}
              onMouseLeave={(area) => this.leaveArea(area)}
              // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              onImageClick={(evt) => this.clickedOutside(evt)}
              //onImageMouseMove={(evt) => this.moveOnImage(evt)}
              lineWidth={4}
              strokeColor={"white"}
            />
            {this.state.hoveredArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}
              >
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            )}
          </div>
          <pre className="message">
            {this.state.msg ? this.state.msg : null}
          </pre>
          <pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
        </div>
      </div>
    );
  }
}

export default RibImage;
