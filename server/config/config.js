var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

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
        database: {
            dbName: 'ketus_employees',
            host: 'ketus.heliohost.org',
            user: 'ketus_1',
            password: 'rootpass123'
        }
    }
};
