var Ctrl = (function(){
	var _todosLosUsuariosCtrl = function($scope,$http,$log,$window){	
		$http.get('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e')
			.success(function(usuarios){
				$scope.usuarios = usuarios.results;
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

	};
	var _pageCtrl = function($scope,$rootScope,$http,$log,$window){	
		$http.get('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&page=2')
			.success(function(usuarios){
				$rootScope.usuarios = usuarios.results;

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

			$scope.criterio = {}
			$scope.criterio.columna = 'title'
	};
		
	var _titleCtrl = function($scope,$routeParams,$http,$log,$window){
		$http.get('http://api.themoviedb.org/3/movie/' + $routeParams.title + '?api_key=4584ae721cb020ce65a4bd25368ec31e') //aqui se usa el valor de la variable :id del app.js
			.success(function(usuario){ 
				$scope.usuario = usuario;
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});
	};

	return {
		todosLosUsuariosCtrl: _todosLosUsuariosCtrl,
		pageCtrl: _pageCtrl,
		titleCtrl: _titleCtrl
	}
})()
