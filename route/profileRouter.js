console.log('profileRoute R');
const User = require('../models/User');
const express = require('express');
const router = express.Router();
const Verify = require('../passport/verify');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.get('', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  console.log(token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      console.log(err);
      if (err) {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      console.log(req.decoded);
      console.log(decoded);
      User.findById(req.decoded.sub, (userErr, user) => {
        if (userErr || !user) {
          return res.status(401).end();
        }
       return res.json({
          user,
          message: 'You\'re authorized to see this secret message.',
        });
      });
    });
  } else {
    // if there is no token
    // return an error
    const err = new Error('No token provided!');
    err.status = 403;
    return next(err);
  }
  //  res.json("teah")
  // (req, res, next);
});

// profileRouter.route('/')
//   .get(Verify.verifyUser, (req, res, next) => {
//     console.log('profile');
//     console.log(req.decoded);
//     console.log(res.user);
//     console.log('++++++');
//     User.findById(req.decoded.sub)
//       .then((user) => {
//         res.status(200).json({
//           user,
//           message: 'You\'re authorized to see this secret message.',
//         });
//       })
//       .catch((err) => {
//         res.status(401).json({
//           message: 'You\'re NOT authorized to see this secret message.',
//         });
//       });
//   });


module.exports = router;
