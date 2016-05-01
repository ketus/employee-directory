var path = require('path'),
    express = require('express'),
    router = express.Router();

module.exports = function (config) {

    router.get('/', function(req, res){
        res.sendFile(path.join(config.rootPath,'server', 'views', 'index.html'));
    });

    return router;
};
