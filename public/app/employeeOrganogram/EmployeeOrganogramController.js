(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'HierarchyService',
            function($scope, $routeParams, Employee, HierarchyService) {

                var parentId = 'managerId';
                var startFrom = parseInt($routeParams.employeeId);

                Employee.query()
                    .$promise
                    .then(function(data) {
                        $scope.employees = HierarchyService.get(data, startFrom, parentId);
                    });

            }
        ]);

}());
