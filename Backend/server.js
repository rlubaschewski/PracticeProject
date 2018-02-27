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
        if(!req.body.username || !req.body.password || !req.body.name) {
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
             db.collection('users').findOne({username: req.body.username}, function(err, result) {
                if(err)
                    return res.sendStatus(503)

                if(result)
                    return res.sendStatus(403)
                else {
                    //writes the new user into the collection
                    db.collection('users').insertOne(req.body, function(err) {
                        if(err) {
                            console.log(err)
                            return res.sendStatus(503)
                        }
                        res.sendStatus(200)
                    })
                }
            })
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

app.post('/login', (req, res) => {
    try {
        if(!req.body.username || !req.body.password) {
            res.sendStatus(403)
            return
        }

        MongoClient.connect(url, function(err, db) {
            if(err) {
                console.log(err)
                res.sendStatus(503)
                return   
            }
        
            db.collection('users').findOne({username: req.body.username}, function(err, result) {
                if(err)
                    return res.sendStatus(503)

                if(result)
                    res.sendStatus(200)
                else
                    return res.sendStatus(403)
            })
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

app.get('/articles/:sub', (req, res) => {
    try {
        let sub = req.params.sub;
        // No JSON or no sub.
        if (!typeof req.body === 'object' || !sub) {
            res.sendStatus(400);
            return;
        }
        MongoClient.connect(url, function(err, db) {
            if(err) {
                console.log(err)
                res.sendStatus(503)
                return   
            }
            //gets all articles from the database
            if(sub === 'all') {
                db.collection('articles').find({}).toArray(function(err, result) {
                    if(err)
                        return res.sendStatus(503)
                    else {
                        res.status(200).json(result)
                    }
                        
                })
            }
            //gets all articles from a specific sub
            else {
                db.collection('articles').find({sub: sub}).toArray(function(err, result) {
                    if(err)
                        return res.sendStatus(503)
                    else {
                        res.status(200).json(result)
                    }
                        
                })
            }
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})
app.post('/create:user', (req, res) => {
    try {
        MongoClient.connect(url, function(err, db) {
            if(err) {
                console.log(err)
                res.sendStatus(503)
                return   
            } else {
                // user does not exist, can't create any articles
                db.collection('users').findOne({username: req.params.user}, function(err, result) {
                    if(err)
                        return res.sendStatus(503)
    
                    if(result) {
                        db.collection('articles').insertOne(req.body, function(err) {
                            if(err) {
                                console.log(err)
                                return res.sendStatus(503)
                            }
                            res.sendStatus(200)
                        })
                    }
                    else
                        return res.sendStatus(403)
                })
            }
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})