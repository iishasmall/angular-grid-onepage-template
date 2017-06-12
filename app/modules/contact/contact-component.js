
var contactSection = angular.module('contactSection',['duScroll']);


contactSection.component('contactSection',{
	

	templateUrl:'modules/contact/contact.template.html',
	controller: function contactController($http,$scope,$document){

		var self = this;


				 $scope.toTheTop = function() {
		      $document.scrollTopAnimated(0, 5000).then(function() {
		        console && console.log('You just scrolled to the top!');
		      });
    	}

	}



}).value('duScrollOffset',60);
