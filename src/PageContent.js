import React, { Component } from "react";
import "./PageContent.css";
import Hello from "./PageContent/Hello";
import Projects from "./PageContent/Projects";

import { PageContent as Content } from "./Enums";

class PageContent extends Component {
  render() {
    return (
      <div className="page-content">
        {this.props.content === Content.HELLO && <Hello />}
        {this.props.content === Content.PROJECTS && <Projects />}
      </div>
    );
  }
}

export default PageContent;
