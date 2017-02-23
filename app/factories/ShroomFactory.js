'use strict';

app.factory('ShroomFactory', function($q, $http, FBCreds) {

  let getJSON = () => {
    let mushroomArray = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
      .then((mushroomObject) => {
        let mushroomCollection = mushroomObject.data;
        Object.keys(mushroomCollection).forEach((key) => {
          // mushroomCollection[key].id = key;
          mushroomArray.push(mushroomCollection[key]);
        });
        resolve(mushroomArray);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getJSON};
});