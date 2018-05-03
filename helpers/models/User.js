const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  ID:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  des:{
    type: String
  },
  courses: {
    type: [[String]]
  }
});

mongoose.model('users', UserSchema);