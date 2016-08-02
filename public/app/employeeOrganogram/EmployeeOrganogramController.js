(function() {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'HierarchyService',
            function($scope, $routeParams, Employee, HierarchyService) {

                $scope.selectedEmployee = Employee.get({
                    id: $routeParams.employeeId
                });

                var parentId = 'managerId';
                var startFrom = parseInt($routeParams.employeeId);

                Employee.query()
                    .$promise
                    .then(function(data) {
                        // $scope.employees = data;
                        $scope.employees = HierarchyService.get(data, startFrom, parentId);
                    });

                $scope.employees_static = [{
                    "id": 2,
                    "firstName": "Bart",
                    "lastName": "Simpson",
                    "managerId": 1,
                    "title": "VP of Marketing",
                    "department": "Marketing",
                    "email": "bart@the-simpsons.com",
                    "city": "Springfield",
                    "picture": "bart.png",
                    "twitterId": "@bart",
                    "blog": "http://www.brightcomputing.com",
                    "cellPhone": "+31 000 000 002",
                    "officePhone": "+31 600 000 002",
                    "children": [{
                        "id": 8,
                        "firstName": "Krusty",
                        "lastName": "The Clown",
                        "managerId": 2,
                        "title": "Marketing Manager",
                        "department": "Marketing",
                        "email": "krusty@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "krusty.png",
                        "twitterId": "@krusty",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 008",
                        "officePhone": "+31 600 000 008",
                        "children": [

                        ]
                    }, {
                        "id": 9,
                        "firstName": "Waylon",
                        "lastName": "Smithers",
                        "managerId": 2,
                        "title": "Marketing Manager",
                        "department": "Marketing",
                        "email": "smithers@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "smithers.png",
                        "twitterId": "@smithers",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 009",
                        "officePhone": "+31 600 000 009",
                        "children": [

                        ]
                    }]
                }, {
                    "id": 3,
                    "firstName": "Marge",
                    "lastName": "Simpson",
                    "managerId": 1,
                    "title": "CFO",
                    "department": "Accounting",
                    "email": "marge@the-simpsons.com",
                    "city": "Springfield",
                    "picture": "marge.png",
                    "twitterId": "@marge",
                    "blog": "http://www.brightcomputing.com",
                    "cellPhone": "+31 000 000 003",
                    "officePhone": "+31 600 000 003",
                    "children": [

                    ]
                }, {
                    "id": 4,
                    "firstName": "Lisa",
                    "lastName": "Simpson",
                    "managerId": 1,
                    "title": "VP of Engineering",
                    "department": "Engineering",
                    "email": "lisa@the-simpsons.com",
                    "city": "Springfield",
                    "picture": "lisa.png",
                    "twitterId": "@lisa",
                    "blog": "http://www.brightcomputing.com",
                    "cellPhone": "+31 000 000 004",
                    "officePhone": "+31 600 000 004",
                    "children": [{
                        "id": 6,
                        "firstName": "Homer",
                        "lastName": "Simpson",
                        "managerId": 4,
                        "title": "QA Manager",
                        "department": "Corporate",
                        "email": "homer@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "homer.png",
                        "twitterId": "@homer",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 006",
                        "officePhone": "+31 600 000 006",
                        "children": [

                        ]
                    }, {
                        "id": 7,
                        "firstName": "Ned",
                        "lastName": "Flanders",
                        "managerId": 4,
                        "title": "Software Architect",
                        "department": "Engineering",
                        "email": "ned@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "ned_flanders.png",
                        "twitterId": "@ned",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 007",
                        "officePhone": "+31 600 000 007",
                        "children": [

                        ]
                    }, {
                        "id": 12,
                        "firstName": "Comic Book Guy",
                        "lastName": "",
                        "managerId": 4,
                        "title": "Software Architect",
                        "department": "Engineering",
                        "email": "comicguy@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "comic.png",
                        "twitterId": "@comicguy",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 012",
                        "officePhone": "+31 600 000 012",
                        "children": [

                        ]
                    }]
                }, {
                    "id": 5,
                    "firstName": "Maggie",
                    "lastName": "Simpson",
                    "managerId": 1,
                    "title": "VP of Sales",
                    "department": "Sales",
                    "email": "maggie@the-simpsons.com",
                    "city": "Springfield",
                    "picture": "maggie.png",
                    "twitterId": "@maggie",
                    "blog": "http://www.brightcomputing.com",
                    "cellPhone": "+31 000 000 005",
                    "officePhone": "+31 600 000 005",
                    "children": [{
                        "id": 10,
                        "firstName": "Ralph",
                        "lastName": "Wiggum",
                        "managerId": 5,
                        "title": "Sales Representative",
                        "department": "Sales",
                        "email": "ralph@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "ralph.png",
                        "twitterId": "@ralph",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 010",
                        "officePhone": "+31 600 000 010",
                        "children": [

                        ]
                    }, {
                        "id": 11,
                        "firstName": "Itchy",
                        "lastName": "",
                        "managerId": 5,
                        "title": "Sales Representative",
                        "department": "Sales",
                        "email": "itchy@the-simpsons.com",
                        "city": "Springfield",
                        "picture": "itchy.png",
                        "twitterId": "@itchy",
                        "blog": "http://www.brightcomputing.com",
                        "cellPhone": "+31 000 000 011",
                        "officePhone": "+31 600 000 011",
                        "children": [

                        ]
                    }]
                }];


            }
        ]);

}());
