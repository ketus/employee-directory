(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', '$window', '$location'];

    function MainController($scope, $rootScope, $window, $location) {

        $rootScope.slider = '';

        $rootScope.go = function(path) {
            $rootScope.slider = 'slider-right';
            $location.url(path);
        };
    }
}());
