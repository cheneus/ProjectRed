// Defining a stateless, functional component, MyNavLinks.
// This component contains your navigation links.
import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import ToolbarGroup from "material-ui/Toolbar/ToolbarGroup";
import { Link } from "react-router-dom";
import Auth from "../modules/Auth";
import "./navbar.css";
// Another stateless, functional component, MyAppBar.
// Here we are setting the iconElementRight property of Material UI's AppBar
// to the component defined above.
const NavBar = () => (
  <AppBar
    title="Travel"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
    <ToolbarGroup>
      <FlatButton label="Home" href="/" hoverColor="deepPurple" />
      {Auth.isUserAuthenticated() === false ? (
        <FlatButton label="Login" href="/login" hoverColor="lightGreen" />
      ) : (
        <FlatButton
          label="Log Out"
          href="/login"
          hoverColor="lightGreen"
          onClick={Auth.deauthenticateUser()}
        />
      )}
    </ToolbarGroup>
  </AppBar>
);

export default NavBar;
