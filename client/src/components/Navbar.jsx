// Defining a stateless, functional component, MyNavLinks. 
// This component contains your navigation links.
import React from "react";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'

import {Link} from 'react-router-dom'
// Another stateless, functional component, MyAppBar. 
// Here we are setting the iconElementRight property of Material UI's AppBar 
// to the component defined above.

const NavBar = () => (
  
    <AppBar title="Brand">
  <ToolbarGroup>
    <FlatButton label="Home" containerElement={<Link to="/"/>}/>
    <FlatButton label="Login" containerElement={<Link to="login" />}/>
    <FlatButton label="SignUp" containerElement={<Link to="signup" />}/>
  </ToolbarGroup> 

    </AppBar>
)

export default NavBar;
