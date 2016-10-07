var express = require('express');
mongoose = require('mongoose');



var mongoUri = 'mongodb://localhost/employee';
mongoose.connect(mongoUri);
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, GET, PUT, POST");
  next();
});



require('./models/employee');
require('./routes')(app);



app.listen(8000);
console.log('Listening on port 8000...');