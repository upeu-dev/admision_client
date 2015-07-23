app.controller("crudController",function ($scope){
	//$scope.nombre ="ini";
	$scope.saludo = function(){
		console.log("Hola "+$scope.nombre);
	}

	$scope.cursos=[
	{'nombre':'AngularJS','ano':'2019'},
	{'nombre':'Backbone','ano':'2015'},
	{'nombre':'Ember','ano':'2016'},
	]
});