console.log('authRouter R')

const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../passport')

router.get('/google', passport.authenticate('google', {session:false, scope: ['profile', 'email'] }))
router.get('/google/callback',
	passport.authenticate('google', {
		successRedirect: '/profile',
		failureRedirect: '/login'
	}), (req, res) => {
		console.log('login is successful')
		res.json(req.user)
	}

)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		res.json({ user: req.user })
	} else {
		res.json({ user: null })
	}
})

router.get('/login', (req,res,next) => {

})

router.post('/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.get('/logout', function(req, res){
	req.logOut()
	console.log(res.body)
})

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password, email } = req.body
	// ADD VALIDATION
	console.log(req.body)
	User.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email ${email}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password,
			'email': email
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router