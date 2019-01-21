import React, { Component } from "react";
import "./styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="middle">©2018 setyourmood.com</p>
        <p className="middle">
          Developed by <a>Amado Marquez</a>
        </p>
      </div>
    );
  }
}

export default Footer;
