var mysql = require('mysql'),
    log = require('tupelo'),
    config = require('../config/config')[process.env.NODE_ENV],
    q = require('q');

module.exports = {
    getConnection: getConnection,
    prepareQuery: prepareQuery,
    executeQuery: executeQuery
};


var pool = mysql.createPool({
    connectionLimit: 75,
    debug: false,
    database: config.database.dbName,
    host: config.database.host,
    user: config.database.user,
    password: config.database.password
});

function getConnection() {
    var deferred = q.defer();
    pool.getConnection(function(err, connection) {
        if (err) {
            log.error(err);
            deferred.reject(err);
        } else {            
            log.info('Connected. Connection id: ' + connection.threadId);
            deferred.resolve(connection);
        }
    });

    return deferred.promise;
}

function prepareQuery(query, parameters) {
    if (!query || !parameters) {
        var error = new Error(error);
        var message = 'Query and parameters function parameters must be specified';
        log.error(message, error.stack);
        return error
    }
    return mysql.format(query, parameters);
}

function executeQuery(query) {
    var deferred = q.defer();

    getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                if (err) deferred.reject(err);
                deferred.resolve(rows);
                connection.release();
            });
        })
        .fail(function(err) {
            log.error(err);
            deferred.reject(err);
        });

    return deferred.promise;
}
