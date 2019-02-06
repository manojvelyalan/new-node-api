const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('../db/mongoose.js');
const {App} = require('../models/app.js');

var app = express();

app.use(bodyParser.json());

app.post('/app',(req , res)=>{
  var newApp = new App({
    name:req.body.name,
    age:req.body.age,
    date:new Date(req.body.date),
  });
  newApp.save().then((docs)=>{
    res.send(docs);
  },(error)=>{
  res.status(400).send(error);
});
});

app.listen(3000,()=>{
  console.log('server connected');
});
