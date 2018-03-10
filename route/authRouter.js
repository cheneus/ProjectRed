console.log('authRouter R');

const express = require('express');

const router = express.Router();
const User = require('../models/User');
const passport = require('../passport');
const jwt = require('jsonwebtoken');
const config = require('../config');

const validateSignupForm = (payload) => {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (
    !payload ||
    typeof payload.email !== 'string' ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (
    !payload ||
    typeof payload.password !== 'string' ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (
    !payload ||
    typeof payload.name !== 'string' ||
    payload.name.trim().length === 0
  ) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};

router.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
  }),
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  }),
  (req, res) => {
    console.log('login is successful');
    res.json(req.user);
  },
);

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  console.log('================');
  console.log('next');
  // next()
  passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      console.log('working err');
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
    }
    console.log('being done');
    // res.json({
    console.log(token);
    console.log(userData);
    res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!
    return res.json({ msg: 'logging you out' });
  }
  return res.json({ msg: 'no user to log out!' });
});

router.post('/signup', (req, res) => {
  const { name, password, email } = req.body;
  // ADD VALIDATION
  console.log(req.body);
  User.findOne({ email }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        message: `Sorry, already a user with the email ${email}`,
      });
    }
    const newUser = new User({
      name,
      password,
      email,
    });
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'Failed to Sign Up',
          errors: err,
        });
      }
      res.status(200).json({
        success: true,
        message: 'You have successfully sign up with us!',
        user: savedUser,
      });
    });
  });
});

// router.get('/dashboard', (req, res) => {
// 	var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
// 	console.log("dash")
// 	jwt.verify(token, config.jwtSecret, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

// 		// res.status(200).send(decoded);
// 		res.status(200).json({
// 			message: "SEE IT NOW"
// 		})
//   })
// })

module.exports = router;
