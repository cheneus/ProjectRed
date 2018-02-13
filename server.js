const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require("request");

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

// Require all models
const db = require("./models");
const PORT = process.env.PORT || 5000;
// Initialize Express
const app = express();
const scrapeRouter = require('./route/scrapeRouter')
const htmlRouter = require('./route/htmlRouter')
const productRouter = require('./route/productRouter')

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
// app.use(express.static("public/js"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static('public'));

const connection = process.env.MONGODB_URI || 'mongodb://localhost/coffee'

mongoose.connect(connection, { useMongoClient: true },
  function(err) {
    if (err) throw err
  })

// app.use('/', htmlRouter)
app.use('/scrape', scrapeRouter)
app.use('/product', productRouter)

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${env} , ${PORT}`)
})
