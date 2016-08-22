var express = require('express'),
    router = express.Router(),
    employeeManager = require('../managers/employeeManager');

module.exports = router;

router.get('/employees/:id/reports', function(req, res) {
    employeeManager.getByManagerId({ employeeId: req.params.id })
    .then(function(data) {
        res.json(data);
    })
    .fail(function(err) {
        res.sendStatus(500).json({
            error: err.message
        });
    });
});

router.get('/employees/:id', function(req, res) {
    employeeManager.getOneById({ employeeId: req.params.id })
        .then(function(data) {
            var employee = data[0];
            res.json(employee);
        })
        .fail(function(err) {
            res.sendStatus(500).json({
                error: err.message
            });
        });
});

router.get('/employees', function(req, res) {
    employeeManager.getEmployees()
        .then(function(data) {
            res.json(data);
        })
        .fail(function(err) {
            res.sendStatus(500).json({
                error: err.message
            });
        });
});
