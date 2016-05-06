(function () {
    'use strict';

    angular.module('app')
        .controller('EmployeeReportsController', ['$scope', '$routeParams', 'Employee',
            function ($scope, $routeParams, Employee) {

                $scope.employees = Employee.getReports({id: $routeParams.employeeId});
            }]);

}());
