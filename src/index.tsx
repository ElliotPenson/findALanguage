import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./index.css";
import { App } from "./components/App";
import { Browse } from "./components/Browse";
import { Language } from "./components/Language";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/browse" component={Browse} />
      <Route component={Language} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
