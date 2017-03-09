FoorumApp.controller('ShowMessageController', function($scope, $routeParams, $location, $window, Api){
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
  
  //Get topikit
    Api.getTopic($routeParams.id).success(function(topic){
        
        $scope.topic = topic;
        $scope.messages = topic.Messages;
        $scope.topicName = topic.name;
        $scope.topicDescription = topic.description;
        $scope.messageCount = topic.Messages.length;
        $scope.topicMessageTitle = topic.Messages.title;
        $scope.topicMessageContent = topic.Messages.content;
        $scope.messageCreated = topic.Messages.createdAt;
        
    })
    .error(function(){
        console.log("Error");
    });




  $scope.addReply = function(newReply) {
      var data = {content: $scope.newReply.content};
      Api.addReply($routeParams.id, data).success(function(message){
      //  $location.path("/messages/"+$routeParams.id.toString());
      $window.location.reload(true);
      })
      .error(function(){
        console.log("Error while sending data");
      });
    };
 


// 
$scope.addReply = function(newReply){
    var tiedot = {content: $scope.newReply.content};
    Api.addReply($routeParams.id, tiedot).success(function(reply){
   //   $location.path("/messages/"+$routeParams.id.toString());
      $window.location.reload(true);
    }).error(function(){
      console.log("Error error x--D");
    });
  }


});
