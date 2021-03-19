import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import { rightRibValues } from "./RibHeatGrid"; 
import { leftRibValues } from "./RightRibHeatGrid"; 
import HeatMap from "react-heatmap-grid";


//right rib variables
var nums = [ rightRibValues.vrplrib1, rightRibValues.vralrib1, rightRibValues.vrprib1, rightRibValues.vrprib2, rightRibValues.vrplrib2, 
  rightRibValues.vralrib2, rightRibValues.vrarib2, rightRibValues.vrprib3, rightRibValues.vrplrib3, rightRibValues.vralrib3, rightRibValues.vrarib3,
  rightRibValues.vrprib4, rightRibValues.vrplrib4, rightRibValues.vralrib4, rightRibValues.vrarib4, rightRibValues.vrprib5, rightRibValues.vrplrib5, 
  rightRibValues.vralrib5, rightRibValues.vrarib5, rightRibValues.vrprib6, rightRibValues.vrplrib6, rightRibValues.vralrib6, rightRibValues.vrarib6, 
  rightRibValues.vrprib7, rightRibValues.vrplrib7, rightRibValues.vralrib7, rightRibValues.vrarib7, rightRibValues.vrprib8, rightRibValues.vrplrib8, 
  rightRibValues.vralrib8, rightRibValues.vrarib8, rightRibValues.vrprib9, rightRibValues.vrplrib9, rightRibValues.vralrib9, rightRibValues.vrarib9,
  rightRibValues.vrprib10, rightRibValues.vrplrib10, rightRibValues.vralrib10, rightRibValues.vrarib10, rightRibValues.vrplrib11, rightRibValues.vralrib11, 
  rightRibValues.vrprib11, rightRibValues.vrplrib12, rightRibValues.vralrib12, rightRibValues.vrprib12,
//left rib variables
  leftRibValues.vlarib1, leftRibValues.vlalrib1, leftRibValues.vlplrib1, leftRibValues.vlarib2, leftRibValues.vlalrib2, leftRibValues.vlplrib2, 
  leftRibValues.vlprib2, leftRibValues.vlarib3, leftRibValues.vlalrib3, leftRibValues.vlplrib3, leftRibValues.vlprib3,
  leftRibValues.vlarib4, leftRibValues.vlalrib4, leftRibValues.vlplrib4, leftRibValues.vlprib4, leftRibValues.vlarib5, leftRibValues.vlalrib5, 
  leftRibValues.vlplrib5, leftRibValues.vlprib5, leftRibValues.vlarib6, leftRibValues.vlalrib6, leftRibValues.vlplrib6, leftRibValues.vlprib6, 
  leftRibValues.vlarib7,leftRibValues.vlalrib7, leftRibValues.vlplrib7, leftRibValues.vlprib7, leftRibValues.vlarib8, leftRibValues.vlalrib8, 
  leftRibValues.vlplrib8, leftRibValues.vlprib8, leftRibValues.vlarib9, leftRibValues.vlalrib9, leftRibValues.vlplrib9, leftRibValues.vlprib9, 
  leftRibValues.vlarib10, leftRibValues.vlalrib10, leftRibValues.vlplrib10, leftRibValues.vlprib10, leftRibValues.vlarib11, 
  leftRibValues.vlalrib11, leftRibValues.vlplrib11, leftRibValues.vlarib12, leftRibValues.vlalrib12, leftRibValues.vlplrib12
];

var maxValue = Math.max.apply(null,nums);
var minValue = Math.min.apply(null, nums);

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
      breakValue: rightRibValues.vralrib1, 
      shape: "circle",
      coords: [163, 47, 30 * (1 - (maxValue - rightRibValues.vralrib1) / (maxValue - minValue))],
      fillColor: "rgb(96,96,96)",
      preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib1) / (maxValue - minValue)})`, 
      //preFillColor: "rgb(255,99,71)"
    },
    {
      name: "r.pl.rib.1",
      breakValue: rightRibValues.vrplrib1, 
      shape: "circle",
      coords: [205, 52, 30 * (1 - (maxValue - rightRibValues.vrplrib1) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib1) / (maxValue - minValue)})`,
     // preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.p.rib.1",
      breakValue: rightRibValues.vrprib1, 
      shape: "circle",
      coords: [257, 50, 30 * (1 - (maxValue - rightRibValues.vrprib1) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib1) / (maxValue - minValue)})`,
     // preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.1",
      breakValue: leftRibValues.vlarib1, 
      shape: "circle",
      coords: [330, 51, 30 * (1 - (maxValue - leftRibValues.vlarib1) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib1) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.1",
      breakValue: leftRibValues.vlplrib1, 
      shape: "circle",
      coords: [381, 53, 30 * (1 - (maxValue - leftRibValues.vlplrib1) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib1) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.1",
      breakValue: leftRibValues.vlalrib1, 
      shape: "circle",
      coords: [425, 52, 30 * (1 - (maxValue - leftRibValues.vlalrib1) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib1) / (maxValue - minValue)})`,
    },
    // rib 2
    {
      name: "r.a.rib.2",
      breakValue: rightRibValues.vrarib2, 
      shape: "circle",
      coords: [113, 89, 30 * (1 - (maxValue - rightRibValues.vrarib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib2) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.2",
      breakValue: rightRibValues.vralrib2, 
      shape: "circle",
      coords: [152, 96, 30 * (1 - (maxValue - rightRibValues.vralrib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib2) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.2",
      breakValue: rightRibValues.vrplrib2, 
      shape: "circle",
      coords: [197, 99, 30 * (1 - (maxValue - rightRibValues.vrplrib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib2) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.2",
      breakValue: rightRibValues.vrprib2, 
      shape: "circle",
      coords: [252, 99, 30 * (1 - (maxValue - rightRibValues.vrprib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib2) / (maxValue - minValue)})`,
    },
    
    {
      name: "l.p.rib.2",
      breakValue: leftRibValues.vlprib2, 
      shape: "circle",
      coords: [338, 99, 30 * (1 - (maxValue - leftRibValues.vlprib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib2) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.2",
      breakValue: leftRibValues.vlplrib2, 
      shape: "circle",
      coords: [390, 103, 30 * (1 - (maxValue - leftRibValues.vlplrib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib2) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.2",
      breakValue: leftRibValues.vlalrib2, 
      shape: "circle",
      coords: [435, 102, 30 * (1 - (maxValue - leftRibValues.vlalrib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib2) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.2",
      breakValue: leftRibValues.vlarib2, 
      shape: "circle",
      coords: [477, 97, 30 * (1 - (maxValue - leftRibValues.vlarib2) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib2) / (maxValue - minValue)})`,
    },

    // rib 3
    {
      name: "r.a.rib.3",
      breakValue: rightRibValues.vrarib3, 
      shape: "circle",
      coords: [100, 138, 30 * (1 - (maxValue - rightRibValues.vrarib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib3) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.3",
      breakValue: rightRibValues.vralrib3, 
      shape: "circle",
      coords: [145, 139, 30 * (1 - (maxValue - rightRibValues.vralrib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib3) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.3",
      breakValue: rightRibValues.vrplrib3, 
      shape: "circle",
      coords: [193, 142, 30 * (1 - (maxValue - rightRibValues.vrplrib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib3) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.3",
      breakValue: rightRibValues.vrprib3, 
      shape: "circle",
      coords: [254, 144, 30 * (1 - (maxValue - rightRibValues.vrprib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib3) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.3",
      breakValue: leftRibValues.vlprib3, 
      shape: "circle",
      coords: [340, 144, 30 * (1 - (maxValue - leftRibValues.vlprib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib3) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.3",
      breakValue: leftRibValues.vlplrib3, 
      shape: "circle",
      coords: [395, 146, 30 * (1 - (maxValue - leftRibValues.vlplrib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib3) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.3",
      breakValue: leftRibValues.vlalrib3, 
      shape: "circle",
      coords: [444, 145, 30 * (1 - (maxValue - leftRibValues.vlalrib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib3) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.3",
      breakValue: leftRibValues.vlarib3, 
      shape: "circle",
      coords: [488, 145, 30 * (1 - (maxValue - leftRibValues.vlarib3) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib3) / (maxValue - minValue)})`,
    },

    // rib 4
    {
      name: "r.a.rib.4",
      breakValue: rightRibValues.vrarib4, 
      shape: "circle",
      coords: [90, 186, 30 * (1 - (maxValue - rightRibValues.vrarib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib4) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.4",
      breakValue: rightRibValues.vralrib4, 
      shape: "circle",
      coords: [140, 189, 30 * (1 - (maxValue - rightRibValues.vralrib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib4) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.4",
      breakValue: rightRibValues.vrplrib4, 
      shape: "circle",
      coords: [190, 196, 30 * (1 - (maxValue - rightRibValues.vrplrib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib4) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.4",
      breakValue: rightRibValues.vrprib4, 
      shape: "circle",
      coords: [252, 192, 30 * (1 - (maxValue - rightRibValues.vrprib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib4) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.4",
      breakValue: leftRibValues.vlprib4, 
      shape: "circle",
      coords: [337, 193, 30 * (1 - (maxValue - leftRibValues.vlprib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib4) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.4",
      breakValue: leftRibValues.vlplrib4, 
      shape: "circle",
      coords: [398, 199, 30 * (1 - (maxValue - leftRibValues.vlplrib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib4) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.4",
      breakValue: leftRibValues.vlalrib4, 
      shape: "circle",
      coords: [447, 193, 30 * (1 - (maxValue - leftRibValues.vlalrib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib4) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.4",
      breakValue: leftRibValues.vlarib4, 
      shape: "circle",
      coords: [496, 194, 30 * (1 - (maxValue - leftRibValues.vlarib4) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib4) / (maxValue - minValue)})`,
    },

    // rib 5
    {
      name: "r.a.rib.5",
      breakValue: rightRibValues.vrarib5, 
      shape: "circle",
      coords: [70, 240, 30 * (1 - (maxValue - rightRibValues.vrarib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib5) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.5",
      breakValue: rightRibValues.vralrib5, 
      shape: "circle",
      coords: [132, 243, 30 * (1 - (maxValue - rightRibValues.vralrib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib5) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.5",
      breakValue: rightRibValues.vrplrib5, 
      shape: "circle",
      coords: [187, 247, 30 * (1 - (maxValue - rightRibValues.vrplrib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib5) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.5",
      breakValue: rightRibValues.vrprib5, 
      shape: "circle",
      coords: [247, 245, 30 * (1 - (maxValue - rightRibValues.vrprib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib5) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.5",
      breakValue: leftRibValues.vlprib5, 
      shape: "circle",
      coords: [338, 245, 30 * (1 - (maxValue - leftRibValues.vlprib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib5) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.5",
      breakValue: leftRibValues.vlplrib5, 
      shape: "circle",
      coords: [400, 249, 30 * (1 - (maxValue - leftRibValues.vlplrib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib5) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.5",
      breakValue: leftRibValues.vlalrib5, 
      shape: "circle",
      coords: [455, 248, 30 * (1 - (maxValue - leftRibValues.vlalrib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib5) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.5",
      breakValue: leftRibValues.vlarib5, 
      shape: "circle",
      coords: [505, 247, 30 * (1 - (maxValue - leftRibValues.vlarib5) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib5) / (maxValue - minValue)})`,
    },

    // rib 6
    {
      name: "r.a.rib.6",
      breakValue: rightRibValues.vrarib6, 
      shape: "circle",
      coords: [66, 292, 30 * (1 - (maxValue - rightRibValues.vrarib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib6) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.6",
      breakValue: rightRibValues.vralrib6, 
      shape: "circle",
      coords: [132, 294, 30 * (1 - (maxValue - rightRibValues.vralrib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib6) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.6",
      breakValue: rightRibValues.vrplrib6, 
      shape: "circle",
      coords: [187, 298, 30 * (1 - (maxValue - rightRibValues.vrplrib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib6) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.6",
      breakValue: rightRibValues.vrprib6, 
      shape: "circle",
      coords: [247, 294, 30 * (1 - (maxValue - rightRibValues.vrprib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib6) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.6",
      breakValue: leftRibValues.vlprib6, 
      shape: "circle",
      coords: [338, 294,30 * (1 - (maxValue - leftRibValues.vlprib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib6) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.6",
      breakValue: leftRibValues.vlplrib6, 
      shape: "circle",
      coords: [400, 299, 30 * (1 - (maxValue - leftRibValues.vlplrib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: "red",
    },
    {
      name: "l.al.rib.6",
      breakValue: leftRibValues.vlalrib6, 
      shape: "circle",
      coords: [455, 298, 30 * (1 - (maxValue - leftRibValues.vlalrib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib6) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.6",
      breakValue: leftRibValues.vlarib6, 
      shape: "circle",
      coords: [507, 299,  30 * (1 - (maxValue - leftRibValues.vlarib6) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib6) / (maxValue - minValue)})`,
    },

    // rib 7
    {
      name: "r.a.rib.7",
      breakValue: rightRibValues.vrarib7, 
      shape: "circle",
      coords: [69, 343,  30 * (1 - (maxValue - rightRibValues.vrarib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib7) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.7",
      breakValue: rightRibValues.vralrib7, 
      shape: "circle",
      coords: [128, 344,  30 * (1 - (maxValue - rightRibValues.vralrib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib7) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.7",
      breakValue: rightRibValues.vrplrib7, 
      shape: "circle",
      coords: [180, 348, 30 * (1 - (maxValue - rightRibValues.vrplrib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib7) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.7",
      breakValue: rightRibValues.vrprib7, 
      shape: "circle",
      coords: [247, 344,  30 * (1 - (maxValue - rightRibValues.vrprib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib7) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.7",
      breakValue: leftRibValues.vlprib7, 
      shape: "circle",
      coords: [338, 344,  30 * (1 - (maxValue - leftRibValues.vlprib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib7) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.7",
      breakValue: leftRibValues.vlplrib7, 
      shape: "circle",
      coords: [408, 350,  30 * (1 - (maxValue - leftRibValues.vlplrib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib7) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.7",
      breakValue: leftRibValues.vlalrib7, 
      shape: "circle",
      coords: [462, 349,  30 * (1 - (maxValue - leftRibValues.vlalrib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib7) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.7",
      breakValue: leftRibValues.vlarib7, 
      shape: "circle",
      coords: [506, 350,  30 * (1 - (maxValue - leftRibValues.vlarib7) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib7) / (maxValue - minValue)})`,
    },

    // rib 8
    {
      name: "r.a.rib.8",
      breakValue: rightRibValues.vrarib8, 
      shape: "circle",
      coords: [76, 392, 30 * (1 - (maxValue - rightRibValues.vrarib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib8) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.8",
      breakValue: rightRibValues.vralrib8, 
      shape: "circle",
      coords: [128, 395, 30 * (1 - (maxValue - rightRibValues.vralrib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib8) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.8",
      breakValue: rightRibValues.vrplrib8, 
      shape: "circle",
      coords: [185, 397, 30 * (1 - (maxValue - rightRibValues.vrplrib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib8) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.8",
      breakValue: rightRibValues.vrprib8, 
      shape: "circle",
      coords: [249, 396, 30 * (1 - (maxValue - rightRibValues.vrprib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib8) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.8",
      breakValue: leftRibValues.vlprib8, 
      shape: "circle",
      coords: [338, 397, 30 * (1 - (maxValue - leftRibValues.vlprib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib8) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.8",
      breakValue: leftRibValues.vlplrib8, 
      shape: "circle",
      coords: [404, 401, 30 * (1 - (maxValue - leftRibValues.vlplrib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib8) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.8",
      breakValue: leftRibValues.vlalrib8, 
      shape: "circle",
      coords: [461, 399, 30 * (1 - (maxValue - leftRibValues.vlalrib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib8) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.8",
      breakValue: leftRibValues.vlarib8, 
      shape: "circle",
      coords: [508, 398, 30 * (1 - (maxValue - leftRibValues.vlarib8) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib8) / (maxValue - minValue)})`,
    },

    // rib 9
    {
      name: "r.a.rib.9",
      breakValue: rightRibValues.vrarib9, 
      shape: "circle",
      coords: [90, 444, 30 * (1 - (maxValue - rightRibValues.vrarib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib9) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.9",
      breakValue: rightRibValues.vralrib9, 
      shape: "circle",
      coords: [136, 443, 30 * (1 - (maxValue - rightRibValues.vralrib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib9) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.9",
      breakValue: rightRibValues.vrplrib9, 
      shape: "circle",
      coords: [192, 446, 30 * (1 - (maxValue - rightRibValues.vrplrib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib9) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.9",
      breakValue: rightRibValues.vrprib9, 
      shape: "circle",
      coords: [251, 444, 30 * (1 - (maxValue - rightRibValues.vrprib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib9) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.9",
      breakValue: leftRibValues.vlprib9, 
      shape: "circle",
      coords: [334, 444, 30 * (1 - (maxValue - leftRibValues.vlprib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib9) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.9",
      breakValue: leftRibValues.vlplrib9, 
      shape: "circle",
      coords: [396, 447, 30 * (1 - (maxValue - leftRibValues.vlplrib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib9) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.9",
      breakValue: leftRibValues.vlalrib9, 
      shape: "circle",
      coords: [452, 446, 30 * (1 - (maxValue - leftRibValues.vlalrib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib9) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.9",
      breakValue: leftRibValues.vlarib9, 
      shape: "circle",
      coords: [494, 449, 30 * (1 - (maxValue - leftRibValues.vlarib9) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib9) / (maxValue - minValue)})`,
    },

    // rib 10
    {
      name: "r.a.rib.10",
      breakValue: rightRibValues.vrarib10, 
      shape: "circle",
      coords: [105, 492, 30 * (1 - (maxValue - rightRibValues.vrarib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrarib10) / (maxValue - minValue)})`,
    },
    {
      name: "r.al.rib.10",
      breakValue: rightRibValues.vralrib10, 
      shape: "circle",
      coords: [148, 489, 30 * (1 - (maxValue - rightRibValues.vralrib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib10) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.10",
      breakValue: rightRibValues.vrplrib10, 
      shape: "circle",
      coords: [199, 491, 30 * (1 - (maxValue - rightRibValues.vrplrib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib10) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.10",
      breakValue: rightRibValues.vrprib10, 
      shape: "circle",
      coords: [256, 488, 30 * (1 - (maxValue - rightRibValues.vrprib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib10) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.10",
      breakValue: leftRibValues.vlprib10, 
      shape: "circle",
      coords: [330, 488, 30 * (1 - (maxValue - leftRibValues.vlprib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlprib10) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.10",
      breakValue: leftRibValues.vlplrib10, 
      shape: "circle",
      coords: [388, 493, 30 * (1 - (maxValue - leftRibValues.vlplrib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib10) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.10",
      breakValue: leftRibValues.vlalrib10, 
      shape: "circle",
      coords: [444, 491, 30 * (1 - (maxValue - leftRibValues.vlalrib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib10) / (maxValue - minValue)})`,
    },
    {
      name: "l.a.rib.10",
      breakValue: leftRibValues.vlarib10, 
      shape: "circle",
      coords: [483, 496, 30 * (1 - (maxValue - leftRibValues.vlarib10) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib10) / (maxValue - minValue)})`,
    },

    // rib 11
    {
      name: "r.al.rib.11",
      breakValue: rightRibValues.vralrib11, 
      shape: "circle",
      coords: [155, 538, 30 * (1 - (maxValue - rightRibValues.vralrib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib11) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.11",
      breakValue: rightRibValues.vrplrib11, 
      shape: "circle",
      coords: [210, 537, 30 * (1 - (maxValue - rightRibValues.vrplrib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib11) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.11",
      breakValue: rightRibValues.vrprib11, 
      shape: "circle",
      coords: [260, 536, 30 * (1 - (maxValue - rightRibValues.vrprib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib11) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.11",
      breakValue: leftRibValues.vlarib11, 
      shape: "circle",
      coords: [324, 535, 30 * (1 - (maxValue - leftRibValues.vlarib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib11) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.11",
      breakValue: leftRibValues.vlplrib11, 
      shape: "circle",
      coords: [375, 538, 30 * (1 - (maxValue - leftRibValues.vlplrib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib11) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.11",
      breakValue: leftRibValues.vlalrib11, 
      shape: "circle",
      coords: [430, 540, 30 * (1 - (maxValue - leftRibValues.vlalrib11) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib11) / (maxValue - minValue)})`,
    },

    // rib 12
    {
      name: "r.al.rib.12",
      breakValue: rightRibValues.vralrib12, 
      shape: "circle",
      coords: [168, 582, 30 * (1 - (maxValue - rightRibValues.vralrib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vralrib12) / (maxValue - minValue)})`,
    },
    {
      name: "r.pl.rib.12",
      breakValue: rightRibValues.vrplrib12, 
      shape: "circle",
      coords: [216, 582, 30 * (1 - (maxValue - rightRibValues.vrplrib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrplrib12) / (maxValue - minValue)})`,
    },
    {
      name: "r.p.rib.12",
      breakValue: rightRibValues.vrprib12, 
      shape: "circle",
      coords: [257, 581, 30 * (1 - (maxValue - rightRibValues.vrprib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - rightRibValues.vrprib12) / (maxValue - minValue)})`,
    },
    {
      name: "l.p.rib.12",
      breakValue: leftRibValues.vlarib12, 
      shape: "circle",
      coords: [326, 581, 30 * (1 - (maxValue - leftRibValues.vlarib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlarib12) / (maxValue - minValue)})`,
    },
    {
      name: "l.pl.rib.12",
      breakValue: leftRibValues.vlplrib12, 
      shape: "circle",
      coords: [373, 583, 30 * (1 - (maxValue - leftRibValues.vlplrib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlplrib12) / (maxValue - minValue)})`,
    },
    {
      name: "l.al.rib.12",
      breakValue: leftRibValues.vlalrib12, 
      shape: "circle",
      coords: [416, 585, 30 * (1 - (maxValue - leftRibValues.vlalrib12) / (maxValue - minValue))],
     fillColor: "rgb(96,96,96)",
     preFillColor: `rgb(230, 40,0, ${0.95 - (maxValue - leftRibValues.vlalrib12) / (maxValue - minValue)})`,
    },
  ],
};





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
    this.setState({ msg: "Hover ribs to see total breaks for each area" });
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
              onLoad={() => this.load()}
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
