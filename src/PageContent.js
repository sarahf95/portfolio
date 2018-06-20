import React, { Component } from "react";
import "./PageContent.css";
import Hello from "./PageContent/Hello";
import Projects from "./PageContent/Projects";
import About from "./PageContent/About";

import { PageContent as Content } from "./Enums";

class PageContent extends Component {
  render() {
    return (
      <div className="page-content">
        {this.props.content === Content.HELLO && <Hello />}
        {this.props.content === Content.PROJECTS && <Projects />}
        {this.props.content === Content.ABOUT && <About />}
      </div>
    );
  }
}

export default PageContent;
