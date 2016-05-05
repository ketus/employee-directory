(function () {
    'use strict';

    angular.module('app').controller('EmployeeDetailsController', ['$scope', '$routeParams', 'Employee',
        function ($scope, $routeParams, Employee) {

            $scope.employee = Employee.get({id: $routeParams.employeeId});
        }]);

}());
