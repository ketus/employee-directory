(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeOrganogram', EmployeeOrganogram);

        EmployeeOrganogram.$inject = ['$scope', '$routeParams', 'Employee', 'HierarchyService'];

        function EmployeeOrganogram($scope, $routeParams, Employee, HierarchyService) {

            var vm = this;
            var parentId = 'managerId';
            var startFrom = parseInt($routeParams.employeeId);

            Employee.query()
                .$promise
                .then(function(data) {
                    vm.employees = HierarchyService.get(data, startFrom, parentId);
                });

        }

}());
