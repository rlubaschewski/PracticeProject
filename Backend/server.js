const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// console logs
const morgan = require('morgan')
const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081, function() {
    console.log('Server is listening on port 8081')
})

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'practiceproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});

app.post('/register', (req, res) => {
    try {
        if(!req.body.name || !req.body.password) {
            res.sendStatus(403)
            return
         }
         MongoClient.connect(url, function(err, db) {
             if(err) {
                 console.log(err)
                 res.sendStatus(503)
                 return   
             } 
     
             //checks if the user is already registered
             db.collection('users').find({}).toArray(function(err, result) {

                 if(err)
                 return res.sendStatus(503)

                 for(let i = 0; i < result.length; i++) {
                     // user already exists
                     if(result[i].name === req.body.name)
                     return res.sendStatus(403)
                 }
             })
     
                 //writes the new user into the collection
                 db.collection('users').insertOne(req.body, function(err) {
                     if(err) {
                         console.log(err)
                         return res.sendStatus(503)
                     }
                     res.sendStatus(200)
                 })
             })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})