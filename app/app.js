var app=angular.module("app",[
	'ngRoute', 
    'ngMaterial',
    'toastr',
    'LocalStorageModule',
	]);

app.config(function ($routeProvider) {
	$routeProvider.when("/test", {
        templateUrl: "./app/views/test.html"
    });
    $routeProvider.when("/postulantes", {
        templateUrl: "./app/views/postulantes.html"
    });
    $routeProvider.when("/home", {
        templateUrl: "./app/views/home.html"
    });
    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "./app/views/login.html"
    });

    $routeProvider.when("/notauthorized", {
        controller: "notauthorizedController",
        templateUrl: "./app/views/notauthorized.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});


