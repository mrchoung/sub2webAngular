/**
 * Created by Maxime on 27/10/15.
 */
(function() {
    'use strict';

    function moviePopular(movieService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/movies/popular-movie.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log) {
                var vm = this;
                movieService.getMovie().then(function(data) {
                    console.log(data.data.results);
                    vm.movies = data.data.results;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('moviePopularDirective', ['services.movie'])
        .directive('moviePopular', moviePopular);
})();