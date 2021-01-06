import React, { Component } from "react";
import ImageMapper from "react-image-mapper";

var MAP = {
  name: "my-map",
  areas: [
    // rib 1
    {
      name: "l.p.rib.1",
      shape: "rect",
      coords: [85, 20, 117, 45],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.1",
      shape: "rect",
      coords: [118, 26, 146, 46],
      fillColor: "green",
    },
    {
      name: "l.al.rib.1",
      shape: "rect",
      coords: [147, 26, 180, 46],
      fillColor: "green",
    },
    {
      name: "r.p.rib.1",
      shape: "rect",
      coords: [258, 24, 291, 47],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.1",
      shape: "rect",
      coords: [229, 29, 257, 47],
      fillColor: "green",
    },
    {
      name: "r.al.rib.1",
      shape: "rect",
      coords: [195, 28, 228, 45],
      fillColor: "green",
    },
    // rib 2
    {
      name: "l.p.rib.2",
      shape: "rect",
      coords: [61, 54, 83, 70],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.2",
      shape: "rect",
      coords: [83, 56, 111, 75],
      fillColor: "green",
    },
    {
      name: "l.al.rib.2",
      shape: "rect",
      coords: [112, 60, 140, 75],
      fillColor: "green",
    },
    {
      name: "l.a.rib.2",
      shape: "rect",
      coords: [141, 60, 180, 76],
      fillColor: "green",
    },
    {
      name: "r.p.rib.2",
      shape: "rect",
      coords: [293, 60, 316, 75],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.2",
      shape: "rect",
      coords: [264, 60, 292, 80],
      fillColor: "green",
    },
    {
      name: "r.al.rib.2",
      shape: "rect",
      coords: [236, 61, 263, 79],
      fillColor: "green",
    },
    {
      name: "r.a.rib.2",
      shape: "rect",
      coords: [197, 60, 235, 78],
      fillColor: "green",
    },

    // rib 3
    {
      name: "l.p.rib.3",
      shape: "rect",
      coords: [48, 84, 78, 103],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.3",
      shape: "rect",
      coords: [79, 85, 106, 103],
      fillColor: "green",
    },
    {
      name: "l.al.rib.3",
      shape: "rect",
      coords: [107, 86, 139, 108],
      fillColor: "green",
    },
    {
      name: "l.a.rib.3",
      shape: "rect",
      coords: [140, 88, 181, 108],
      fillColor: "green",
    },
    {
      name: "r.p.rib.3",
      shape: "rect",
      coords: [298, 90, 327, 107],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.3",
      shape: "rect",
      coords: [270, 91, 297, 107],
      fillColor: "green",
    },
    {
      name: "r.al.rib.3",
      shape: "rect",
      coords: [236, 92, 269, 110],
      fillColor: "green",
    },
    {
      name: "r.a.rib.3",
      shape: "rect",
      coords: [196, 88, 235, 108],
      fillColor: "green",
    },

    // rib 4
    {
      name: "l.p.rib.4",
      shape: "rect",
      coords: [37, 119, 78, 137],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.4",
      shape: "rect",
      coords: [79, 120, 103, 137],
      fillColor: "green",
    },
    {
      name: "l.al.rib.4",
      shape: "rect",
      coords: [104, 125, 140, 143],
      fillColor: "green",
    },
    {
      name: "l.a.rib.4",
      shape: "rect",
      coords: [141, 122, 181, 140],
      fillColor: "green",
    },
    {
      name: "r.p.rib.4",
      shape: "rect",
      coords: [298, 124, 333, 142],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.4",
      shape: "rect",
      coords: [272, 124, 297, 141],
      fillColor: "green",
    },
    {
      name: "r.al.rib.4",
      shape: "rect",
      coords: [233, 126, 271, 145],
      fillColor: "green",
    },
    {
      name: "r.a.rib.4",
      shape: "rect",
      coords: [195, 123, 232, 139],
      fillColor: "green",
    },

    // rib 5
    {
      name: "l.p.rib.5",
      shape: "rect",
      coords: [22, 152, 67, 174],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.5",
      shape: "rect",
      coords: [68, 156, 103, 175],
      fillColor: "green",
    },
    {
      name: "l.al.rib.5",
      shape: "rect",
      coords: [104, 159, 140, 178],
      fillColor: "green",
    },
    {
      name: "l.a.rib.5",
      shape: "rect",
      coords: [141, 157, 179, 177],
      fillColor: "green",
    },
    {
      name: "r.p.rib.5",
      shape: "rect",
      coords: [308, 158, 338, 177],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.5",
      shape: "rect",
      coords: [273, 155, 307, 178],
      fillColor: "green",
    },
    {
      name: "r.al.rib.5",
      shape: "rect",
      coords: [235, 162, 272, 178],
      fillColor: "green",
    },
    {
      name: "r.a.rib.5",
      shape: "rect",
      coords: [194, 156, 234, 177],
      fillColor: "green",
    },

    // rib 6
    {
      name: "l.p.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.al.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.a.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "r.p.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "r.pl.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "r.al.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "r.a.rib.5",
      shape: "rect",
      coords: [],
      fillColor: "green",
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
    this.setState({ msg: "Click on Fractured Ribs" });
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
  moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`,
    });
  };
  enterArea = (area) => {
    this.setState({
      hoveredArea: area,
      msg: `${area.name}`,
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
              width="350"
              height="425"
              //imgWidth="100"
              src={URL}
              map={MAP}
              onLoad={() => this.load()}
              onClick={(area) => this.clicked(area)}
              onMouseEnter={(area) => this.enterArea(area)}
              onMouseLeave={(area) => this.leaveArea(area)}
              // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              onImageClick={(evt) => this.clickedOutside(evt)}
              onImageMouseMove={(evt) => this.moveOnImage(evt)}
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
