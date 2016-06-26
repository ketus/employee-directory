var express = require('express'),
    log = require('tupelo'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env];

var app = express();
log.setLogLevel('VERBOSE');

require('./server/config/expressConfig')(app, config);
require('./server/routes/routes')(app, config);

app.listen(config.port, function () {
    log.info('Server listening on port: ' + config.port);
});
