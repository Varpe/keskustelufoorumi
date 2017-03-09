FoorumApp.controller('ShowMessageController', function($scope, $routeParams, $location, Api){
// Toteuta kontrolleri tähän
    // Messagejen haku
  Api.getMessage($routeParams.id).success(function(message){
    $scope.message = message;
    $scope.messageTitle = message.title;
    $scope.messageContent = message.content;
    $scope.messageCreatedAt = message.createdAt;
    $scope.replies = message.Replies;
    $scope.messageUser = message.User;
  });



/*  
  $scope.addReply = function(newReply) {
      var data = {content: $scope.newReply.content};
      Api.addReply($routeParams.id, data).success(function(message){
        $location.path("/messages/"+$routeParams.id);
      })
      .error(function(){
        console.log("Error while sending data");
      });
    };
*/  


// $scope.replies = message.Replies;
$scope.addReply = function(newReply){
    var tiedot = {content: $scope.newReply.content};
    Api.addReply($routeParams.id, tiedot).success(function(reply){
      $location.path("/messages/"+$routeParams.id);
    }).error(function(){
      console.log("Error error x--D");
    });
  }


});
