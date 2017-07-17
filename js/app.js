var f1App = angular.module("f1App",[]);

f1App.controller("drvrCtrlr", ['$scope', '$http', function($scope, $http){
  $http.get("http://ergast.com/api/f1/2017/driverstandings.json").then(function(result){
    var driver_data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    var drvr_ary = [];
    for (var i = 0; i < driver_data.length; i++) {
      drvr_ary.push(driver_data[i].Driver);
    }
    // console.log(drvr_ary);
    // console.log(drvr_ary[0].givenName);
    $scope.drivers = drvr_ary;
    $scope.key = 'givenName';
    // $scope.new_key = "";
    $scope.sort_by_key = function(new_key){
      if($scope.key === new_key){
        $scope.key = "-" + $scope.key;
      }
      else{
        $scope.key = new_key
      }
    }
  });
}]);

angular.module("f1App").directive("driverData", function(){
  return{
    templateUrl: "../templates/driver-data-template.html",
    restrict: 'AE'
  }
})
