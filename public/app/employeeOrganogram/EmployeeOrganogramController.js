(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'Organogram',
            function($scope, $routeParams, Employee, Organogram, getEmployees) {

                $scope.selectedEmployee = Employee.get({
                    id: $routeParams.employeeId
                });

                // Organogram.get({ id: $routeParams.employeeId }, function(hierarchy) {
                //     $scope.organogram = hierarchy;
                // });
                // Employee.query()
                //     .$promise
                //     .then(function(data) {
                //         $scope.employees = data;
                //
                //     });

                Employee.query()
                    .$promise
                    .then(function(data) {
                        $scope.employees = data;
                    });

                $scope.startFrom = parseInt($routeParams.employeeId);
                $scope.parentId = 'managerId';
            }
        ]);

}());
