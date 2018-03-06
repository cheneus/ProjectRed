import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './Login.css'
import PropTypes from 'prop-types'
import NavBar from '../NavBar'

class Login extends Component {
	render() {
		return (	
			<div className="login">
			<NavBar />
				<div className="userinfo">
					<h4>Name: </h4>
					<h4>Email: </h4>
					<h4>Past Results: </h4>
				</div>
			</div>
		);
	}
}

export default Login;
