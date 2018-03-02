import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Card, CardTitle } from "material-ui/Card";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/Navbar";
import {
   Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./containers/Home.jsx";
import LoginPage from "./containers/LoginPage.jsx";
import SignUpPage from "./containers/SignUpPage.jsx";
import Login from "./components/Login";
import history from "./modules/history"

injectTapEventPlugin();

const App = () => (
  <Router history={history}>
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path='/details' component={Detail}/> */}
          <Route path="/signup" component={SignUpPage} />
          <Route component={Home} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
