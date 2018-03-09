import React from 'react';

const Auth = {
  // authenticateUser: (token) => {
  //   console.log(token);
  //   localStorage.setItem('token', token);
  // },
  getToken: () => localStorage.getItem('token'),
  isUserAuthenticated: () => localStorage.getItem('token') !== null,
  deauthenticateUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  },
};

export default Auth;