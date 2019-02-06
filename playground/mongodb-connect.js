//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error, client)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server....');
  const db = client.db('TodoApp');
  /*db.collection('Users').insertOne({
    Customer:'Normal',
    FullName : 'Manoj Velyalan',
    Dob:'23/05/1983',
  },(err,result)=>{
    if(err){
      return console.log('Unable to inser todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2))
  });
  client.close();


  db.collection('Users').find({_id:new ObjectID('5c5ada877dccf2a61523eeed')}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log("Sorry unable to fetch the reccord",error);
  });


  db.collection('Users').find().count().then((count)=>{
    console.log(JSON.stringify(`count of an documents:${count}`));
  },(error)=>{
    console.log("Sorry unable to fetch the reccord",error);
  });*/
  db.collection('Users').find({FullName:'Manoj Velyalan'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log("Sorry unable to fetch the reccord",error);
  });

},);
