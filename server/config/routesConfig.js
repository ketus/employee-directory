var path = require('path'),
    employees = require('../routes/employeesRoute'),
    router = require('express').Router();

module.exports = function(app, config) {

    app.get('/', function(req, res){
        res.sendFile(path.join(config.rootPath,'server', 'views', 'index.html'));
    });



};
