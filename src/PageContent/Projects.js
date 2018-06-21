import React, { Component } from "react";
import ampr from "../media/ampr.png";
import amazon from "../media/amazon.png";
import caffeinade from "../media/caffeinade.png";
import mealmatch from "../media/mealmatch.png";
import yumme from "../media/yumme.png";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects">
          <div id="amazon" className="project-img" />
          <div id="ampr" className="project-img" />
          <div id="mealmatch" className="project-img" />
          <div id="caffeinade" className="project-img" />
          <div id="yumme" className="project-img" />
        </div>
      </div>
    );
  }
}

export default Projects;
