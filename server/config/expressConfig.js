var path = require('path'),
    express = require('express'),
    logger = require('morgan');


module.exports = function(app, config){

    app.use(logger('combined'));
    app.set('views', path.join(config.rootPath, 'server', 'views'));
    app.use(express.static(path.join(config.rootPath, 'public')));
    //app.set('view engine', 'jade');

};
