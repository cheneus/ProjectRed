// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({onSubmit,onChange,errors,successMessage,user}) => (
  // <div className="card" style={{padding: '10px'}}>
  //   {/* <h3 className="card-header"> Welcome back to TraveLlama </h3> */}
  //   <div className="card-block">
  //   <h2 className="card-header">Login</h2> 
  //   <form action="/" className="form-control" onSubmit={onSubmit}>


  //     {successMessage && <p className="success-message">{successMessage}</p>}
  //     {errors.summary && <p className="error-message">{errors.summary}</p>}

  //     <div className="field-line">
  //       <TextField
  //         floatingLabelText="Email"
  //         name="email"
  //         errorText={errors.email}
  //         onChange={onChange}
  //         value={user.email}
  //       />
  //     </div>

  //     <div className="field-line">
  //       <TextField
  //         floatingLabelText="Password"
  //         type="password"
  //         name="password"
  //         onChange={onChange}
  //         errorText={errors.password}
  //         value={user.password}
  //       />
  //     </div>

  //     <div className="button-line">
  //       <RaisedButton type="submit" label="Log in" primary />
  //     </div>

  //     <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
  //   </form>
  //   </div>
  // </div>

<div class="card rounded-0">
<div class="card-header">
    <h3 class="mb-0">Login</h3>
</div>
<div class="card-body">
    <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
        <div class="form-group">
            <label for="uname1">Username</label>
            <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
            <div class="invalid-feedback">Oops, you missed this one.</div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
            <div class="invalid-feedback">Enter your password too!</div>
        </div>
        <div>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" />
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description small text-dark">Remember me on this computer</span>
            </label>
        </div>
        <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
    </form>
</div>
</div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
