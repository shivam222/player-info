var app=angular.module('app',[]);
app.controller('cricket',function($scope,$http){
	 
	 
	        $scope.show=function(){
				var playerId=$scope.name;
				 $http.get('http://cricapi.com/api/playerStats?pid='+playerId)
	            .success(function(response){
		           $scope.history=true;
				   $scope.first=response.born;
				   $scope.second=response.name;
				   $scope.third=response.country;
				   $scope.fourth=response.battingStyle;
				   $scope.fifth=response.bowlingStyle;
				   $scope.sixth=response.data.batting.T20Is.Runs;
				   $scope.eigth=response.data.batting.tests.Runs;
				   $scope.seventh=response.data.batting.ODIs.Runs;
				   
				   
		 });
			}
	  });
	 
	