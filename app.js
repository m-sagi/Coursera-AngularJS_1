(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchmenu = "";

    $scope.countItems = function (){
      if ($scope.lunchmenu.length){
        var count = totalCount($scope.lunchmenu);
        if (count > 3) {
          $scope.message = "Too much!";
        }
        else{
          $scope.message = "Enjoy!";
        }
      }else{
        $scope.message = "Please enter data first";
      }
    };
  }
  function totalCount(input){
    var items_array = input.split(',');
    return items_array.length;
  }



})();
