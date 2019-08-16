import React, { Component } from "react";
import Mobile from "./images/Mobile.png";
import "./Card2.css";

class Card2 extends Component {
  render() {
    return (
      <div>
        <img className="mobile" src={Mobile} alt="" />
      </div>
    );
  }
}

export default Card2;
