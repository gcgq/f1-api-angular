var f1App = angular.module("f1App",[]);

f1App.controller("drvrCtrlr", ['$scope', '$http', function($scope, $http){
  $http.get("http://ergast.com/api/f1/2017/driverstandings.json").then(function(result){
    var driver_data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    $scope.drivers = [];
    for (var i = 0; i < driver_data.length; i++) {
      $scope.drivers.push(driver_data[i].Driver);
    }
    // console.log($scope.drivers);
    $scope.key = 'givenName';
    $scope.sortByKey = function(new_key){
      if($scope.key === new_key){
        //if the table is already sorted by the key, reverse the order
        //by appending a '-' at the beginning of the key
        $scope.key = "-" + $scope.key;
      }
      else{
        $scope.key = new_key;
      }
    }
  });
}]);

angular.module("f1App").directive("driverData", function(){
  return{
    templateUrl: "../templates/driver-data-template.html",
  }
})
