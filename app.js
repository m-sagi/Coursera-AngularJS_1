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
          $scope.text = "green";
        }else if (count == 0) {
          $scope.message = "Please enter valid data";
          $scope.text = "red";
        }else{
          $scope.message = "Enjoy!";
          $scope.text = "green";
        }
      }else{
        $scope.message = "Please enter data first";
        $scope.text = "red";

      }
    };
  }
  function totalCount(input){
    var items_array = input.split(',');
    var total_items = items_array.length;
    var i = 0;
    for(var k=0; k < items_array.length; k++){
      if (items_array[k].length){
        i++;
      }
    }
    return i;
  }



})();
