(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.moviePopular', {
                url: '/movie',
                views: {
                  '@': {
                    template: '<movie-popular></movie-popular>'
                    }
                }
            })

            .state('root.moviePopular.movieDetails',{
                url: '/details/:id',
                views: {
                    '@': {
                        templateUrl: './src/app/movies/movie-detail-template.html',
                        controller: function($stateParams, movieService, $scope){
                            movieService.getOneMovie($stateParams.id)
                                .then(function(data) {
                                    $scope.movie = data;
                                });
                        }
                    }
                }
            })
    }



    angular.module('movie-popular', ['moviePopularDirective'])
        .config(config);
})();
