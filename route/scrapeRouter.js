console.log("scrapRoute R");

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')


const app = express();
const scrapRouter = express.Router();

scrapRouter.route('/')
  .get((req, res, next) => {
      res.json("Complete")
    });


module.exports = scrapRouter
