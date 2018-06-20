import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <p className="hello-paragraph">
          Hi, I’m Sarah. I’m a Seattle based Software Developer currently
          working at IMDb
        </p>
      </div>
    );
  }
}

export default Hello;