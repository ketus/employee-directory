var mysql = require("mysql");

module.exports = function(config) {

    // First you need to create a connection to the db
    var con = mysql.createConnection({
        host: config.database.host,
        database: config.database.dbName,
        user: config.database.user,
        password: config.database.password

    });

    con.connect(function(err) {
        if (err) {
            console.log('Error connecting to DB');
            return;
        }
        console.log('Database Connection established');
    });

    con.query('select firstName, lastName, picture from employee inner join employeeContacts on employee.id=employeeContacts.fk_employeeId;',
        function(err, rows) {
            if (err) throw err;

            console.log('Data received from Db:\n');
            console.log(JSON.stringify(rows));
        });

    con.end(function(err) {
        console.log('db connection ended');
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
        // before sending a COM_QUIT packet to the MySQL server.
    });
};
