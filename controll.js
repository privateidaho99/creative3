angular.module('app', [])
    .controller('mainCtrl', mainCtrl)

function mainCtrl($scope) {
    $scope.amount = [];
    $scope.addNew = function(amount) {
        $scope.amount.push({
            value: amount.value,
            name: amount.name,
    });
    amount.value = "";
    amount.name = "";
    }
}
