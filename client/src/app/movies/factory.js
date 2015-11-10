/**
 * Created by Maxime on 27/10/15.
 */

(function() {
   'use strict';

    function movieService($http, $log) {

        var service = {};

        service.movie = [];

        service.getOneMovie = function(movieID){

            var Key = '8faa249bca956ba62366d2771394a955';

            return $http.get('http://api.themoviedb.org/3/movie/' + movieID,{
                params: {
                    api_key: Key
                }
            })
                .then(function(movieData) {
                    return movieData.data;
                });
        };

        service.getMovie = function () {

            var Key = '8faa249bca956ba62366d2771394a955';

            return $http.get('https://api.themoviedb.org/3/movie/popular', {
                params:{
                    api_key: Key
                }
            })
            .success(function (data) {
                service.movie = data;
            })
            .error(function () {
                console.log('error');
            });
        };

        return service;
    }

    angular.module('services.movie', ['services.serie'])
        .factory('movieService', movieService);

})();