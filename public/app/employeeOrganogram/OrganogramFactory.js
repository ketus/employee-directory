(function() {
    'use strict';

    angular.module('app').factory('Organogram', ['Employee', 'HierarchyService', function(Employee, HierarchyService) {

        var getOrganogram = function(startId, callback) {
            return Employee.query()
                .$promise
                .then(function(employees) {
                    var data = HierarchyService.get(employees, startId, 'managerId');
                    callback(data);
                });
        };

        return {
            get: function(employee, callback) {
                return getOrganogram(parseInt(employee.id), callback);
            }
        };

    }]);
}());
