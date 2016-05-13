(function() {
    'use strict';

    angular.module('app').factory('Report', ['Employee',
        function(Employee) {

            // var query = function(id) {
            //     return Employee.query({}, function(data) {
            //         return findByManager(data, id);
            //     });
            // };
            var query = function(id) {
                return Employee.query().$promise.then(function(data) {
                    return findByManager(data, id);

                });
            };

            var findByManager = function(employees, employeeId) {
                return employees.filter(function(element) {
                    return employeeId === element.managerId;
                });

            };

            return {
                query: query,
                // function(employee) {
                // return query(parseInt(employee.employeeId), findByManager);
                // },
                findByManager: findByManager
            };

        }
    ]);

}());