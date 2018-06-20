import React, { Component } from "react";
import ampr from "../media/ampr.png";
import amazon from "../media/amazon.png";
import caffeinade from "../media/caffeinade.png";
import mealmatch from "../media/mealmatch.png";
import yumme from "../media/yumme.png";
import "./Projects.css";

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <div className="projects">
          <img className="project-img" src={amazon} />
          <img className="project-img" src={ampr} />
          <img className="project-img" src={mealmatch} />
          <img className="project-img" src={caffeinade} />
          <img className="project-img" src={yumme} />
        </div>
      </div>
    );
  }
}

export default Hello;
