var express = require('express');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];

var app = express();

require('./server/config/expressConfig')(app, config);

app.get('/', function(req, res){
    res.sendFile(path.join(config.rootPath,'server', 'views', 'index.html'));
});

app.listen(config.port, function () {
  console.log('Server listening on port: ' + config.port);
});
