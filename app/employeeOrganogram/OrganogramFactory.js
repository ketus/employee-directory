(function () {
    'use strict';

    angular.module('app').factory('Organogram', ['Employee', function (Employee) {

        var employees = Employee.query();

        /*
        Recursively create tree structure employees.
        Params:
            employees: list on which to perform search and transformation,
            parentId: id of employee from which to begin,
            checked: temporary array to hold already processed employee IDs.
         */
        var getNestedEmployees = function (employees, parentId, checked) {

            var nestedEmployees = [];

            for (var i = 0, j = employees.length; i < j; i++) {

                // If there's subordinate of selected manager AND it wasn't already processed
                if (employees[i].managerId === parentId && checked.indexOf(employees[i].id) === -1) {

                    // Add manager ID to list of already processed employees
                    checked.push(parentId);

                    // Search 1 level deeper if current employee has any subordinates
                    var subordinates = getNestedEmployees(employees, parseInt(employees[i].id), checked);

                    // If current employee has any subordinates, add them as a property
                    if (subordinates.length > 0) {
                        employees[i].subordinates = subordinates;
                    }

                    nestedEmployees.push(employees[i]);
                }
            }
            return nestedEmployees;
        };

        return {

            get: function (employee) {
                return getNestedEmployees(employees, parseInt(employee.employeeId), []);
            }
        }

    }]);
}());