var express = require('express'),
    path = require('path'),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    router = express.Router();

var app = express();

require('./server/config/expressConfig')(app, config);
require('./server/config/routesConfig')(app, config, router);


app.listen(config.port, function () {
  console.log('Server listening on port: ' + config.port);
});
