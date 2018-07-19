angular.module('myApp', [])
    .controller('indexController', indexController)
    .controller('boardController', boardController);


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
