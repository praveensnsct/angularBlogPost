'use strict';

//---business logic services only------------------------------------------------------------------

var angularBlogBusinessServices = angular.module('angularBlogBusinessServices', ['ngStorage']);

angularBlogBusinessServices.factory('checkCreds', ['$sessionStorage', function ($sessionStorage) {
    return function () {
        var returnVal = false;
        var blogCreds = $sessionStorage.blogCreds;
        if (blogCreds !== undefined && blogCreds !== "") {
            returnVal = true;
        }
        return returnVal;
    };

}]);

angularBlogBusinessServices.factory('getToken', ['$sessionStorage', function ($sessionStorage) {
    return function () {
        var returnVal = "";
        var blogCreds = $sessionStorage.blogCreds;
        if (blogCreds !== undefined && blogCreds !== "") {
            returnVal = btoa(blogCreds);
        }
        return returnVal;
    };

}]);

angularBlogBusinessServices.factory('getUsername', ['$sessionStorage', function ($sessionStorage) {
    return function () {
        var returnVal = "";
        var blogUsername = $sessionStorage.blogUsername;
        if (blogUsername !== undefined && blogUsername !== "") {
            returnVal = blogUsername;
        }
        return returnVal;
    };

}]);


angularBlogBusinessServices.factory('setCreds', ['$sessionStorage', function ($sessionStorage) {
    return function (un, pw) {
        var token = un.concat(":", pw);
        $sessionStorage.blogCreds = token;
        $sessionStorage.blogUsername = un;
    };

}]);

angularBlogBusinessServices.factory('deleteCreds', ['$sessionStorage', function ($sessionStorage) {
    return function () {
        $sessionStorage.$reset();
    }
}]);