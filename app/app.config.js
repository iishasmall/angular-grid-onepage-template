
 

angular.element(document).ready(function() {


             
            var homeSectionDiv = document.getElementById('home-section');
            var aboutSectionDiv = document.getElementById('about-section');
            var navigationDiv = document.getElementById('nav');
            var contactSectionDiv = document.getElementById('contact-section');
            var skillsSectionDiv = document.getElementById('skills-section');
            var workSectionDiv = document.getElementById('work-section');

            angular.bootstrap(workSectionDiv,['workSection'])
            angular.bootstrap(contactSectionDiv,['contactSection'])
            angular.bootstrap(skillsSectionDiv,['skillsSection'])
		        angular.bootstrap(aboutSectionDiv,['aboutSection'])
            angular.bootstrap(homeSectionDiv,['homeSection'])
            angular.bootstrap(navigationDiv,["navSection"])
 });


/*angular.module('myApp', ['duScroll']).
  controller('MyCtrl', function($scope, $document){
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);*/