(function () {
    'use strict';

    angular.module('app')
        .controller('EmployeeListController', ['$scope', 'Employee',
            function ($scope, Employee) {

                $scope.employees = Employee.query();

            }]);
    
}());
