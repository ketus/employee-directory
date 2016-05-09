var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var prodConfig = require('./prodConfig');

module.exports = {

    development: {
        rootPath: rootPath,
        port: 3000,
        database: {
            dbName: 'employee_directory',
            host: 'localhost',
            user: 'root',
            password: 'rootpass123'
        }
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 3000,
        database: prodConfig
    }
};
