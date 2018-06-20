import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/hello" component={App} />
      <Route path="/projects" component={App} />
      <Route path="/research" component={App} />
      <Route path="/resume" component={App} />
      <Route path="/about" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
