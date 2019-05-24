var mongoose = require('mongoose');
require('../config/db');
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,

  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);