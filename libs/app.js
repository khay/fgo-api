var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');

var mongoURL = config.mongoURL;

var connectWithRetry = function() {
  return mongoose.connect(mongoURL, function(err) {
    if (err) {
      console.error('No connection to MongoDB server - retrying in 5 sec', err);
      mongoose.disconnect();
      setTimeout(connectWithRetry, 5000);
    }
  });
};

mongoose.connect(mongoURL);

mongoose.connection.on('error', function(){
  console.error('Failed to connect to mongo on startup - retrying... ');
  mongoose.disconnect();
  connectWithRetry();
});

var app = express();

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '500mb'}));

// Router configuratio
require('./routes.js')(app);

// process.on('uncaughtException', function(err) {
// 	console.log('Caught exception: ' + err);
// });

app.listen(8000);