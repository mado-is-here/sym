import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ColorBox from "./components/ColorBox";
import Footer from "./components/Footer";
import MoodSelector from "./components/MoodSelector";

const initialState = {
  mood: "summer",
  fullscreen: false
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleMoodSelection = mood => {
    this.setState({ mood });
  };

  render() {
    return (
      <div>
        <Navbar />
        <MoodSelector onMoodSelection={this.handleMoodSelection} />
        <ColorBox mood={this.state.mood} />
        <Footer />
      </div>
    );
  }
}

export default App;
