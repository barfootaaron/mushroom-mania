'use strict';

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: "/partials/shroom-details.html",
    controller: "ShroomCtrl"
  });
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
       	apiKey: creds.apiKey,
       	authDomain: creds.authDomain,
   		databaseURL: creds.databaseURL
    	};

       firebase.initializeApp(authConfig);
});