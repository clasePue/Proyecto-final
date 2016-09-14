var usuariosModule = angular.module('usuariosApp',['ngRoute']);

usuariosModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/",{
		templateUrl:"vistas/todosLosUsuarios.html",
		controller: Ctrl.todosLosUsuariosCtrl //para peticion ajax
	}).
	when("/genre_ids/:genre_ids",{
		templateUrl:"vistas/genre_ids.html",
		controller: Ctrl.genre_idsCtrl //para peticion ajax
	}).
	when("/title/:title",{ //defino la variable que se modificara en el controlador si se cambia el :id
		//el valor de :id se asigna cuando el usuario usa la url de la vista
		templateUrl:"vistas/title.html",
		controller: Ctrl.titleCtrl //para peticion ajax
	}).
	when("/page/:page",{
		templateUrl:"vistas/todosLosUsuarios.html",
		controller: Ctrl.pageCtrl //para peticion ajax.
	}).
	otherwise({
		redirectTo: "/"	
	})
}])
