const http = require('http');
const bodyParser  = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true ,userNewUrlParse: true}));
app.use(express.static(__dirname + '/public'));

app.get('/',function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);