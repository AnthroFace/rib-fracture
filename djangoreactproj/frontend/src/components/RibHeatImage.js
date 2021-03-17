import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import { rightRibValues } from "./RibHeatGrid"; 
import { leftRibValues } from "./RightRibHeatGrid"; 
import HeatMap from "react-heatmap-grid";

//var rplrib1 = 1, rplrib2=9, rplrib3=6; 
//right rib variables

var nums = [ rightRibValues.vrplrib1, rightRibValues.vralrib1, rightRibValues.vrarib1, rightRibValues.vrprib2, rightRibValues.vrplrib2, rightRibValues.vralrib2, rightRibValues.vrarib2, rightRibValues.vrprib3, rightRibValues.vrplrib3, rightRibValues.vralrib3, rightRibValues.vrarib3,
  rightRibValues.vrprib4, rightRibValues.vrplrib4, rightRibValues.vralrib4, rightRibValues.vrarib4, rightRibValues.vrprib5, rightRibValues.vrplrib5, rightRibValues.vralrib5, rightRibValues.vrarib5, rightRibValues.vrprib6, rightRibValues.vrplrib6, rightRibValues.vralrib6, rightRibValues.vrarib6, 
  rightRibValues.vrprib7, rightRibValues.vrplrib7, rightRibValues.vralrib7, rightRibValues.vrarib7, rightRibValues.vrprib8, rightRibValues.vrplrib8, rightRibValues.vralrib8, rightRibValues.vrarib8, rightRibValues.vrprib9, rightRibValues.vrplrib9, rightRibValues.vralrib9, rightRibValues.vrarib9,
  rightRibValues.vrprib10, rightRibValues.vrplrib10, rightRibValues.vralrib10, rightRibValues.vrarib10, rightRibValues.vrplrib11, rightRibValues.vralrib11, rightRibValues.vrarib11, rightRibValues.vrplrib12, rightRibValues.vralrib12, rightRibValues.vrarib12
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
      name: "r.p.rib.1",
      breakValue: rightRibValues.vrplrib1, 
      shape: "circle",
      coords: [160, 48, 10],
      fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(230, 40,0, ${1 - (maxValue - breakValue) / (maxValue - minValue)})", 
      //preFillColor: "rgb(255,99,71)"
    },
    {
      name: "r.pl.rib.1",
      breakValue: rightRibValues.vralrib1, 
      shape: "circle",
      coords: [210, 50, 10],
     fillColor: "rgb(96,96,96)",
    // preFillColor: "rgb(230, 40,0, ${1 - (max - value) / (max - min)})",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.al.rib.1",
      breakValue: rightRibValues.vrarib1, 
      shape: "circle",
      coords: [260, 50, 10],
     fillColor: "rgb(96,96,96)",
     preFillColor: "rgb(230, 40,0, ${1 - (maxValue - breakValue) / (maxValue - minValue)})",
     // preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.1",
      breakValue: leftRibValues.vlarib1, 
      shape: "circle",
      coords: [330, 50, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.pl.rib.1",
      breakValue: leftRibValues.vlalrib1, 
      shape: "circle",
      coords: [380, 50, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "l.al.rib.1",
      breakValue: leftRibValues.vlplrib1, 
      shape: "circle",
      coords: [430, 50, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    // rib 2
    {
      name: "r.p.rib.2",
      breakValue: rightRibValues.vrprib2, 
      shape: "circle",
      coords: [113, 90,10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.pl.rib.2",
      breakValue: rightRibValues.vrplrib2, 
      shape: "circle",
      coords: [150, 95, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.2",
      breakValue: rightRibValues.vralrib2, 
      shape: "circle",
      coords: [195, 100, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "r.a.rib.2",
      breakValue: rightRibValues.vrarib2, 
      shape: "circle",
      coords: [245, 100, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.a.rib.2",
      breakValue: leftRibValues.vlarib2, 
      shape: "circle",
      coords: [350,100, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.al.rib.2",
      breakValue: leftRibValues.vlalrib2, 
      shape: "circle",
      coords: [390, 103, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.pl.rib.2",
      breakValue: leftRibValues.vlplrib2, 
      shape: "circle",
      coords: [435, 103, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.2",
      breakValue: leftRibValues.vlprib2, 
      shape: "circle",
      coords: [475, 98,10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },

    // rib 3
    {
      name: "r.p.rib.3",
      breakValue: rightRibValues.vrprib3, 
      shape: "circle",
      coords: [100, 137, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "r.pl.rib.3",
      breakValue: rightRibValues.vrplrib3, 
      shape: "circle",
      coords: [145, 139, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.al.rib.3",
      breakValue: rightRibValues.vralrib3, 
      shape: "circle",
      coords: [190, 142, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.3",
      breakValue: rightRibValues.vrarib3, 
      shape: "circle",
      coords: [245, 145, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "l.a.rib.3",
      breakValue: leftRibValues.vlarib3, 
      shape: "circle",
      coords: [345, 145, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.al.rib.3",
      breakValue: leftRibValues.vlalrib3, 
      shape: "circle",
      coords: [395, 147, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.pl.rib.3",
      breakValue: leftRibValues.vlplrib3, 
      shape: "circle",
      coords: [443, 145, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "l.p.rib.3",
      breakValue: leftRibValues.vlprib3, 
      shape: "circle",
      coords: [485, 145, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },

    // rib 4
    {
      name: "r.p.rib.4",
      breakValue: rightRibValues.vrprib4, 
      shape: "circle",
      coords: [90, 187, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.pl.rib.4",
      breakValue: rightRibValues.vrplrib4, 
      shape: "circle",
      coords: [140, 190, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.4",
      breakValue: rightRibValues.vralrib4, 
      shape: "circle",
      coords: [190, 197, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.4",
      breakValue: rightRibValues.vrarib4, 
      shape: "circle",
      coords: [243, 193, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.a.rib.4",
      breakValue: leftRibValues.vlarib4, 
      shape: "circle",
      coords: [350, 194, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.al.rib.4",
      breakValue: leftRibValues.vlalrib4, 
      shape: "circle",
      coords: [400, 199, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.pl.rib.4",
      breakValue: leftRibValues.vlplrib4, 
      shape: "circle",
      coords: [450, 193, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.4",
      breakValue: leftRibValues.vlprib4, 
      shape: "circle",
      coords: [495, 193, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 5
    {
      name: "r.p.rib.5",
      breakValue: rightRibValues.vrprib5, 
      shape: "circle",
      coords: [75, 239, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "r.pl.rib.5",
      breakValue: rightRibValues.vrplrib5, 
      shape: "circle",
      coords: [132, 244, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.5",
      breakValue: rightRibValues.vralrib5, 
      shape: "circle",
      coords: [185, 248, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.5",
      breakValue: rightRibValues.vrarib5, 
      shape: "circle",
      coords: [235, 247, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.a.rib.5",
      breakValue: leftRibValues.vlarib5, 
      shape: "circle",
      coords: [345, 247, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.al.rib.5",
      breakValue: leftRibValues.vlalrib5, 
      shape: "circle",
      coords: [398, 248, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.pl.rib.5",
      breakValue: leftRibValues.vlplrib5, 
      shape: "circle",
      coords: [449, 250, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.5",
      breakValue: leftRibValues.vlprib5, 
      shape: "circle",
      coords: [500, 248, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 6
    {
      name: "r.p.rib.6",
      breakValue: rightRibValues.vrprib6, 
      shape: "circle",
      coords: [69, 291, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.pl.rib.6",
      breakValue: rightRibValues.vrplrib6, 
      shape: "circle",
      coords: [132, 295, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.6",
      breakValue: rightRibValues.vralrib6, 
      shape: "circle",
      coords: [185, 298, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "r.a.rib.6",
      breakValue: rightRibValues.vrarib6, 
      shape: "circle",
      coords: [238, 295, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.a.rib.6",
      breakValue: leftRibValues.vlarib6, 
      shape: "circle",
      coords: [345, 295, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.al.rib.6",
      breakValue: leftRibValues.vlalrib6, 
      shape: "circle",
      coords: [398, 298, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.pl.rib.6",
      breakValue: leftRibValues.vlplrib6, 
      shape: "circle",
      coords: [448, 298, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.p.rib.6",
      breakValue: leftRibValues.vlprib6, 
      shape: "circle",
      coords: [502, 298,  10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 7
    {
      name: "r.p.rib.7",
      breakValue: rightRibValues.vrprib7, 
      shape: "circle",
      coords: [69, 344, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "r.pl.rib.7",
      breakValue: rightRibValues.vrplrib7, 
      shape: "circle",
      coords: [132, 344, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.7",
      breakValue: rightRibValues.vralrib7, 
      shape: "circle",
      coords: [185, 347,  10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.7",
      breakValue: rightRibValues.vrarib7, 
      shape: "circle",
      coords: [238, 344, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.a.rib.7",
      breakValue: leftRibValues.vlarib7, 
      shape: "circle",
      coords: [345, 344, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.al.rib.7",
      breakValue: leftRibValues.vlalrib7, 
      shape: "circle",
      coords: [404, 350, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.pl.rib.7",
      breakValue: leftRibValues.vlplrib7, 
      shape: "circle",
      coords: [453, 350, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.7",
      breakValue: leftRibValues.vlprib7, 
      shape: "circle",
      coords: [504, 350, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 8
    {
      name: "r.p.rib.8",
      breakValue: rightRibValues.vrprib8, 
      shape: "circle",
      coords: [76, 394, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.pl.rib.8",
      breakValue: rightRibValues.vrplrib8, 
      shape: "circle",
      coords: [132, 394, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.8",
      breakValue: rightRibValues.vralrib8, 
      shape: "circle",
      coords: [185, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.8",
      breakValue: rightRibValues.vrarib8, 
      shape: "circle",
      coords: [240, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.a.rib.8",
      breakValue: leftRibValues.vlarib8, 
      shape: "circle",
      coords: [345, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.al.rib.8",
      breakValue: leftRibValues.vlalrib8, 
      shape: "circle",
      coords: [398, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.pl.rib.8",
      breakValue: leftRibValues.vlplrib8, 
      shape: "circle",
      coords: [457, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.8",
      breakValue: leftRibValues.vlprib8, 
      shape: "circle",
      coords: [502, 399, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 9
    {
      name: "r.p.rib.9",
      breakValue: rightRibValues.vrprib9, 
      shape: "circle",
      coords: [90, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.pl.rib.9",
      breakValue: rightRibValues.vrplrib9, 
      shape: "circle",
      coords: [138, 443, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.9",
      breakValue: rightRibValues.vralrib9, 
      shape: "circle",
      coords: [190, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.a.rib.9",
      breakValue: rightRibValues.vrarib9, 
      shape: "circle",
      coords: [243, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.a.rib.9",
      breakValue: leftRibValues.vlarib9, 
      shape: "circle",
      coords: [346, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.al.rib.9",
      breakValue: leftRibValues.vlalrib9, 
      shape: "circle",
      coords: [390, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.pl.rib.9",
      breakValue: leftRibValues.vlplrib9, 
      shape: "circle",
      coords: [450, 445, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.p.rib.9",
      breakValue: leftRibValues.vlprib9, 
      shape: "circle",
      coords: [488, 447, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 10
    {
      name: "r.p.rib.10",
      breakValue: rightRibValues.vrprib10, 
      shape: "circle",
      coords: [111, 495, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.pl.rib.10",
      breakValue: rightRibValues.vrplrib10, 
      shape: "circle",
      coords: [150, 491, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.al.rib.10",
      breakValue: rightRibValues.vralrib10, 
      shape: "circle",
      coords: [195, 491, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "r.a.rib.10",
      breakValue: rightRibValues.vrarib10, 
      shape: "circle",
      coords: [245, 491, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.a.rib.10",
      breakValue: leftRibValues.vlarib10, 
      shape: "circle",
      coords: [342, 491, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.al.rib.10",
      breakValue: leftRibValues.vlalrib10, 
      shape: "circle",
      coords: [390, 493, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "l.pl.rib.10",
      breakValue: leftRibValues.vlplrib10, 
      shape: "circle",
      coords: [439, 491, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "l.p.rib.10",
      breakValue: leftRibValues.vlprib10, 
      shape: "circle",
      coords: [475, 495, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },

    // rib 11
    {
      name: "r.pl.rib.11",
      breakValue: rightRibValues.vrplrib11, 
      shape: "circle",
      coords: [160, 540, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,99,71)"
    },
    {
      name: "r.al.rib.11",
      breakValue: rightRibValues.vralrib11, 
      shape: "circle",
      coords: [210, 537, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "r.a.rib.11",
      breakValue: rightRibValues.vrarib11, 
      shape: "circle",
      coords: [260, 537, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.a.rib.11",
      breakValue: leftRibValues.vlarib11, 
      shape: "circle",
      coords: [330, 537, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "l.al.rib.11",
      breakValue: leftRibValues.vlalrib11, 
      shape: "circle",
      coords: [380, 539, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.pl.rib.11",
      breakValue: leftRibValues.vlplrib11, 
      shape: "circle",
      coords: [430, 539, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },

    // rib 12
    {
      name: "r.pl.rib.12",
      breakValue: rightRibValues.vrplrib12, 
      shape: "circle",
      coords: [165, 582, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
    },
    {
      name: "r.al.rib.12",
      breakValue: rightRibValues.vralrib12, 
      shape: "circle",
      coords: [210, 582, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,127,80)"
    },
    {
      name: "r.a.rib.12",
      breakValue: rightRibValues.vrarib12, 
      shape: "circle",
      coords: [260, 582, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.a.rib.12",
      breakValue: leftRibValues.vlarib12, 
      shape: "circle",
      coords: [330, 582, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(233,150,122)"
    },
    {
      name: "l.al.rib.12",
      breakValue: leftRibValues.vlalrib12, 
      shape: "circle",
      coords: [380, 582, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(220,20,60)"
    },
    {
      name: "l.pl.rib.12",
      breakValue: leftRibValues.vlplrib12, 
      shape: "circle",
      coords: [420, 586, 10],
     fillColor: "rgb(96,96,96)",
      preFillColor: "rgb(255,228,196)"
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
      msg: `You clicked on ${area.name}`,
    });
    this.props.onSelectLocation(area.name);
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
