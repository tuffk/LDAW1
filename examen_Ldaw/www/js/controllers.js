//definicion del modulo en angular con nombre controllers
angular.module('starter.controllers', ['ionic'])

//JERRY: Todo es el Controlador NavCtrl para manipular el mapa GOOGLE
.controller('NavCtrl', function($scope, $ionicLoading, $compile) {


  var myLatLng;

  //función de despliegue del mapa
  function initialize() {

    navigator.geolocation.getCurrentPosition(function(position) {
        myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


        var mapOptions = {
          center: myLatLng,
          zoom: 17,   // factor de zoom
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapa"), // selector
            mapOptions);

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Tu ubicación'  // mensaje en label
        });

        $scope.map = map;
    });
  }


  ionic.Platform.ready(initialize)
});
