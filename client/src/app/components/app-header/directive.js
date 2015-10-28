/**
 * Created by Maxime on 20/10/15.
 */

(function() {
    'use strict';

    function AppHeaderComponent(version) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-header/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log) {
                var vm = this;
                $log.debug('Header loaded');
            },
            link: function(scope, elm, attrs) {

            }
        }
    }

    angular.module('appHeaderComponent', [])
        .directive('appHeader', AppHeaderComponent);
})();