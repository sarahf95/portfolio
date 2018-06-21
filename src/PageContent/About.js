import React, { Component } from "react";
import "./About.css";
import sarah from "../media/sarah.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <img className="grad-pic" src={sarah} alt="sarah" />
        <p className="about-me-paragraph">
          I am a recently graduated from the University of Washington with a
          bachelors in Informatics and a minor in entrepreneurship. During my
          time at the iSchool, I focused on human computer interaction and front
          end development. I am passionate about connecting people with
          technology and finding creative solutions to projects. My Informatics
          capstone AMPR showcases this clearly.
          <br />
          <br />
          In my free time I enjoy running, hiking, and enjoying Seattle’s great
          food and beer with friends. I also enjoy traveling, music, and dogs.
        </p>
      </div>
    );
  }
}

export default About;
