/**
 * Created by Maxime on 03/11/15.
 */
(function () {
    function seriePopular(serieService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/series/serie-popular.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log) {
                var vm = this;
                serieService.getSerie().then(function(data) {
                    console.log(data.data.results);
                    vm.series = data.data.results;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('seriePopularDirective', ['services.serie'])
        .directive('seriePopular', seriePopular);
})();