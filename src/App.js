import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ColorBox from "./components/ColorBox";
import Footer from "./components/Footer";
import MoodSelector from "./components/MoodSelector";

const initialState = {
  theme: "summer", // a theme is a pre-chosen mood and music combination
  mood: "auto", // this can be custom chosen, or set to auto which follows theme
  music: "auto", // this can be custom chosen, or set to auto which follows theme
  fullscreen: false
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div>
        <Navbar />
        <MoodSelector />
        <ColorBox />
        <Footer />
      </div>
    );
  }
}

export default App;
