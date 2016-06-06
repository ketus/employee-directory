var mysql = require('mysql'),
    logger = require('tupelo'),
    config = require('../config/config')[process.env.NODE_ENV],
    q = require('q');

var pool = mysql.createPool({
    connectionLimit: 75,
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
        logger.info('Connected. Connection id: ' + connection.threadId);
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
    getConnection: getConnection,
    prepareQuery: prepareQuery
};
