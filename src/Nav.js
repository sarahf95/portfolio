import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to={"/hello"}>HELLO</Link>
          </li>
          <li>
            <Link to={"/projects"}>PROJECTS</Link>
          </li>
          <li>
            {" "}
            <Link to={"/research"}>RESEARCH</Link>
          </li>
          <li>
            <Link to={"/resume"}>RESUME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
