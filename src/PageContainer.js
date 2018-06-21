import React, { Component } from "react";
import "./App.css";
import "./PageContainer.css";
import PageContent from "./PageContent";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
import Header from "./Header";
class PageContainer extends Component {
  render() {
    return (
      <div>
        <div className="header-media-wrapper">
          <div className="header-wrapper">
            <Header />
          </div>
          <div className="social-media-wrapper">
            <SocialMedia />
          </div>
        </div>
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
