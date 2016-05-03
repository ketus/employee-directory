var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {

    development: {
        rootPath: rootPath,
        port: 3000,
        database: {
            dbName: "employee_directory",
            host: "localhost",
            user: "root",
            password: "rootpass123"
        }
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 8080,
        database: {
            // host: "localhost",
            // user: "root",
            // password: "rootpass123"
        }
    }

}
