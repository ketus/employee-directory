(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', '$window', '$location'];

    function MainController($scope, $rootScope, $window, $location) {

        $scope.slider = '';
        $rootScope.back = function() {
            $scope.slider = 'slider-right';
            $window.history.back();
        };

        $rootScope.go = function(path) {
            $scope.slider = 'slider-left';
            $location.url(path);
        };
    }
}());
