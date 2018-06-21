import React, { Component } from "react";
import "./App.css";
import { Routes, PageContent } from "./Enums";
import PageContainer from "./PageContainer";

class App extends Component {
  render() {
    let path = window.location.href.split("/")[3];
    let content = "";
    switch (path) {
      case Routes.PROJECTS:
        content = PageContent.PROJECTS;
        break;
      case Routes.RESEARCH:
        content = PageContent.RESEARCH;
        break;
      case Routes.RESUME:
        content = PageContent.RESUME;
        break;
      case Routes.ABOUT:
        content = PageContent.ABOUT;
        break;
      default:
        content = PageContent.HELLO;
        break;
    }
    return (
      <div className="App">
        <PageContainer content={content} />
      </div>
    );
  }
}

export default App;
