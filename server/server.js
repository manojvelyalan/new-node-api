const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/NewApp',{ useNewUrlParser: true });

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

var newApp = new App({
  name:'Manoj',
  age:65,
  date:new Date('1983-05-23'),
});
newApp.save().then((docs)=>{
  console.log(docs);
},(error)=>{
console.log('unable to save the reccord',error)
});
