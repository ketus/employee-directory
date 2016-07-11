(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'HierarchyService',
            function($scope, $routeParams, Employee, HierarchyService) {

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
                var startFrom = Employee.get({
                    id: $routeParams.employeeId
                });
                var parentId = 'managerId';

                Employee.query()
                    .$promise
                    .then(function(data) {
                        // $scope.employees = data;
                        $scope.employees = HierarchyService.get(data, startFrom, parentId);
                    });

            }
        ]);

}());
