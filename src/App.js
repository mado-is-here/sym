import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ColorBox from './components/ColorBox';
import Footer from './components/Footer';
import MoodSelector from './components/MoodSelector';

class App extends Component {

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
