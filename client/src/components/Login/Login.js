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
					<h3>Name: </h3>
					<h3>Email: </h3>
					<h3>Past Results: </h3>
				</div>
			</div>
		);
	}
}

export default Login;
