var path = require('path');
var express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');


module.exports = function(app, config){

    app.use(logger('dev'));
    app.use(express.static(path.join(config.rootPath, 'public')));
    app.use(favicon(path.join(config.rootPath, 'public', 'assets', 'favicon.ico')));
    app.set('views', path.join(config.rootPath, 'server', 'views'));
};
