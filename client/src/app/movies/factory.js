/**
 * Created by Maxime on 27/10/15.
 */

(function() {
   'use strict';

    function movieService($http, $log) {

        var service = {};

        service.movie = [];

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