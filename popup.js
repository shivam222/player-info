var app=angular.module('app',[]);
app.controller('cricket',function($scope,$http){
	 
	 
	        $scope.show=function(){
				var playerId=$scope.name;
				 $http.get('http://cricapi.com/api/cricketScore?unique_id='+playerId)
	           .success(function(response){
		   
		  $rootScope.arr1=response.score;
	  });
			}
	  });
	 
	  