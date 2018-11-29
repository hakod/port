const http = require('http');
const bodyParser  = require('body-parser');
const cors = require('cors');
const express = require('express');
const MongoClient = require('mongodb');
const app = express();
const path = require('path')
const CON = process.env.MONGO
const helmet = require('helmet')

app.use(helmet());
app.use(helmet.xssFilter());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true ,userNewUrlParse: true}));
app.use(express.static(__dirname + '/public'));

app.post('/',function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  MongoClient.connect(CON,(err,db)=>{
    let col = db.db('masd')
    let coll = col.collection('portfolio')
    coll.insert({name: name, email: email, message: message})
    })
  res.redirect('/')
});

app.get('/',function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(process.env.PORT);