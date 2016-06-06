var express = require('express'),
    logger = require('tupelo'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'production',
    config = require('./server/config/config')[env];

var app = express();
logger.setLogLevel('VERBOSE');

require('./server/config/expressConfig')(app, config);
require('./server/routes/routes')(app, config);

app.listen(config.port, function () {
    logger.info('Server listening on port: ' + config.port);
});
