(function () {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'Organogram', '$window', '$timeout',
            function ($scope, $routeParams, Employee, Organogram, $window, $timeout) {

                $scope.selectedEmployee = Employee.get({employeeId: $routeParams.employeeId});

                $scope.organogram = Organogram.get({employeeId: $routeParams.employeeId});

            }]);

}());
