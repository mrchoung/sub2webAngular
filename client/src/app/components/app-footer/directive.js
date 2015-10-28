/**
 * Created by Maxime on 20/10/15.
 */

(function() {
    'use strict';

    function AppFooterComponent(version) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-footer/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log) {
                var vm = this;
                $log.debug('Footer loaded');
            },
            link: function(scope, elm, attrs) {

            }
        }
    }

    angular.module('appFooterComponent', [])
        .directive('appFooter', AppFooterComponent);
})();