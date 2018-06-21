import React, { Component } from "react";
import { Link } from "react-router-dom";
import resume from "./media/resume.pdf";
import "./Header.css";

class Header extends Component {
  render() {
    let selected = this.props.content;
    console.log("selected", selected);
    return (
      <div className="header">
        <Link to={"/hello"}>
          {" "}
          <h1 className="heading">SF</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
