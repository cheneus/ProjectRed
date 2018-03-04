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
  <nav class="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">
      TraveLlama
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <i class="material-icons">menu</i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>

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
