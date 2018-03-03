// class Auth {
//   /**
//    * Authenticate a user. Save a token string in Local Storage
//    *
//    * @param {string} token
//    */
//   static authenticateUser(token) {
//     console.log("authUser")
//     localStorage.setItem('token', token);
//   }

//   /**
//    * Check if a user is authenticated - check if a token is saved in Local Storage
//    *
//    * @returns {boolean}
//    */
//   static isUserAuthenticated() {
//     return localStorage.getItem('token') !== null;
//   }

//   /**
//    * Deauthenticate a user. Remove a token from Local Storage.
//    *
//    */
//   static deauthenticateUser() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('usrname');

//   }

//   /**
//    * Get a token value.
//    *
//    * @returns {string}
//    */

//   static getToken() {
//     return localStorage.getItem('token');
//   }

// }
import React from 'react';

const Auth = {
  authenticateUser: (token) => {
    console.log(token);
    localStorage.setItem('token', token);
  },
  getToken: () => localStorage.getItem('token'),
  isUserAuthenticated: () => localStorage.getItem('token') !== null,
  deauthenticateUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usrname');
  },
};

export default Auth;
