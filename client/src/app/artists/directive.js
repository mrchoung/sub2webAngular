/**
 * Created by Maxime on 28/10/15.
 */
(function () {
    function artistPopular(artistService) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './src/app/artists/artist-popular.html',
        scope: {},
        controllerAs: 'vm',
        bindToController: true,
        controller: function($log) {
            var vm = this;
            artistService.getArtist().then(function(data) {
                console.log(data.data.results);
                vm.artists = data.data.results;
            });
        },
        link: function(scope, elm, attrs) {

        }
    };
}

angular.module('artistPopularDirective', ['services.artist'])
    .directive('artistPopular', artistPopular);
})();