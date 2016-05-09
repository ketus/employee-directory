(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'organogramResolve',
            function($scope, $routeParams, Employee, organogramResolve) {

                $scope.selectedEmployee = Employee.get({
                    id: $routeParams.employeeId
                });
                //$scope.organogram = Organogram.get({employeeId: $routeParams.employeeId});
                $scope.organogram = organogramResolve;
            }
        ]);

}());
