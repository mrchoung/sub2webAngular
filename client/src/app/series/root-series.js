/**
 * Created by Maxime on 27/10/15.
 */

(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.seriePopular', {
                url: '/serie',
                views: {
                    '@': {
                        template: '<serie-popular></serie-popular>'
                    }
                }
            });
    }

    angular.module('serie-popular', ['seriePopularDirective'])
        .config(config);
})();
