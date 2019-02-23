import React, { Component } from "react";
import { moodsObj } from "../modules/theme-data";
import "./styles/ColorBox.css";

//return random number from 0 to the number passed in (ex: 0 to 10)
//the number passed-in itself will not be a possible returned value
const randomNumber = num => {
  return Math.floor(Math.random() * num);
};

//divides
const getSpeedByScreenSize = size => {
  if (size > 1536) return 5;
  if (size <= 1536 && size > 1152) return 4;
  if (size <= 1152 && size > 768) return 3;
  if (size <= 768 && size > 384) return 2;
  if (size <= 384) return 1;
};

class ColorBox extends Component {
  componentDidMount() {
    const canvas = document.querySelector("canvas");
    const { offsetWidth: WIDTH, offsetHeight: HEIGHT } = document.querySelector(
      ".colorbox"
    );
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style = "background: linear-gradient(#fff, #2198af);";

    const context = canvas.getContext("2d");

    //control panel for all Light object properties
    const lightProperties = {
      qty: 8,
      speed: getSpeedByScreenSize(Math.min(WIDTH, HEIGHT)),
      radius: Math.floor(Math.max(WIDTH, HEIGHT) / 1.5),
      colors: moodsObj[2].moods[2].colors
    };

    //the Light object, a single-color radial gradient that goes from a semi transparent center to a fully transparent outer
    function Light({ x, y, xv, yv, color, radius }) {
      this.x = x;
      this.y = y;
      this.xv = xv;
      this.yv = yv;
      this.radius = radius;
      this.color = color;

      //makes sure the gradient displays its position accurately
      this.resetGradient = () => {
        this.radialGradient = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        this.radialGradient.addColorStop(
          0.0,
          `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`
        );
        this.radialGradient.addColorStop(
          1.0,
          `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`
        );
      };

      //draws the object at its current x and y position
      this.draw = () => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.radialGradient;
        context.fill();
      };

      //changes the x and y position of the object
      this.update = () => {
        if (this.x >= WIDTH || this.x <= 0) {
          this.xv = -this.xv;
        }
        if (this.y >= HEIGHT || this.y <= 0) {
          this.yv = -this.yv;
        }
        this.x += this.xv;
        this.y += this.yv;

        this.resetGradient();
        this.draw();
      };
    }

    //returns an array of Light objects with a length equal to the number passed in
    //x and y position will be randomized
    const createLights = globalProperties => {
      const arr = [];
      const { speed, radius, qty, colors } = globalProperties;

      for (let i = 0; i < qty; i++) {
        const initialProperties = {
          x: randomNumber(WIDTH), // randomizes x position
          y: randomNumber(HEIGHT), // randomizes y position
          xv: (randomNumber(2) === 0 ? -1 : 1) * speed, // randomizes x direction
          yv: (randomNumber(2) === 0 ? -1 : 1) * speed, // randomizes y direction
          color: colors[i % colors.length], // cycles through colors array to make sure a color is always available
          radius
        };

        const light = new Light(initialProperties);
        arr.push(light);
      }
      arr.forEach(item => {
        item.draw();
      });
      return arr;
    };

    let lights = createLights(lightProperties);

    //animates each object/light the lights array
    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, WIDTH, HEIGHT);
      lights.forEach(each => {
        each.update();
      });
    };

    animate();
  }
  render() {
    return (
      <div className="colorbox">
        <canvas />
      </div>
    );
  }
}

export default ColorBox;
