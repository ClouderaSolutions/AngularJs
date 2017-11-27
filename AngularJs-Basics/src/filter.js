var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.heading = 'this is my heading';
});

app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

app.controller('costCtrl', function($scope) {
    $scope.price = 58;
});


app.controller('tableScr', function($scope) {
	 $scope.names = [
		    {name:'Jani',country:'Norway'},
		    {name:'Carl',country:'Sweden'},
		    {name:'Margareth',country:'England'},
		    {name:'Hege',country:'Norway'},
		    {name:'Joe',country:'Denmark'},
		    {name:'Gustav',country:'Sweden'},
		    {name:'Birgit',country:'Denmark'},
		    {name:'Mary',country:'England'},
		    {name:'Kai',country:'Norway'}
		  ];
		  $scope.orderByMe = function(x) {
		    $scope.myOrderBy = x;
		  }	
});