import React, { Component } from "react";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Link, Redirect } from "react-router-dom";
import { Card, CardText } from "material-ui/Card";

class RegisterPage extends Component {
  state = {
    redirect: false,
    errors: {},
    name: "",
    email: "",
    password: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  registerUser = event => {
    event.preventDefault();
    console.log("working");
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    axios
      .post("/auth/signup", { name, email, password })
      .then(res => {
        console.log(res.data);
        this.setState({ message: res.data });
        localStorage.setItem("successMessage", res.data.message);
        if(res.data.success === true) {
        this.setState({ redirect: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ errors: err });
      });
  };

  renderMessage = () => {
    const message = this.state.message;
    if (message !== "") {
      if (message.success === false) {
        return <p className="danger">{message.message} </p>;
      }
      if (message.success === true) {
        return <p className="primary">{message.message} </p>;
      }
    }
  };

  render() {
    return (
      <div className="col-lg-6 offset-lg-3">
        {this.state.redirect === false ? (
          <div className="card" style={{ padding: "10px" }}>
          <div className="card-block">
            
              <h2 className="card-header">Sign Up</h2>
              <form  className="form-control" >
              {this.state.message.message}

              <div className="field-line">
                <TextField
                  floatingLabelText="Name"
                  name="name"
                  errorText={this.state.errors.name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="field-line">
                <TextField
                  floatingLabelText="Email"
                  name="email"
                  errorText={this.state.errors.email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Password"
                  type="password"
                  name="password"
                  onChange={this.handleInputChange}
                  errorText={this.state.errors.password}
                />
              </div>

              <div className="button-line">
                <button className="btn btn-primary" onClick={this.registerUser}>
                  Sign Up
                </button>
              </div>

              <CardText>
                Already have an account? <Link to="/login">Log in</Link>
              </CardText>
            </form>
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default RegisterPage;
