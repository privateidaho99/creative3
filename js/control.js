angular.module('app', [])
    .controller('mainCtrl', mainCtrl)

function mainCtrl($scope) {
    $scope.amounts = [];
    $scope.categories = ["General", "Food", "Transportation", "Housing", "Investing", "Savings", "Debt"];
    
    $scope.addNew = function(amount) {
        $scope.amounts.push({
            value: amount.value,
            name: amount.name,
            type: amount.type,
    });
    amount.value = "";
    amount.name = "";
    amount.budget = "";
    };
}
