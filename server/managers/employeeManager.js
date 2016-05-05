var connectionManager = require('./connectionManager'),
    q = require('q');

var getEmployees = function() {
    var deferred = q.defer();
    var selectEmployees =   'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone'
                            + ' FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId;';

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(selectEmployees, function(err, rows) {
                connection.release();
                if (err) {
                    deferred.reject(err);
                }
                deferred.resolve(rows);
            });
        })
        .fail(function(err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

var getOneById = function(employee) {

    var deferred = q.defer();
    var employeeId = parseInt(employee.employeeId);
    var selectOneById = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone '
                        + 'FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId WHERE employee.id = ?;';
    var query = connectionManager.prepareQuery(selectOneById, [employeeId]);

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                connection.release();
                if (err) {
                    deferred.reject(err);
                }
                deferred.resolve(rows);
            });
        })
        .fail(function(err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

module.exports = {
    getEmployees: getEmployees,
    getOneById: getOneById
};
