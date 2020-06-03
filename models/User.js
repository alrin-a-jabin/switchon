const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 7
},
phoneno:{
  type:Number,
  minlength: 6,
  maxlength: 12,
  required:true
},
  avatar: {
    type: String
  },
  address:{
    type:String
},
department:{
  type: String,
  required: true
},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);