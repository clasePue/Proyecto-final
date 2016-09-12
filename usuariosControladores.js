var Ctrl = (function(){
	var _todosLosUsuariosCtrl = function($scope,$http,$log,$window){	
		$http.get('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e')
			.success(function(usuarios){
				$scope.usuarios = usuarios.results;
				//$log.log("USUARIOS:")
				//$log.log(usuarios.results)

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

	};
	var _paginador = function($scope,$http,$log,$window,$routeParams){	
		$http.get('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&page=' + $routeParams.page)
			.success(function(usuarios){
				$scope.usuarios = usuarios.page;
				//$log.log("USUARIOS:")
				$log.log(JSON.stringify(usuarios))

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

			$scope.criterio = {}
			$scope.criterio.columna = 'title'
		}

	return {
		todosLosUsuariosCtrl: _todosLosUsuariosCtrl,
		paginador: _paginador
	}
})()
