angular.module('app', ['messages'])

.controller('FormCtrl', ['$scope', 'msgService',
  function($scope, msgService) {
    $scope.msg = function() {
      return {
        text: $scope.text,
        ttl: $scope.ttl,
        context: $scope.context,
      };
    };
    $scope.callFlashMsg = function() {
      msgService.flashMsg($scope.msg());
    };
  }
])
;
