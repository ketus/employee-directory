(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeReportsController', ['$scope', '$routeParams', 'Employee',
            function($scope, $routeParams, Employee) {

                // value for filter
                $scope.managerId = parseInt($routeParams.employeeId);

                $scope.employees = Employee.query();

            }
        ]);

}());
