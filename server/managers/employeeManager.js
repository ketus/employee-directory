var connectionManager = require('./connectionManager'),
    q = require('q');

var getEmployees = function() {
    var deferred = q.defer();
    var selectEmployees = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone'
                        + ' FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId;';

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(selectEmployees, function(err, rows) {
                if (err) deferred.reject(err);
                deferred.resolve(rows);
                connection.release();
            });
        })
        .fail(function(err) {
            console.log(err);
            deferred.reject(err);
        });

    return deferred.promise;
};

var getOneById = function(employee) {
    var deferred = q.defer();
    var selectOneById = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone, '
                        + '(SELECT COUNT(employee.id) FROM employee WHERE managerId = ?) as reports '
                        + 'FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId WHERE employee.id = ?';


    var query = connectionManager.prepareQuery(selectOneById,
                [parseInt(employee.employeeId),parseInt(employee.employeeId)]);

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                if (err) {
                    console.log(err);
                    deferred.reject(err);
                }
                deferred.resolve(rows);
                connection.release();
            });
        })
        .fail(function(err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

//TODO redundant. Write API for PUT requests instead
var getByManagerId = function(employee) {
    var deferred = q.defer();
    var selectByManagerId = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone'
                            + ' FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId WHERE employee.managerId= ?;';

    var query = connectionManager.prepareQuery(selectByManagerId,
                [parseInt(employee.employeeId)]);

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                if (err) {
                    console.log(err);
                    deferred.reject(err);
                }
                deferred.resolve(rows);
                connection.release();
            });
        })
        .fail(function(err) {
            deferred.reject(err);
        });

    return deferred.promise;
};


module.exports = {
    getEmployees: getEmployees,
    getOneById: getOneById,
    getByManagerId: getByManagerId
};
