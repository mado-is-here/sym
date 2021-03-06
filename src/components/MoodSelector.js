import React, { Component } from "react";
import "./styles/MoodSelector.css";

class MoodSelector extends Component {
  //handles smiley menu / expanding or shrinking it when clicked
  toggleMenu = () => {
    let ul = document.querySelector(".cat1");
    let icon = document.querySelector(".fa-smile");

    icon.classList.toggle("active");
    if (ul.classList.length === 1) {
      ul.classList.toggle("slide-in");
    } else {
      if (ul.classList.contains("slide-in")) {
        let innerLists = document.querySelectorAll(".cat2");

        innerLists.forEach(function(element) {
          if (element.classList.contains("expand")) {
            element.classList.toggle("expand");
            element.classList.toggle("shrink");
          }
        });
      }
      ul.classList.toggle("slide-in");
      ul.classList.toggle("slide-out");
    }
  };

  //expands and shrinks mood selection categories
  toggleCategory = event => {
    const { target } = event;
    if (target.classList.contains("mood")) {
      this.props.onMoodSelection(target.innerHTML.toLowerCase());
    } else if (target.classList.contains("category")) {
      let ol = target.childNodes[2];

      if (ol.classList.length === 1) {
        ol.classList.toggle("expand");
      } else {
        ol.classList.toggle("expand");
        ol.classList.toggle("shrink");
      }
    }
  };

  render() {
    return (
      <div className="mood-selector-wrapper">
        <a id="mood-selector" onClick={this.toggleMenu}>
          <i className="far fa-smile" />
        </a>
        <ul className="cat1">
          <li className="category" onClick={this.toggleCategory}>
            {" "}
            Emotions
            <ol className="cat2">
              <li className="mood">Happiness</li>
              <hr />
              <li className="mood">Love</li>
              <hr />
              <li className="mood">Sadness</li>
              <hr />
            </ol>
          </li>
          <hr />

          <li className="category" onClick={this.toggleCategory}>
            {" "}
            Holidays
            <ol className="cat2">
              <li className="mood">Christmas</li>
              <hr />
              <li className="mood">Halloween</li>
              <hr />
            </ol>
          </li>
          <hr />

          <li className="category" onClick={this.toggleCategory}>
            {" "}
            Seasons
            <ol className="cat2">
              <li className="mood">Spring</li>
              <hr />
              <li className="mood">Summer</li>
              <hr />
              <li className="mood">Autumn</li>
              <hr />
              <li className="mood">Winter</li>
              <hr />
            </ol>
          </li>
          <hr />

          <li className="category" onClick={this.toggleCategory}>
            {" "}
            Vibes
            <ol className="cat2">
              <li className="mood">City</li>
              <hr />
              <li className="mood">Gamer</li>
              <hr />
              <li className="mood">Sunset</li>
              <hr />
              <li className="mood">Rainbow</li>
              <hr />
            </ol>
          </li>
          <hr />
        </ul>
      </div>
    );
  }
}

export default MoodSelector;
