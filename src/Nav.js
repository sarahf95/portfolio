import React, { Component } from "react";
import { Link } from "react-router-dom";
import resume from "./media/resume.pdf";
import "./Nav.css";
import { PageContent } from "./Enums";
import close from "./media/cross-out.svg";
import collaspedNav from "./media/collasped-nav.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true
    };
  }
  close() {
    this.setState({
      nav: false
    });
  }
  open() {
    this.setState({
      nav: true
    });
  }
  render() {
    let selected = this.props.content;
    console.log("selected", selected);
    return (
      <div>
        {this.state.nav ? (
          <div className="nav">
            <div className="close" onClick={this.close.bind(this)}>
              <img className="close-icon" src={close} alt="close" />
            </div>
            <ul>
              <li>
                <Link
                  to={"/hello"}
                  className={selected === PageContent.HELLO ? "active" : ""}
                >
                  HELLO
                  <div
                    className={
                      selected === PageContent.HELLO
                        ? "underline"
                        : "no-underline"
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
                      selected === PageContent.ABOUT
                        ? "underline"
                        : "no-underline"
                    }
                  />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collasped-nav-wrapper">
            {" "}
            <img
              src={collaspedNav}
              alt="nav"
              className="collasped-nav"
              onClick={this.open.bind(this)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
