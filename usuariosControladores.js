var Ctrl = (function(){
	var _todosLosUsuariosCtrl = function($scope,$rootScope,$http,$log,$window){	
		$rootScope.page = 1
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
	var _pageCtrl = function($scope, $rootScope,$http,$log,$routeParams,$window){
		$log.log("roteParams: "+ $routeParams.page)
		//$log.log('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&page='+ $rootScope.page)
		//$log.log('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&page='+ $routeParams.page)
		$http.get('http://api.themoviedb.org/3/discover/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&page='+ $routeParams.page)
			.success(function(usuarios){
				$scope.page = Number($routeParams.page)
				$scope.usuarios = usuarios.results;
				//$log.log("USUARIOS:")
				//$log.log(JSON.stringify(usuarios.results))

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

			$scope.criterio = {}
			$scope.criterio.columna = 'title'
		}
		var _titleCtrl = function($scope,$routeParams,$http,$log,$window){
			//$log.log(JSON.stringify($routeParams))

			//http://api.themoviedb.org/3/movie/' + $routeParams.id +'?api_key=4584ae721cb020ce65a4bd25368ec31e
		$http.get('http://api.themoviedb.org/3/movie/' + $routeParams.title + '?api_key=4584ae721cb020ce65a4bd25368ec31e') //aqui se usa el valor de la variable :id del app.js
			
			.success(function(usuario){ //usamos usuario en singular porque cogemos un id solo
				$scope.usuario = usuario;
				//$log.log("USUARIOS:")
				//$log.log($routeParams)
				

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

	};
	/*
	var _idCtrl = function($scope,$http,$log,$window,$routeParams){
		//$log.log("recibo "  + JSON.stringify($routeParams))
		$http.get('https://jsonplaceholder.typicode.com/posts/' + $routeParams.id) //aqui se usa el valor de la variable :id del app.js
			.success(function(usuario){ //usamos usuario en singular porque cogemos un id solo
				$scope.usuario = usuario;
				//$log.log("USUARIOS:")
				//$log.log(JSON.stringify(usuario))

			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

	};
	var _userIdCtrl = function($scope,$http,$log,$window,$routeParams){	
		$http.get('https://jsonplaceholder.typicode.com/posts?userId=' + $routeParams.userid)
			.success(function(usuarios){
				$scope.usuarios = usuarios; //cada ctrl tiene una memoria diferente asi que puede haber varias var con el mismo nombre
				//$log.log("USUARIOS:")
				//$log.log(JSON.stringify(usuarios))
			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

			$scope.criterio = {}
			$scope.criterio.columna = 'title'
			$scope.criterio.sentido = false
	};
	*/
	return {
		todosLosUsuariosCtrl: _todosLosUsuariosCtrl,
		pageCtrl: _pageCtrl,
		titleCtrl: _titleCtrl
		/*
		idCtrl: _idCtrl,
		userIdCtrl: _userIdCtrl
		*/
	}
})()
