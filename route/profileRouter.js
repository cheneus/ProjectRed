console.log('profileRoute R')

const express = require('express')
const profileRouter = express.Router()
const Verify = require('../passport/verify')

profileRouter.route('/')
  .get((req, res, next) => {
    res.status(200).json({
      message: 'You\'re authorized to see this secret message.'
    })
})


module.exports = profileRouter
