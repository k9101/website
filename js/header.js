angular.module('components', [])
	.directive('myHeader', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/header.html'
		};
	})

	.directive('myFooter', function(){
		return{
			restrict: "E",
			templateUrl: 'partials/footer.html'
		};
	})

	.directive('hoverHeader', function(){
		return{
			restrict:"E",
			templateUrl: 'partials/hover-header.html'
		}
	});