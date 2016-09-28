/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PieceDetailCrtl = function ($rootScope, $scope, $location, $routeParams, piecesService) {

        piecesService.query($routeParams.piece_id).then(function (response) {
            $scope.name = response[0].fields.name;
            $scope.duration = response[0].fields.duration;
            $scope.image_cover = response[0].fields.image_cover;
        })
    };

    angular.module('freesounds.controllers').controller('PieceDetailCrtl', ['$rootScope', '$scope', '$location', '$routeParams', 'piecesService', PieceDetailCrtl]);
}());