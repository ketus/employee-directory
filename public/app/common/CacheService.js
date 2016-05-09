(function() {
    'use strict';

    angular.module('app')
        .factory('CacheService', function($cacheFactory) {
            var $httpDefaultCache = $cacheFactory.get('$http');

            return {
                invalidate: function(key) {
                    $httpDefaultCache.remove(key);
                }
            };
        });

}());
