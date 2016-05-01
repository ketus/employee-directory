(function () {
    'use strict';

    angular.module('app').factory('Report', ['Employee', function (Employee) {

        var employees = Employee.query();

        var findByManager = function (managerId) {
            return employees.filter(function (element) {
                return managerId === element.managerId;
            });
        };

        return {
            query: function (employee) {
                return findByManager(parseInt(employee.employeeId));
            }
        }

    }]);

}());