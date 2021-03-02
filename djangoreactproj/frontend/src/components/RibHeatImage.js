import React, { Component } from "react";
import ImageMapper from "react-image-mapper";

var MAP = {
  name: "my-map",
  areas: [
    // rib 1
    {
      name: "l.p.rib.1",
      shape: "circle",
      coords: [160, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.1",
      shape: "circle",
      coords: [210, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.1",
      shape: "circle",
      coords: [260, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.1",
      shape: "circle",
      coords: [330, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.1",
      shape: "circle",
      coords: [380, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.1",
      shape: "circle",
      coords: [430, 50, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    // rib 2
    {
      name: "l.p.rib.2",
      shape: "circle",
      coords: [113, 90,8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.2",
      shape: "circle",
      coords: [150, 95, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.2",
      shape: "circle",
      coords: [195, 100, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.2",
      shape: "circle",
      coords: [245, 100, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.2",
      shape: "circle",
      coords: [350,100, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.2",
      shape: "circle",
      coords: [390, 103, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.2",
      shape: "circle",
      coords: [435, 103, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.2",
      shape: "circle",
      coords: [475, 98,8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 3
    {
      name: "l.p.rib.3",
      shape: "circle",
      coords: [100, 137, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.3",
      shape: "circle",
      coords: [145, 139, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.3",
      shape: "circle",
      coords: [190, 142, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.3",
      shape: "circle",
      coords: [245, 145, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.3",
      shape: "circle",
      coords: [345, 145, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.3",
      shape: "circle",
      coords: [395, 147, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.3",
      shape: "circle",
      coords: [443, 145, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.3",
      shape: "circle",
      coords: [485, 145, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 4
    {
      name: "l.p.rib.4",
      shape: "circle",
      coords: [90, 187, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.4",
      shape: "circle",
      coords: [140, 190, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.4",
      shape: "circle",
      coords: [190, 197, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.4",
      shape: "circle",
      coords: [243, 193, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.4",
      shape: "circle",
      coords: [350, 194, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.4",
      shape: "circle",
      coords: [400, 199, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.4",
      shape: "circle",
      coords: [450, 193, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.4",
      shape: "circle",
      coords: [495, 193, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 5
    {
      name: "l.p.rib.5",
      shape: "circle",
      coords: [75, 239, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.5",
      shape: "circle",
      coords: [132, 244, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.5",
      shape: "circle",
      coords: [185, 248, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.5",
      shape: "circle",
      coords: [235, 247, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.5",
      shape: "circle",
      coords: [345, 247, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.5",
      shape: "circle",
      coords: [398, 248, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.5",
      shape: "circle",
      coords: [449, 250, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.5",
      shape: "circle",
      coords: [500, 248, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 6
    {
      name: "l.p.rib.6",
      shape: "circle",
      coords: [69, 291, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.6",
      shape: "circle",
      coords: [132, 295, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.6",
      shape: "circle",
      coords: [185, 298, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.6",
      shape: "circle",
      coords: [238, 295, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.6",
      shape: "circle",
      coords: [345, 295, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.6",
      shape: "circle",
      coords: [398, 298, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.6",
      shape: "circle",
      coords: [448, 298, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.6",
      shape: "circle",
      coords: [502, 298,  8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 7
    {
      name: "l.p.rib.7",
      shape: "circle",
      coords: [69, 344, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.7",
      shape: "circle",
      coords: [132, 344, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.7",
      shape: "circle",
      coords: [185, 347,  8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.7",
      shape: "circle",
      coords: [238, 344, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.7",
      shape: "circle",
      coords: [345, 344, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.7",
      shape: "circle",
      coords: [404, 350, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.7",
      shape: "circle",
      coords: [453, 350, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.7",
      shape: "circle",
      coords: [504, 350, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 8
    {
      name: "l.p.rib.8",
      shape: "circle",
      coords: [76, 394, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.8",
      shape: "circle",
      coords: [132, 394, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.8",
      shape: "circle",
      coords: [185, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.8",
      shape: "circle",
      coords: [240, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.8",
      shape: "circle",
      coords: [345, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.8",
      shape: "circle",
      coords: [398, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.8",
      shape: "circle",
      coords: [457, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.8",
      shape: "circle",
      coords: [502, 399, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 9
    {
      name: "l.p.rib.9",
      shape: "circle",
      coords: [90, 445, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.9",
      shape: "circle",
      coords: [138, 443, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.9",
      shape: "circle",
      coords: [190, 445, 9],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.9",
      shape: "circle",
      coords: [243, 445, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.9",
      shape: "circle",
      coords: [346, 445, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.9",
      shape: "circle",
      coords: [390, 445, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.9",
      shape: "circle",
      coords: [450, 445, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.9",
      shape: "circle",
      coords: [488, 447, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 10
    {
      name: "l.p.rib.10",
      shape: "circle",
      coords: [111, 495, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.10",
      shape: "circle",
      coords: [150, 491, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.10",
      shape: "circle",
      coords: [195, 491, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.a.rib.10",
      shape: "circle",
      coords: [245, 491, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.10",
      shape: "circle",
      coords: [342, 491, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.10",
      shape: "circle",
      coords: [390, 493, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.10",
      shape: "circle",
      coords: [439, 491, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.a.rib.10",
      shape: "circle",
      coords: [475, 495, 8],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 11
    {
      name: "l.p.rib.11",
      shape: "circle",
      coords: [160, 540, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.11",
      shape: "circle",
      coords: [210, 537, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.11",
      shape: "circle",
      coords: [260, 537, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.11",
      shape: "circle",
      coords: [330, 537, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.11",
      shape: "circle",
      coords: [380, 539, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.11",
      shape: "circle",
      coords: [430, 539, 9],
      fillColor: "red",
      preFillColor: "red"
    },

    // rib 12
    {
      name: "l.p.rib.12",
      shape: "circle",
      coords: [165, 582, 9],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.12",
      shape: "circle",
      coords: [210, 582, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.al.rib.12",
      shape: "circle",
      coords: [260, 582, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.p.rib.12",
      shape: "circle",
      coords: [330, 582, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.pl.rib.12",
      shape: "circle",
      coords: [380, 582, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "r.al.rib.12",
      shape: "circle",
      coords: [420, 586, 8],
      fillColor: "red",
      preFillColor: "red"
    },
  ],
};

var URL = "/images/rib_image.png";

class RibImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  hoveredArea: null,
    //  msg: null,
    //  moveMsg: null,
    };
  }
load()
{

};

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
            ////  onClick={(area) => this.clicked(area)}
            ////  onMouseEnter={(area) => this.enterArea(area)}
            ////  onMouseLeave={(area) => this.leaveArea(area)}
              // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
             //// onImageClick={(evt) => this.clickedOutside(evt)}
              //onImageMouseMove={(evt) => this.moveOnImage(evt)}
              lineWidth={4}
              strokeColor={"white"}
            />

          </div>
        </div>
      </div>
    );
  } 
}

export default RibImage;
