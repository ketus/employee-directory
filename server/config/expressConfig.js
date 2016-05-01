var path = require('path');
var express = require('express');

module.exports = function(app, config){

  app.set('views', path.join(config.rootPath, 'server', 'views'));
  app.use(express.static(path.join(config.rootPath, 'public')));
  //app.set('view engine', 'jade');

};
