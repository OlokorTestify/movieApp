import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import LandingPage from "./landingPage";
import "./App.scss";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
