const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FormSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  task: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  department:{
      type:String
  },
  status:{
    type:String
  },
  asigneduserid:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
 data:{
   type:String,
   default:null
 },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Form = mongoose.model('form', FormSchema);