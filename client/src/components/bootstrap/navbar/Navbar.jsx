// Defining a stateless, functional component, MyNavLinks.
// This component contains your navigation links.
import React from "react";
// import AppBar from "material-ui/AppBar";
// import FlatButton from "material-ui/FlatButton";
// import ToolbarGroup from "material-ui/Toolbar/ToolbarGroup";
import { Link } from "react-router-dom";
import Auth from "../../../modules/Auth";
import "./navbar.css";
// Another stateless, functional component, MyAppBar.
// Here we are setting the iconElementRight property of Material UI's AppBar
// to the component defined above.
const NavBar = () => (
  <div className="jumbotron">
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand">
      <img src="img/myLlama_updated.png" alt="logo" className="blogo img img-fluid"/>
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quiz">
              Quiz
            </a>
          </li>
        </ul>
        {Auth.isUserAuthenticated() === false ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Register
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={Auth.deauthenticateUser()}
              >
                Log Out
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  </div>

  // <AppBar
  //   title="Travel"
  //   iconClassNameRight="muidocs-icon-navigation-expand-more"
  // >
  //   <ToolbarGroup>
  //     <FlatButton label="Home" href="/" hoverColor="deepPurple" />
  //     {Auth.isUserAuthenticated() === false ? (
  //       <FlatButton label="Login" href="/login" hoverColor="lightGreen" />
  //     ) : (
  //       <FlatButton
  //         label="Log Out"
  //         href="/login"
  //         hoverColor="lightGreen"
  //         onClick={Auth.deauthenticateUser()}
  //       />
  //     )}
  //   </ToolbarGroup>
  // </AppBar>
);

export default NavBar;
