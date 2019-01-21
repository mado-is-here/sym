import React, { Component } from "react";
import Color from "./Color";
import "./styles/ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#333",
      color2: "#555",
      color3: "#777"
    };
  }
  render() {
    const { color1, color2, color3 } = this.state;
    return (
      <div id="colorBox">
        <Color color={color1} />
      </div>
    );
  }
}

export default ColorBox;
