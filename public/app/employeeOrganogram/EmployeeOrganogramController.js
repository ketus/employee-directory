(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeOrganogram', EmployeeOrganogram);

    EmployeeOrganogram.$inject = ['$scope', '$routeParams', 'Employee', 'hierarchyService'];

    function EmployeeOrganogram($scope, $routeParams, Employee, hierarchyService) {

        var vm = this;
        var parentId = 'managerId';
        var startFrom = parseInt($routeParams.employeeId);

        Employee.query()
            .$promise
            .then(function(data) {
                vm.employees = hierarchyService.get(data, startFrom, parentId);
            });

    }

}());
