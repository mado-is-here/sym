import React, { Component } from "react";
import Color from "./Color";
import "./styles/ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#333"
    };
  }
  render() {
    const { color1 } = this.state;
    return (
      <div className="colorbox-wrapper">
        <div id="colorBox">
          <Color color={color1} />
        </div>
      </div>
    );
  }
}

export default ColorBox;
