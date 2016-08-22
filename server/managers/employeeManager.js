var databaseManager = require('./databaseManager'),
    q = require('q'),
    log = require('tupelo');

module.exports = {
    getEmployees: getEmployees,
    getOneById: getOneById,
    getByManagerId: getByManagerId
};

function getEmployees() {
    var AllEmployees = 'SELECT employee.id, firstName, lastName, managerId, title, department, \
                            email, city, picture, twitterId, blog, cellPhone, officePhone \
                            FROM employee INNER JOIN employeeContacts ON \
                            employee.id=employeeContacts.fk_employeeId;';

    return databaseManager.executeQuery(AllEmployees);
}

function getOneById(employee) {
    var queryParam = parseInt(employee.employeeId);

    var selectOneById = 'SELECT e.*, z.*, CONCAT_WS(\' \', m.lastName, m.firstName) AS \'managerName\',\
                        (SELECT COUNT(id) FROM employee WHERE managerId = ?) AS \'reports\' \
                        FROM employee e\
                        INNER JOIN employee m ON m.id = e.managerId\
                        INNER JOIN employeeContacts z ON e.id = z.fk_employeeId WHERE e.id = ?;';

    var query = databaseManager.prepareQuery(
        selectOneById,
        [queryParam, queryParam]
    );

    return databaseManager.executeQuery(query);
}


function getByManagerId(employee) {
    var selectByManagerId = 'SELECT employee.id, firstName, lastName, managerId, title, department, email, city, picture, twitterId, blog, cellPhone, officePhone' +
                            ' FROM employee INNER JOIN employeeContacts' +
                            ' ON employee.id=employeeContacts.fk_employeeId WHERE managerId=?;';

    var query = databaseManager.prepareQuery(
        selectByManagerId,
        [parseInt(employee.employeeId)]
    );

    return databaseManager.executeQuery(query);

}
