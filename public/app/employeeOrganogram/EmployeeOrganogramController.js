(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'Organogram',
            function($scope, $routeParams, Employee, Organogram) {

                $scope.selectedEmployee = Employee.get({ id: $routeParams.employeeId });

                Organogram.get({ id: $routeParams.employeeId }, function(hierarchy) {
                    $scope.organogram = hierarchy;
                });

            }
        ]);

}());
