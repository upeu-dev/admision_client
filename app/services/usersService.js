app.factory("usersService", function($http, config){
	var url = config.baseUrl + "configs/users/";
	return {
		"list": function () {
			return $http.get(url).then(function (r){
				return r;
			});
		},
		"create": function (d) {
			return $http.post(url, d).then(function (r){
				return r;
			});
		},
		"selectx": function (id) {
			return $http.get(url, id).then(function (r){
				return r;
			});
		},
		"update":function (id, d) {
			return $http({
				method: 'PUT',
				url: url + d.id + "/",
				data: d
			}).then(function (r){
				return r;
			});
		},
		"delete": function (id) {
			return $http.delete(url+ id.id + "/").then(function (r){
				return r;
			});
		}
	};
});