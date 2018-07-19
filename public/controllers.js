angular.module('myApp', [])
    .controller('indexController', indexController)
    .controller('boardController', boardController)
    .filter('capitalize', capitalize);


function indexController() {

}

function boardController($http) {
    let vm = this;

    $http.get('/api').then(function (res) {
        vm.message = "apply your self";
        vm.goals = res.data;
        console.log(vm.goals);

    }).catch(function (err) {
        console.log(err)

    })
}

function capitalize() {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }

}
