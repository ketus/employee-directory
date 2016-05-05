var mysql = require('mysql'),
    env = process.env.NODE_ENV || 'production',
    config = require('../config/config')[env],
    q = require('q');

var pool = mysql.createPool({
    connectionLimit: 100,
    debug: false,
    database: config.database.dbName,
    host: config.database.host,
    user: config.database.user,
    password: config.database.password
});

var getConnection = function() {

    var deferred = q.defer();
    pool.getConnection(function(err, connection) {
        if (err) {
            deferred.reject(err);
            return;
        }
        console.log('connected as id ' + connection.threadId);
        deferred.resolve(connection);
    });

    return deferred.promise;
};

var prepareQuery = function(query, parameters) {
    if (!query || !parameters) {
        throw new Error('query and parameters function parameters must be specified.');
    }
    return mysql.format(query, parameters);
};

module.exports = {
    createPool: pool,
    getConnection: getConnection,
    prepareQuery: prepareQuery
};
