var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    favicon = require('serve-favicon');


module.exports = function(app, config){

    app.use(logger('dev'));
    app.set('views', path.join(config.rootPath, 'server', 'views'));
    app.use(express.static(path.join(config.rootPath, 'public')));
    app.use(favicon(path.join(config.rootPath, 'public', 'assets', 'favicon.ico')));

};
