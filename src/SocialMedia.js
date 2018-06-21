import React, { Component } from "react";
import "./SocialMedia.css";
import github from "./media/github.svg";
import linkedin from "./media/linkedin.png";
import email from "./media/email.png";

class About extends Component {
  render() {
    return (
      <div className="social-media">
        <a href="https://github.com/sarahf95" target="_blank">
          <img className="social-img" src={github} alt="github" />
        </a>
        <a href="https://linkedin.com/in/sarahpfeldmann" target="_blank">
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto:sarahf95@gmail.com">
          <img className="social-img" src={email} alt="email" />
        </a>
      </div>
    );
  }
}

export default About;
