/**
 * Created by Maxime on 27/10/15.
 */

(function() {
    'use strict';

    function serieService($http, $log) {

        var service = {};

        service.series = [];

        service.getSerie = function () {

            var Key = '8faa249bca956ba62366d2771394a955';

            return $http.get('https://api.themoviedb.org/3/tv/popular', {
                params:{
                    api_key: Key
                }
            })
                .success(function (data) {
                    service.services = data;
                })
                .error(function () {
                    console.log('error');
                });
        };

        return service;
    }

    angular.module('services.serie', [])
        .factory('serieService', serieService);

})();
