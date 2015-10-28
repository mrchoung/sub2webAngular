/**
 * Created by Maxime on 28/10/15.
 */
(function () {
    function artistService($http, $log) {
        var service = {};

        service.artists = [];

        service.getArtist = function () {

            var Key = '8faa249bca956ba62366d2771394a955';

            return $http.get('https://www.themoviedb.org/person', {
                params: {
                    api_key: Key
                }
            })
                .succes(function (data) {
                    service.artists = data;
                })
                .error(function () {
                    console.log('error');
                });
        };

        return service;
    }

    angular.module('services.artist', [])
        .factory('artistService', artistService);

})();