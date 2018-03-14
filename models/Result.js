// this is temp solution
// grab the things we need
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  personality: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  suggestion: [{
    type: Schema.Types.ObjectId,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
}, {
  timestamps: true,
});

// we need to create a model using it
const Result = mongoose.model('result', ResultSchema);

// make this available to our Node applications
module.exports = Result;
