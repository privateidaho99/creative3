angular.module('app', [])
    .controller('mainCtrl', mainCtrl)

function mainCtrl($scope) {
    $scope.amounts = [];
    $scope.addNew = function(amount) {
        $scope.amounts.push({
            value: amount.value,
            name: amount.name,
            budget: amount.budget,
    });
    amount.value = "";
    amount.name = "";
    amount.budget = "";
    }
}
