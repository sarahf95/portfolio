import React, { Component } from "react";
import { Link } from "react-router-dom";
import resume from "./media/resume.pdf";
import "./Nav.css";
import { PageContent } from "./Enums";

class Nav extends Component {
  render() {
    let selected = this.props.content;
    console.log("selected", selected);
    return (
      <div className="nav">
        <ul>
          <li>
            <Link
              to={"/hello"}
              className={selected === PageContent.HELLO ? "active" : ""}
            >
              HELLO
              <div
                className={
                  selected === PageContent.HELLO ? "underline" : "no-underline"
                }
              />
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className={selected === PageContent.PROJECTS ? "active" : ""}
            >
              PROJECTS
              <div
                className={
                  this.props.content === PageContent.PROJECTS
                    ? "underline"
                    : "no-underline"
                }
              />
            </Link>
          </li>
          {/* <li>
            {" "}
            <Link
              to={"/research"}
              className={selected === PageContent.RESEARCH ? "active" : ""}
            >
              RESEARCH
              <div
                className={
                  selected === PageContent.RESEARCH
                    ? "underline"
                    : "no-underline"
                }
              />
            </Link>
          </li> */}
          <li>
            <Link to={resume} target="_blank">
              RESUME
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              ABOUT
              className={selected === PageContent.ABOUT ? "active" : ""}
            >
              ABOUT
              <div
                className={
                  selected === PageContent.ABOUT ? "underline" : "no-underline"
                }
              />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
