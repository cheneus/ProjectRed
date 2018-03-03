import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Auth from '../modules/Auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (Auth.isUserAuthenticated()) === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default PrivateRoute;
