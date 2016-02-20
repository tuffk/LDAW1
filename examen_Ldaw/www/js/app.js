// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//JERRY: PARTE DEL FRAMEWORK QUE GENERA IONIC GENERA CIERTOA COMPONENTES

//GENERA UN MODULO QUE SE LLAMA STARTER

//AQUI ESTAMOS CREANDO UN MODULO UN OBJETO QUE MODIFICA EN TIEMPO REAL EL DOM
angular.module('starter', ['ionic','starter.controllers'])
//angula,odel regresa un objeto


//REGISTRO v2.0
	//Agregamos controller dummy
	.controller('LoginCtrl', function ($scope, $state){

	  var notas = document.getElementById("nombre");
    function initialize() {
        if(typeof(Storage) === "undefined") {
            alert("Este navegador no soporta localStorage")
        } else {
            var saved_content = localStorage.getItem("nombre");
            if (saved_content) {
                notas.innerText= saved_content; //poniendo el contenido guardado
            }
        }
    }

	  $scope.guardar = function() {
        localStorage.setItem("nombre", notas.value)
    };
	  
	  $scope.validar = function(){
	  //aqui hacemos las valiaciones
	  $scope.guardar();
    //location.reload(1);
	  $state.go('app');
	  }
	})
	
  
.controller('AppCtrl', function ($scope, $state){

    var tutzke = document.getElementById("tutzke");
    $scope.allah = window.localStorage["nombre"];
    //alert(window.localStorage["nombre"]);
    //tutzke.innerHTML = window.localStorage["nombre"];
    //var sharmuta = window.localStorage["nombre"];
    $scope.aLaVerga = function (){
      
      $state.go('sidemenu.home');
      location.reload(1);
    }
    }
  )


//anexado para el ejercicio guiado 1 (HOME Y MENU)
//el punto es para modificar ese objeto X
.config(function($stateProvider, $urlRouterProvider) {

  //VISTA DEFECTO
  $urlRouterProvider.otherwise('/side/home')

//Modulos

  //Vista Menu Lateral
  $stateProvider
  .state('sidemenu', {
      url: "/side",
      abstract: true,
      templateUrl: "templates/side-menu.html"
  })

  //vista 1
 .state('sidemenu.home', {
    url: '/home',
    views: {
      'menuContent' :{
        templateUrl: "templates/home.html"
      }
    }
  })

  //vista 2
 .state('sidemenu.reg', {
    url: '/reg',
    views: {
      'menuContent' :{
       templateUrl: 'templates/registro.html',
       controller: 'LoginCtrl'//Agregamos controller
      }
    }
  })

  //vista 3
 .state('sidemenu.info', {
    url: '/info',
    views: {
      'menuContent' :{
        templateUrl: "templates/info.html"
      }
    }
  })
  

    //Estado de mi segunda vista del template/padding
	.state('app', { //nombre del estado index
      url: '/app',
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl'//Agregamos controller
	})

 })



//Notas Ray:
//IONIC FUNCIONA COMO UNA MAQUINA DE ESTADOS
 //Al final puedes agregar ; pero toda via no terminamos, este .js
