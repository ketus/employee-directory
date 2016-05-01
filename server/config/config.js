var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {

      development: {
        rootPath: rootPath,
        port: 3000
      },
      production: {
        rootPath: rootPath,
        port: process.env.PORT || 8080
      }

}
