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
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.pl.rib.2",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.al.rib.2",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },
    {
      name: "l.a.rib.2",
      shape: "rect",
      coords: [],
      fillColor: "green",
    },

    // rib 3
    {
      name: "l.p.rib.2",
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
