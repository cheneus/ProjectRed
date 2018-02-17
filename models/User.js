const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const validateEmail = (email) => {
	const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
	// `title` is required and of type String
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true
	},
	// `link` is required and of type String
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: 'Email address is required',
		validate: [validateEmail, 'Please fill a valid email address'],
		match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('user', UserSchema);

// Export the Article model
module.exports = User;
