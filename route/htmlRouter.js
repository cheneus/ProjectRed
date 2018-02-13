console.log("htmlRouter R")

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');

const db = require("../models");
const app = express();


const htmlRouter = express.Router();
htmlRouter.use(bodyParser.urlencoded({ extended: false }));
htmlRouter.use(bodyParser.json());

htmlRouter.route('/')
  .get((req, res, next) => {
    if ('/robots.txt' === req.url) {
      res.type('text/plain')
      res.send("User-agent: *\nDisallow: /");
  } else {
      res.redirect("/client/build/index.html")
  }
  });

module.exports = htmlRouter
