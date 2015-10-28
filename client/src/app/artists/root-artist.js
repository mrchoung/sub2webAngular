/**
 * Created by Maxime on 27/10/15.
 */
(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.artistPopular', {
                url: '/artist',
                views: {
                    '@': {
                        template: '<artist-popular></artist-popular>'
                    }
                }
            });
    }

    angular.module('artist-popular', ['artistPopularDirective'])
        .config(config);
})();