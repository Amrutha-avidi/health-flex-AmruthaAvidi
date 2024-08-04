// models/tweet.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TweetModel = mongoose.model('tweet', tweetSchema);

module.exports = TweetModel;
