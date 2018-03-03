import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card } from 'material-ui/Card';
import LoginForm from '../components/LoginForm';
import Auth from '../modules/Auth';

class LoginPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }


    // set the initial component state
    this.state = {
      redirect: false,
      errors: {},
      successMessage,
      user: {
        email: '',
        password: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    console.log(formData);
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        console.log('if');
        // change the component-container state
        this.setState({
          errors: {},
        });

        // save the token
        console.log(xhr.response.token)
        localStorage.setItem('token', xhr.response.token)
        // Auth.authenticateUser(xhr.response.token);
        localStorage.setItem('usrname', JSON.stringify(xhr.response.user));

        console.log(JSON.parse(localStorage.getItem('usrname')).name);
        // if(xhr.response.user)
        // {
        //   console.log(xhr.response.user);
        // }
        // else{
        //   console.log('after signin no user returned');

        // }
        this.setState({ redirect: true });
        // change the current URL to /
        // this.context.router.replace('/');
      } else {
        // failure
        console.log('else');
        // change the component state
        console.log(xhr.response);
        // const errors = xhr.response.errors ? xhr.response.errors : {};
        // errors.summary = xhr.response.message;
        const errors = 'something happened';

        this.setState({
          errors,
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Card>
        {this.state.redirect === false ? (
          <LoginForm onSubmit={this.processForm}onChange={this.changeUser}errors={this.state.errors}successMessage={this.state.successMessage} user={this.state.user} />) : (
            <Redirect to="/dashboard" />

      )}
      </Card>

    );
  }
}

export default LoginPage;
