import React, { Component } from "react";
import ImageMapper from "react-image-mapper";

var MAP = {
  name: "my-map",
  areas: [
    // rib 1
    {
      name: "l.p.rib.1",
      shape: "circle",
      coords: [101, 38, 8],
      fillColor: "red",
      preFillColor: "red"
    },
    {
      name: "l.pl.rib.1",
      shape: "circle",
      coords: [132, 38, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.1",
      shape: "circle",
      coords: [163, 38, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.1",
      shape: "circle",
      coords: [274, 38, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.1",
      shape: "circle",
      coords: [243, 38, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.1",
      shape: "circle",
      coords: [211, 38, 8],
      fillColor: "red",
    },
    // rib 2
    {
      name: "l.p.rib.2",
      shape: "circle",
      coords: [72, 70,8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.2",
      shape: "circle",
      coords: [97, 70, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.2",
      shape: "circle",
      coords: [126, 70, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.2",
      shape: "circle",
      coords: [150, 70, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.2",
      shape: "circle",
      coords: [304,70, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.2",
      shape: "circle",
      coords: [278, 70, 9],
      fillColor: "red",
    },
    {
      name: "r.al.rib.2",
      shape: "circle",
      coords: [249, 70, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.2",
      shape: "circle",
      coords: [216, 70,8],
      fillColor: "red",
    },

    // rib 3
    {
      name: "l.p.rib.3",
      shape: "circle",
      coords: [63, 98, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.3",
      shape: "circle",
      coords: [92, 98, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.3",
      shape: "circle",
      coords: [123, 98, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.3",
      shape: "circle",
      coords: [160, 98, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.3",
      shape: "circle",
      coords: [313, 98, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.3",
      shape: "circle",
      coords: [283, 98, 7],
      fillColor: "red",
    },
    {
      name: "r.al.rib.3",
      shape: "circle",
      coords: [252, 98, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.3",
      shape: "circle",
      coords: [215, 98, 8],
      fillColor: "red",
    },

    // rib 4
    {
      name: "l.p.rib.4",
      shape: "circle",
      coords: [57, 133, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.4",
      shape: "circle",
      coords: [91, 133, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.4",
      shape: "circle",
      coords: [122, 133, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.4",
      shape: "circle",
      coords: [161, 133, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.4",
      shape: "circle",
      coords: [315, 133, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.4",
      shape: "circle",
      coords: [284, 133, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.4",
      shape: "circle",
      coords: [252, 133, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.4",
      shape: "circle",
      coords: [213, 133, 8],
      fillColor: "red",
    },

    // rib 5
    {
      name: "l.p.rib.5",
      shape: "circle",
      coords: [39, 166, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.5",
      shape: "circle",
      coords: [85.5, 166, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.5",
      shape: "circle",
      coords: [117, 166, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.5",
      shape: "circle",
      coords: [160, 166, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.5",
      shape: "circle",
      coords: [323, 166, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.5",
      shape: "circle",
      coords: [290, 166, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.5",
      shape: "circle",
      coords: [253.5, 166, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.5",
      shape: "circle",
      coords: [214, 166, 8],
      fillColor: "red",
    },

    // rib 6
    {
      name: "l.p.rib.6",
      shape: "circle",
      coords: [43.5, 198, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.6",
      shape: "circle",
      coords: [85, 198, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.6",
      shape: "circle",
      coords: [122, 198, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.6",
      shape: "circle",
      coords: [159, 198, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.6",
      shape: "rect",
      coords: [309, 195, 340, 212],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.6",
      shape: "circle",
      coords: [290.5, 198, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.5",
      shape: "circle",
      coords: [254, 198, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.6",
      shape: "circle",
      coords: [214.5, 198,  8],
      fillColor: "red",
    },

    // rib 7
    {
      name: "l.p.rib.7",
      shape: "circle",
      coords: [43, 234, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.7",
      shape: "circle",
      coords: [82, 234, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.7",
      shape: "circle",
      coords: [116.5, 234,  8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.7",
      shape: "circle",
      coords: [157.5, 234, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.7",
      shape: "circle",
      coords: [323.5, 234, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.7",
      shape: "circle",
      coords: [293.5, 234, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.7",
      shape: "circle",
      coords: [259, 234, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.7",
      shape: "circle",
      coords: [216, 234, 8],
      fillColor: "red",
    },

    // rib 8
    {
      name: "l.p.rib.8",
      shape: "circle",
      coords: [49, 268, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.8",
      shape: "circle",
      coords: [81, 268, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.8",
      shape: "circle",
      coords: [118.5, 268, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.8",
      shape: "circle",
      coords: [159, 268, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.8",
      shape: "circle",
      coords: [326, 268, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.8",
      shape: "circle",
      coords: [295, 268, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.8",
      shape: "circle",
      coords: [257.5, 268, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.8",
      shape: "circle",
      coords: [215.5, 268, 8],
      fillColor: "red",
    },

    // rib 9
    {
      name: "l.p.rib.9",
      shape: "circle",
      coords: [57.5, 305, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.9",
      shape: "circle",
      coords: [86, 305, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.9",
      shape: "circle",
      coords: [124.5, 305, 9],
      fillColor: "red",
    },
    {
      name: "l.a.rib.9",
      shape: "rect",
      coords: [161.5,305, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.9",
      shape: "circle",
      coords: [317, 305, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.9",
      shape: "circle",
      coords: [290, 305, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.9",
      shape: "circle",
      coords: [251, 305, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.9",
      shape: "circle",
      coords: [212.5, 305, 8],
      fillColor: "red",
    },

    // rib 10
    {
      name: "l.p.rib.10",
      shape: "circle",
      coords: [66, 333, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.10",
      shape: "circle",
      coords: [93, 333, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.10",
      shape: "circle",
      coords: [129, 333, 8],
      fillColor: "red",
    },
    {
      name: "l.a.rib.10",
      shape: "circle",
      coords: [163, 333, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.10",
      shape: "circle",
      coords: [309.5, 333, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.10",
      shape: "circle",
      coords: [283.5, 333, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.10",
      shape: "circle",
      coords: [247, 333, 8],
      fillColor: "red",
    },
    {
      name: "r.a.rib.10",
      shape: "circle",
      coords: [211, 333, 8],
      fillColor: "red",
    },

    // rib 11
    {
      name: "l.p.rib.11",
      shape: "circle",
      coords: [97, 365, 8],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.11",
      shape: "circle",
      coords: [137, 365, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.11",
      shape: "circle",
      coords: [166.5, 365, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.11",
      shape: "circle",
      coords: [276.5, 365, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.11",
      shape: "circle",
      coords: [239, 365, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.11",
      shape: "circle",
      coords: [206, 365, 9],
      fillColor: "red",
    },

    // rib 12
    {
      name: "l.p.rib.12",
      shape: "circle",
      coords: [105, 398.5, 9],
      fillColor: "red",
    },
    {
      name: "l.pl.rib.12",
      shape: "circle",
      coords: [137, 398.5, 8],
      fillColor: "red",
    },
    {
      name: "l.al.rib.12",
      shape: "circle",
      coords: [164, 398.5, 8],
      fillColor: "red",
    },
    {
      name: "r.p.rib.12",
      shape: "circle",
      coords: [267, 398.5, 8],
      fillColor: "red",
    },
    {
      name: "r.pl.rib.12",
      shape: "circle",
      coords: [238.5, 398.5, 8],
      fillColor: "red",
    },
    {
      name: "r.al.rib.12",
      shape: "circle",
      coords: [209, 398.5, 8],
      fillColor: "red",
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
