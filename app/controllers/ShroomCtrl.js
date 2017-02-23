'use strict';

app.controller("ShroomCtrl", function($scope, ShroomFactory, FBCreds) {

  ShroomFactory.getJSON()
  .then(function(mushroomCollection) {
    $scope.mushrooms = mushroomCollection;
  });

});