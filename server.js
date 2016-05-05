var express = require('express'),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env];

var app = express();

require('./server/config/expressConfig')(app, config);
require('./server/routes/routes')(app, config);

app.listen(config.port, function () {
    console.log('Server listening on port: ' + config.port);
});
