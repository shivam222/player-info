var app=angular.module('app',[]);
app.controller('cricket',function($scope,$http){
	 
	 
	        $scope.show=function(){
				var playerId=$scope.name;
				 $http.get('http://cricapi.com/api/playerStats?pid='+playerId)
	           .success(function(response){
		            $scope.first=response.name;
	  });//10582
			}
	  });
	 
	  