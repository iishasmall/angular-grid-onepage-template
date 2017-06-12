var aboutSection = angular.module('aboutSection',['duScroll']);


aboutSection.component('aboutSection',{
	

	templateUrl:"modules/about/about.template.html",
	controller: function contactController($http){

		var self = this;

		$http.get('data/about.json').then(function (response) {
                          self.bios = response.data;

                         
         });

	}



});