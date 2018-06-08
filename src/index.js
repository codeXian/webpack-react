import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Theme from "./Theme";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Theme} path="/theme" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
