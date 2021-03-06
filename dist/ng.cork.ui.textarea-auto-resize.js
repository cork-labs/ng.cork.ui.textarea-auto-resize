/**
 * ng.cork.ui.textarea-auto-resize - v0.0.7 - 2015-05-11
 * https://github.com/cork-labs/ng.cork.ui.textarea-auto-resize
 *
 * Copyright (c) 2015 Cork Labs <http://cork-labs.org>
 * License: MIT <http://cork-labs.mit-license.org/2015>
 */
(function (angular) {
    'use strict';

    var module = angular.module('ng.cork.ui.textarea-auto-resize', []);

    /**
     * @ngdoc directive
     * @name ng.cork.ui.textarea-auto-resize.corkUiTextareaAutoResize
     *
     * @description
     * Resizes textarea via `style.height` after user input.
     *
     * @example
     */
    module.directive('corkUiTextareaAutoResize', [
        '$document',
        function ($document) {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function ($scope, $element, $attrs, ngModelController) {

                    var document = $document[0];
                    var documentElement = document.documentElement;
                    var input = $element[0];
                    var style = input.style;

                    style.overflow = 'hidden';

                    var getHeightOffset = function () {
                        if (style.boxSizing === 'content-box') {
                            return -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
                        } else {
                            return parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
                        }
                    };

                    var resize = function () {
                        var htmlTop = documentElement.scrollTop;
                        var bodyTop = document.body.scrollTop;
                        var heightOffset = getHeightOffset();
                        style.height = '1px';
                        var targetHeight = input.scrollHeight + (isNaN(heightOffset) ? 0 : heightOffset);
                        style.height = (targetHeight + 10) + 'px';
                        documentElement.scrollTop = htmlTop;
                        document.body.scrollTop = bodyTop;
                    };

                    if (ngModelController) {
                        $scope.$watch(function () {
                            return input.value;
                        }, function () {
                            resize();
                        });
                    }

                    input.addEventListener('keyup', function () {
                        resize();
                    });
                    resize();
                    $scope.$on('$destroy', function () {
                        input.removeEventListener('keyup', resize);
                    });
                }
            };
        }
    ]);

})(angular);
