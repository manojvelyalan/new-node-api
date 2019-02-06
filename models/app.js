
var mongoose = require('mongoose');

var App = mongoose.model('app',{
  'name':{
    type:String

  },
  'age':{
    type:Number,
    required:true
  },
  'date':{
    type:Date
  }
});

module.exports = {App};
