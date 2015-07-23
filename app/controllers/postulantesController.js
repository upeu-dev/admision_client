app.controller("postulantesController",function ($scope, $window, postulantesService){

	$scope.postulantes=[];
	
	list = function(){
		postulantesService.list().then(function (r) {
			$scope.postulantes = r.data
		}, function (error) {
			alert(error.data.message);
		});
	}

	list();
	$scope.select = function(d){
		$scope.postulante = d;
	};
	$scope.save = function(){
		if($scope.postulante.id){
			postulantesService.update({ id: "" },$scope.postulante).then(function (r) {
				console.log(r.data);
				list();
			}, function (error) {
				alert(error.data.message);
			});
		}else{
			postulantesService.create($scope.postulante).then(function (r) {
				console.log(r.data);
				list();
			}, function (error) {
				alert(error.data.message);
			});
		}
	};
	$scope.delete = function(d){
		if ($window.confirm('Confirm delete')) {
			postulantesService.delete({ id: d.id }).then(function (r) {
				console.log(r.data);
				list();
			}, function (error) {
				alert(error.data.message);
			});
		}
	};

});