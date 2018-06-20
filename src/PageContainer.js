import React, { Component } from "react";
import "./App.css";
import PageContent from "./PageContent";
import Nav from "./Nav";

class PageContainer extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <Nav content={this.props.content} />
        </div>
        <div className="page-content-wrapper">
          <PageContent content={this.props.content} />
        </div>
      </div>
    );
  }
}
export default PageContainer;
