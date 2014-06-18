var app = angular.module('angular-ui-confirm', ['ui.bootstrap']);
app.directive('confirm', ['$modal', function($modal) {
  return {
    restrict: 'A',
    scope: {
      'action': '&nConfirm',
      'text': '@rel'
    },
    link: function(scope, elem, attrs) {
      elem.on('click', function() {
        var modalInstance = $modal.open({
          templateUrl: '/views/modal.html',
          controller: ["$scope", "$modalInstance", "text", function($scope, $modalInstance, text) {
            $scope.text = text;
            $scope.ok = function () {
              $modalInstance.close(/*$scope.text*/);
            };
            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            };
          }],
          resolve: {
            text: function () {
              return scope.text;
            }
          }
        });
        modalInstance.result.then(function (/*text*/) {
          scope.action();
        }, function () {
        });
      });
    }
  };
}]);