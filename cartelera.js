var vistaRutasMod = angular.module('vistasRutasApp',['ngRoute']);
		vistaRutasMod.config(['$routeProvider',function($routeProvider){
			$routeProvider.
			when("/",{
				templateUrl: "vistas/index.html"
			}).
			when("/vista1",{
				templateUrl: "vistas/vista1.html"
			}).
			when("/vista2",{
				templateUrl: "vistas/vista2.html"
			}).
			otherwise({redirectTo: '/'})
		}])
