import React, { Component } from "react";

class Color extends Component {
  state = {
    color: "#333",
    initPos: 0,
    currentPos: 0
  };
  render() {
    return <div className="color" />;
  }
}

export default Color;
