import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import RibHeatGrid from './RibHeatGrid';


var nums = [RibHeatGrid.rplrib1, RibHeatGrid.ralrib1, RibHeatGrid.rarib1, RibHeatGrid.rprib2, RibHeatGrid.rplrib2, RibHeatGrid.ralrib2, RibHeatGrid.rarib2, RibHeatGrid.rprib3, RibHeatGrid.rplrib3, RibHeatGrid.ralrib3, RibHeatGrid.rarib3,
  RibHeatGrid.rprib4, RibHeatGrid.rplrib4, RibHeatGrid.ralrib4, RibHeatGrid.rarib4, RibHeatGrid.rprib5, RibHeatGrid.rplrib5, RibHeatGrid.ralrib5, RibHeatGrid.rarib5, RibHeatGrid.rprib6, RibHeatGrid.rplrib6, RibHeatGrid.ralrib6, RibHeatGrid.rarib6, 
  RibHeatGrid.rprib7, RibHeatGrid.rplrib7, RibHeatGrid.ralrib7, RibHeatGrid.rarib7, RibHeatGrid.rprib8, RibHeatGrid.rplrib8, RibHeatGrid.ralrib8, RibHeatGrid.rarib8, RibHeatGrid.rprib9, RibHeatGrid.rplrib9, RibHeatGrid.ralrib9, RibHeatGrid.rarib9,
  RibHeatGrid.rprib10, RibHeatGrid.rplrib10, RibHeatGrid.ralrib10, RibHeatGrid.rarib10, RibHeatGrid.rplrib11, RibHeatGrid.ralrib11, RibHeatGrid.rarib11, RibHeatGrid.rplrib12, RibHeatGrid.ralrib12, RibHeatGrid.rarib12
, //left side
RibHeatGrid.lplrib1, RibHeatGrid.lalrib1, RibHeatGrid.larib1, RibHeatGrid.lprib2, RibHeatGrid.lplrib2, RibHeatGrid.lalrib2, RibHeatGrid.larib2, RibHeatGrid.lprib3, RibHeatGrid.lplrib3, RibHeatGrid.lalrib3, RibHeatGrid.larib3,
  RibHeatGrid.lprib4, RibHeatGrid.lplrib4, RibHeatGrid.lalrib4, RibHeatGrid.larib4, RibHeatGrid.lprib5, RibHeatGrid.lplrib5, RibHeatGrid.lalrib5, RibHeatGrid.larib5, RibHeatGrid.lprib6, RibHeatGrid.lplrib6, RibHeatGrid.lalrib6, RibHeatGrid.larib6, 
  RibHeatGrid.lprib7, RibHeatGrid.lplrib7, RibHeatGrid.lalrib7, RibHeatGrid.larib7, RibHeatGrid.lprib8, RibHeatGrid.lplrib8, RibHeatGrid.lalrib8, RibHeatGrid.larib8, RibHeatGrid.lprib9, RibHeatGrid.lplrib9, RibHeatGrid.lalrib9, RibHeatGrid.rarib9,
  RibHeatGrid.lprib10, RibHeatGrid.lplrib10, RibHeatGrid.lalrib10, RibHeatGrid.larib10, RibHeatGrid.plrib11, RibHeatGrid.lalrib11, RibHeatGrid.larib11, RibHeatGrid.lplrib12, RibHeatGrid.lalrib12, RibHeatGrid.larib12
];

var maxValue = Math.max.apply(null,nums);
var minValue = Math.min.apply(null, nums);

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
    this.setState({
      //  msg: `You clicked on ${area.name}`,
    });
    //this.props.onSelectLocation(area.name);
  };
  clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      msg: `Please select a rib section`,
    });
  };
  // moveOnImage = (evt) => {
  //   const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
  //   this.setState({
  //     moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`,
  //   });
  // };
  enterArea = (area) => {
    this.setState({
      hoveredArea: area,
      msg: `Rib ${area.name} has ${area.breakValue} break(s)`,
    });
  };
  leaveArea = (area) => {
    this.setState({
      hoveredArea: null,
      msg: null,
    });
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
      0,1,5,8,1,1,
      2,4,4,6,8,2,4,4,
      2,5,5,5,6,5,5,4,
      3,9,4,5,6,5,8,5,
      3,10,4,5,5,5,8,3,
      3,9,4,4,4,5,10,3,
      3,8,4,4,4,4,10,3,
      1,6,3,3,4,3,9,2,
      1,3,3,3,4,1,8,2,
      0,3,2,3,4,2,7,0,
      0,2,1,3,1,1,
      0,2,1,2,1,1,
      /*
      nums[1],
      d["ralrib1"],
      nums[2],
      nums[9],
      nums[8],
      nums[7],
      nums[6],
      nums[17],
      nums[16],
      nums[15],
      nums[14],
      nums[25],
      nums[24],
      nums[23],
      nums[22],
      nums[33],
      nums[32],
      nums[31],
      nums[30],
      nums[41],
      nums[40],
      nums[39],
      nums[38],
      nums[49],
      nums[48],
      nums[47],
      nums[46],
      nums[57],
      nums[56],
      nums[55],
      nums[54],
      nums[65],
      nums[64],
      nums[63],
      nums[62],
      nums[73],
      nums[72],
      nums[71],
      nums[70],
      nums[79],
      nums[78],
      nums[80],
      nums[85],
      nums[84],
      nums[86],
      //left rib variables
      d["lprib1"],
      nums[5],
      nums[4],
      nums[13],
      nums[12],
      nums[11],
      nums[10],
      nums[21],
      nums[20],
      nums[19],
      nums[18],
      nums[29],
      nums[28],
      nums[27],
      nums[26],
      nums[37],
      nums[36],
      nums[35],
      nums[34],
      nums[45],
      nums[44],
      nums[43],
      nums[42],
      nums[53],
      nums[52],
      nums[51],
      nums[50],
      nums[61],
      nums[60],
      nums[59],
      nums[58],
      nums[69],
      nums[68],
      nums[67],
      nums[66],
      nums[77],
      nums[76],
      nums[75],
      nums[74],
      d["lprib11"],
      nums[83],
      nums[82],
      d["lprib12"],
      nums[89],
      nums[88],*/

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
          breakValue: nums[0], //d["ralrib1"],
          shape: "circle",
          coords: [
            163,
            47,
            30 * (1 - (maxValue - nums[0]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[0]) / (maxValue - minValue)
          })`,
          //preFillColor: "rgb(255,99,71)"
        },
        {
          name: "r.pl.rib.1",
          breakValue: nums[1],
          shape: "circle",
          coords: [
            205,
            52,
            30 * (1 - (maxValue - nums[1]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[1]) / (maxValue - minValue)
          })`,
          // preFillColor: "rgb(255,228,196)"
        },
        {
          name: "r.p.rib.1",
          breakValue: nums[2],
          shape: "circle",
          coords: [
            257,
            50,
            30 * (1 - (maxValue - nums[2]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[2]) / (maxValue - minValue)
          })`,
          // preFillColor: "rgb(233,150,122)"
        },
        {
          name: "l.p.rib.1",
          breakValue: nums[3],
          shape: "circle",
          coords: [
            330,
            51,
            30 * (1 - (maxValue - nums[3]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[3]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.1",
          breakValue: nums[4],
          shape: "circle",
          coords: [
            381,
            53,
            30 * (1 - (maxValue - nums[4]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[4]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.1",
          breakValue: nums[5],
          shape: "circle",
          coords: [
            425,
            52,
            30 * (1 - (maxValue - nums[5]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[5]) / (maxValue - minValue)
          })`,
        },
        // rib 2
        {
          name: "r.a.rib.2",
          breakValue: nums[6],
          shape: "circle",
          coords: [
            113,
            89,
            30 * (1 - (maxValue - nums[6]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[6]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.2",
          breakValue: nums[7],
          shape: "circle",
          coords: [
            152,
            96,
            30 * (1 - (maxValue - nums[7]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[7]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.2",
          breakValue: nums[8],
          shape: "circle",
          coords: [
            197,
            99,
            30 * (1 - (maxValue - nums[8]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[8]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.2",
          breakValue: nums[9],
          shape: "circle",
          coords: [
            252,
            99,
            30 * (1 - (maxValue - nums[9]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[9]) / (maxValue - minValue)
          })`,
        },

        {
          name: "l.p.rib.2",
          breakValue: nums[10],
          shape: "circle",
          coords: [
            338,
            99,
            30 * (1 - (maxValue - nums[10]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[10]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.2",
          breakValue: nums[11],
          shape: "circle",
          coords: [
            390,
            103,
            30 * (1 - (maxValue - nums[11]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[11]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.2",
          breakValue: nums[12],
          shape: "circle",
          coords: [
            435,
            102,
            30 * (1 - (maxValue - nums[12]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[12]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.2",
          breakValue: nums[13],
          shape: "circle",
          coords: [
            477,
            97,
            30 * (1 - (maxValue - nums[13]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[13]) / (maxValue - minValue)
          })`,
        },

        // rib 3
        {
          name: "r.a.rib.3",
          breakValue: nums[14],
          shape: "circle",
          coords: [
            100,
            138,
            30 * (1 - (maxValue - nums[14]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[14]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.3",
          breakValue: nums[15],
          shape: "circle",
          coords: [
            145,
            139,
            30 * (1 - (maxValue - nums[15]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[15]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.3",
          breakValue: nums[16],
          shape: "circle",
          coords: [
            193,
            142,
            30 * (1 - (maxValue - nums[16]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[16]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.3",
          breakValue: nums[17],
          shape: "circle",
          coords: [
            254,
            144,
            30 * (1 - (maxValue - nums[17]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[17]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.3",
          breakValue: nums[18],
          shape: "circle",
          coords: [
            340,
            144,
            30 * (1 - (maxValue - nums[18]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[18]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.3",
          breakValue: nums[19],
          shape: "circle",
          coords: [
            395,
            146,
            30 * (1 - (maxValue - nums[19]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[19]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.3",
          breakValue: nums[20],
          shape: "circle",
          coords: [
            444,
            145,
            30 * (1 - (maxValue - nums[20]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[20]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.3",
          breakValue: nums[21],
          shape: "circle",
          coords: [
            488,
            145,
            30 * (1 - (maxValue - nums[21]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[21]) / (maxValue - minValue)
          })`,
        },

        // rib 4
        {
          name: "r.a.rib.4",
          breakValue: nums[22],
          shape: "circle",
          coords: [
            90,
            186,
            30 * (1 - (maxValue - nums[22]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[22]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.4",
          breakValue: nums[23],
          shape: "circle",
          coords: [
            140,
            189,
            30 * (1 - (maxValue - nums[23]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[23]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.4",
          breakValue: nums[24],
          shape: "circle",
          coords: [
            190,
            196,
            30 * (1 - (maxValue - nums[24]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[24]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.4",
          breakValue: nums[25],
          shape: "circle",
          coords: [
            252,
            192,
            30 * (1 - (maxValue - nums[25]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[25]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.4",
          breakValue: nums[26],
          shape: "circle",
          coords: [
            337,
            193,
            30 * (1 - (maxValue - nums[26]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[26]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.4",
          breakValue: nums[27],
          shape: "circle",
          coords: [
            398,
            199,
            30 * (1 - (maxValue - nums[27]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[27]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.4",
          breakValue: nums[28],
          shape: "circle",
          coords: [
            447,
            193,
            30 * (1 - (maxValue - nums[28]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[28]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.4",
          breakValue: nums[29],
          shape: "circle",
          coords: [
            496,
            194,
            30 * (1 - (maxValue - nums[29]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[29]) / (maxValue - minValue)
          })`,
        },

        // rib 5
        {
          name: "r.a.rib.5",
          breakValue: nums[30],
          shape: "circle",
          coords: [
            70,
            240,
            30 * (1 - (maxValue - nums[30]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[30]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.5",
          breakValue: nums[31],
          shape: "circle",
          coords: [
            132,
            243,
            30 * (1 - (maxValue - nums[31]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[31]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.5",
          breakValue: nums[32],
          shape: "circle",
          coords: [
            187,
            247,
            30 * (1 - (maxValue - nums[32]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[32]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.5",
          breakValue: nums[33],
          shape: "circle",
          coords: [
            247,
            245,
            30 * (1 - (maxValue - nums[33]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[33]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.5",
          breakValue: nums[34],
          shape: "circle",
          coords: [
            338,
            245,
            30 * (1 - (maxValue - nums[34]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[34]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.5",
          breakValue: nums[35],
          shape: "circle",
          coords: [
            400,
            249,
            30 * (1 - (maxValue - nums[35]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[35]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.5",
          breakValue: nums[36],
          shape: "circle",
          coords: [
            455,
            248,
            30 * (1 - (maxValue - nums[36]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[36]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.5",
          breakValue: nums[37],
          shape: "circle",
          coords: [
            505,
            247,
            30 * (1 - (maxValue - nums[37]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[37]) / (maxValue - minValue)
          })`,
        },

        // rib 6
        {
          name: "r.a.rib.6",
          breakValue: nums[38],
          shape: "circle",
          coords: [
            66,
            292,
            30 * (1 - (maxValue - nums[38]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[38]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.6",
          breakValue: nums[39],
          shape: "circle",
          coords: [
            132,
            294,
            30 * (1 - (maxValue - nums[39]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[39]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.6",
          breakValue: nums[40],
          shape: "circle",
          coords: [
            187,
            298,
            30 * (1 - (maxValue - nums[40]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[40]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.6",
          breakValue: nums[41],
          shape: "circle",
          coords: [
            247,
            294,
            30 * (1 - (maxValue - nums[41]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[41]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.6",
          breakValue: nums[42],
          shape: "circle",
          coords: [
            338,
            294,
            30 * (1 - (maxValue - nums[42]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[42]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.6",
          breakValue: nums[43],
          shape: "circle",
          coords: [
            400,
            299,
            30 * (1 - (maxValue - nums[43]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[43]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.6",
          breakValue: nums[44],
          shape: "circle",
          coords: [
            455,
            298,
            30 * (1 - (maxValue - nums[44]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[44]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.6",
          breakValue: nums[45],
          shape: "circle",
          coords: [
            507,
            299,
            30 * (1 - (maxValue - nums[45]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[45]) / (maxValue - minValue)
          })`,
        },

        // rib 7
        {
          name: "r.a.rib.7",
          breakValue: nums[46],
          shape: "circle",
          coords: [
            69,
            343,
            30 * (1 - (maxValue - nums[46]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[46]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.7",
          breakValue: nums[47],
          shape: "circle",
          coords: [
            128,
            344,
            30 * (1 - (maxValue - nums[47]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[47]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.7",
          breakValue: nums[48],
          shape: "circle",
          coords: [
            180,
            348,
            30 * (1 - (maxValue - nums[48]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[48]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.7",
          breakValue: nums[49],
          shape: "circle",
          coords: [
            247,
            344,
            30 * (1 - (maxValue - nums[49]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[49]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.7",
          breakValue: nums[50],
          shape: "circle",
          coords: [
            338,
            344,
            30 * (1 - (maxValue - nums[50]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[50]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.7",
          breakValue: nums[51],
          shape: "circle",
          coords: [
            408,
            350,
            30 * (1 - (maxValue - nums[51]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[51]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.7",
          breakValue: nums[52],
          shape: "circle",
          coords: [
            462,
            349,
            30 * (1 - (maxValue - nums[52]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[52]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.7",
          breakValue: nums[53],
          shape: "circle",
          coords: [
            506,
            350,
            30 * (1 - (maxValue - nums[53]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[53]) / (maxValue - minValue)
          })`,
        },

        // rib 8
        {
          name: "r.a.rib.8",
          breakValue: nums[54],
          shape: "circle",
          coords: [
            76,
            392,
            30 * (1 - (maxValue - nums[54]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[54]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.8",
          breakValue: nums[55],
          shape: "circle",
          coords: [
            128,
            395,
            30 * (1 - (maxValue - nums[55]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[55]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.8",
          breakValue: nums[56],
          shape: "circle",
          coords: [
            185,
            397,
            30 * (1 - (maxValue - nums[56]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[56]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.8",
          breakValue: nums[57],
          shape: "circle",
          coords: [
            249,
            396,
            30 * (1 - (maxValue - nums[57]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[57]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.8",
          breakValue: nums[58],
          shape: "circle",
          coords: [
            338,
            397,
            30 * (1 - (maxValue - nums[58]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[58]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.8",
          breakValue: nums[59],
          shape: "circle",
          coords: [
            404,
            401,
            30 * (1 - (maxValue - nums[59]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[59]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.8",
          breakValue: nums[60],
          shape: "circle",
          coords: [
            461,
            399,
            30 * (1 - (maxValue - nums[60]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[60]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.8",
          breakValue: nums[61],
          shape: "circle",
          coords: [
            508,
            398,
            30 * (1 - (maxValue - nums[61]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[61]) / (maxValue - minValue)
          })`,
        },

        // rib 9
        {
          name: "r.a.rib.9",
          breakValue: nums[62],
          shape: "circle",
          coords: [
            90,
            444,
            30 * (1 - (maxValue - nums[62]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[62]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.9",
          breakValue: nums[63],
          shape: "circle",
          coords: [
            136,
            443,
            30 * (1 - (maxValue - nums[63]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[63]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.9",
          breakValue: nums[64],
          shape: "circle",
          coords: [
            192,
            446,
            30 * (1 - (maxValue - nums[64]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[64]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.9",
          breakValue: nums[65],
          shape: "circle",
          coords: [
            251,
            444,
            30 * (1 - (maxValue - nums[65]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[65]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.9",
          breakValue: nums[66],
          shape: "circle",
          coords: [
            334,
            444,
            30 * (1 - (maxValue - nums[66]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[66]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.9",
          breakValue: nums[67],
          shape: "circle",
          coords: [
            396,
            447,
            30 * (1 - (maxValue - nums[67]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[67]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.9",
          breakValue: nums[68],
          shape: "circle",
          coords: [
            452,
            446,
            30 * (1 - (maxValue - nums[68]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[68]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.9",
          breakValue: nums[69],
          shape: "circle",
          coords: [
            494,
            449,
            30 * (1 - (maxValue - nums[69]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[69]) / (maxValue - minValue)
          })`,
        },

        // rib 10
        {
          name: "r.a.rib.10",
          breakValue: nums[70],
          shape: "circle",
          coords: [
            105,
            492,
            30 * (1 - (maxValue - nums[70]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[70]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.al.rib.10",
          breakValue: nums[71],
          shape: "circle",
          coords: [
            148,
            489,
            30 * (1 - (maxValue - nums[71]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[71]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.10",
          breakValue: nums[72],
          shape: "circle",
          coords: [
            199,
            491,
            30 * (1 - (maxValue - nums[72]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[72]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.10",
          breakValue: nums[73],
          shape: "circle",
          coords: [
            256,
            488,
            30 * (1 - (maxValue - nums[73]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[73]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.10",
          breakValue: nums[74],
          shape: "circle",
          coords: [
            330,
            488,
            30 * (1 - (maxValue - nums[74]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[74]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.10",
          breakValue: nums[75],
          shape: "circle",
          coords: [
            388,
            493,
            30 * (1 - (maxValue - nums[75]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[75]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.10",
          breakValue: nums[76],
          shape: "circle",
          coords: [
            444,
            491,
            30 * (1 - (maxValue - nums[76]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[76]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.a.rib.10",
          breakValue: nums[77],
          shape: "circle",
          coords: [
            483,
            496,
            30 * (1 - (maxValue - nums[77]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[77]) / (maxValue - minValue)
          })`,
        },

        // rib 11
        {
          name: "r.al.rib.11",
          breakValue: nums[78],
          shape: "circle",
          coords: [
            155,
            538,
            30 * (1 - (maxValue - nums[78]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[78]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.11",
          breakValue: nums[79],
          shape: "circle",
          coords: [
            210,
            537,
            30 * (1 - (maxValue - nums[79]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[79]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.11",
          breakValue: nums[80],
          shape: "circle",
          coords: [
            260,
            536,
            30 * (1 - (maxValue - nums[80]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[80]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.11",
          breakValue: nums[81],
          shape: "circle",
          coords: [
            324,
            535,
            30 * (1 - (maxValue - nums[81]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[81]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.11",
          breakValue: nums[82],
          shape: "circle",
          coords: [
            375,
            538,
            30 * (1 - (maxValue - nums[82]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[82]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.11",
          breakValue: nums[83],
          shape: "circle",
          coords: [
            430,
            540,
            30 * (1 - (maxValue - nums[83]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[83]) / (maxValue - minValue)
          })`,
        },

        // rib 12
        {
          name: "r.al.rib.12",
          breakValue: nums[84],
          shape: "circle",
          coords: [
            168,
            582,
            30 * (1 - (maxValue - nums[84]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[84]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.pl.rib.12",
          breakValue: nums[85],
          shape: "circle",
          coords: [
            216,
            582,
            30 * (1 - (maxValue - nums[85]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[85]) / (maxValue - minValue)
          })`,
        },
        {
          name: "r.p.rib.12",
          breakValue: nums[86],
          shape: "circle",
          coords: [
            257,
            581,
            30 * (1 - (maxValue - nums[86]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[86]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.p.rib.12",
          breakValue: nums[87],
          shape: "circle",
          coords: [
            326,
            581,
            30 * (1 - (maxValue - nums[87]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[87]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.pl.rib.12",
          breakValue: nums[88],
          shape: "circle",
          coords: [
            373,
            583,
            30 * (1 - (maxValue - nums[88]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[88]) / (maxValue - minValue)
          })`,
        },
        {
          name: "l.al.rib.12",
          breakValue: nums[89],
          shape: "circle",
          coords: [
            416,
            585,
            30 * (1 - (maxValue - nums[89]) / (maxValue - minValue)),
          ],
          fillColor: "rgb(96,96,96)",
          preFillColor: `rgb(230, 40,0, ${
            0.95 - (maxValue - nums[89]) / (maxValue - minValue)
          })`,
        },
      ],
    };
    console.log(MAP);

    return (
      <div className="grid">
        <div className="presenter">
          <div border = {0} style={{ position: "relative" }}>
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
