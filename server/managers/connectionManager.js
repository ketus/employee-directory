module.exports = {
    getConnection: getConnection,
    prepareQuery: prepareQuery
};

var mysql = require('mysql'),
    log = require('tupelo'),
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

function getConnection() {
    var deferred = q.defer();
    pool.getConnection(function(err, connection) {
        if (err) {
            deferred.reject(err);
            return;
        }
        log.info('Connected. Connection id: ' + connection.threadId);
        deferred.resolve(connection);
    });

    return deferred.promise;
}

function prepareQuery(query, parameters) {
    if (!query || !parameters) {
        throw new Error('query and parameters function parameters must be specified.');
    }
    return mysql.format(query, parameters);
}
