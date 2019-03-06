var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  username: {
    type: String
  },
  email: {
      type: String
  },
  tel:{
  	type:Number
  },
  password:{
  	type:String
  }
},{
    collection: 'servers'
});

module.exports = mongoose.model('serverport',ServerPort);