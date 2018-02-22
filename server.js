const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('./passport')

// env config
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();
const scrapeRouter = require('./route/scrapeRouter');
const htmlRouter = require('./route/htmlRouter');
const productRouter = require('./route/productRouter');
const authRouter = require('./route/authRouter');

// Configure middleware
// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Use express.static to serve the public folder as a static directory
// app.use(express.static("public/js"));
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'));
	});
} else {
	app.use(express.static('client/public'));
}
app.use(express.static('public'));

// database
const connection = process.env.MONGODB_URI || 'mongodb://localhost/travel';

mongoose.connect(connection, { useMongoClient: true },
	(err) => {
		if (err) throw err;
	});

// app.use('/', htmlRouter)
app.use('/scrape', scrapeRouter);
app.use('/product', productRouter);
app.use('/auth', authRouter);

// to prove express is working
app.get('/api/hello', (req, res) => {
	res.json({ express: 'Hello From Express' });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${env} , ${PORT}`);
});
