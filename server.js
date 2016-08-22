var express = require('express');
var log = require('tupelo');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];
var app = express();

require('./server/config/expressConfig')(app, config);
require('./server/routes/routes')(app, config);

log.setLogLevel(config.debugLevel);

app.listen(config.port, function () {
    log.info('Server listening on port: ' + config.port);
});
