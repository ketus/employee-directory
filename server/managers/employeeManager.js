var connectionManager = require('./connectionManager'),
    q = require('q'),
    log = require('tupelo');

module.exports = {
    getEmployees: getEmployees,
    getOneById: getOneById,
    getByManagerId: getByManagerId
};

function getEmployees() {
    var deferred = q.defer();
    var selectEmployees = 'SELECT employee.id, firstName, lastName, managerId, title, department, \
                            email, city, picture, twitterId, blog, cellPhone, officePhone \
                            FROM employee INNER JOIN employeeContacts ON \
                            employee.id=employeeContacts.fk_employeeId;';

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(selectEmployees, function(err, rows) {
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

function getOneById(employee) {
    var deferred = q.defer();

    var selectOneById = 'SELECT e.*, z.*, CONCAT_WS(\' \', m.lastName, m.firstName) AS \'managerName\',\
                        (SELECT COUNT(id) FROM employee WHERE managerId = ?) AS \'reports\' \
                        FROM employee e\
                        INNER JOIN employee m ON m.id = e.managerId\
                        INNER JOIN employeeContacts z ON e.id = z.fk_employeeId WHERE e.id = ?;';

    var query = connectionManager.prepareQuery(selectOneById, [
        parseInt(employee.employeeId),
        parseInt(employee.employeeId)
    ]);

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                if (err) {
                    log.error(err);
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
}


function getByManagerId(managerId) {
    var deferred = q.defer();
    var selectByManagerId = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone' +
                            ' FROM employee INNER JOIN employeeContacts ON employee.id=employeeContacts.fk_employeeId WHERE employee.managerId= ?;';

    var query = connectionManager.prepareQuery(selectByManagerId, [
        parseInt(employee.employeeId)
    ]);

    connectionManager.getConnection()
        .then(function(connection) {
            connection.query(query, function(err, rows) {
                if (err) {
                    log.error(err);
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
}
