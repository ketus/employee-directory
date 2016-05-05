var express = require('express'),
    router = express.Router(),
    employeeManager = require('../managers/employeeManager');

router.get('/employees/:id', function(req, res) {
    employeeManager.getOneById({employeeId: req.params.id})
        .then(function(data) {
            res.json(data[0]);
        })
        .fail(function(err) {
            res.status(500).json({
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
            res.status(500).json({
                error: err.message
            });
        });
});

module.exports = router;
