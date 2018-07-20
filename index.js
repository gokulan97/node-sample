var express = require('express');

var app = express();
var routes = require('./routes.js');

var mongoose = require('mongoose');
var user = require('./student.js')
mongoose.connect('mongodb://localhost:27017/mydatabase');

app.use('/',routes);
app.listen(3000);