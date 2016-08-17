(function() {
    'use strict';

    angular
        .module('app')
        .factory('Report', report);

    report.$inject = ['Employee'];

    function report(Employee) {

        return {
            query: query,
            findByManager: findByManager
        };

        function query(id) {
            return Employee.query({}, function(data) {
                return findByManager(data, id);
            });
        }

        function findByManager(employees, employeeId) {
            return employees.filter(function(element) {
                return element.managerId === employeeId;
            });

        }
    }

}());
