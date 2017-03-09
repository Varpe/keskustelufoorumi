FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän

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
    
    Api.getMessage($routeParams.id).success(function(message){
    $scope.message = message;
    $scope.messageTitle = message.title;
    $scope.messageContent = message.content;
    $scope.messageCreatedAt = message.createdAt;
  });
    
    //Viestin lisäys
  $scope.addMessage=function(newMessage){
    var data = {title: $scope.newMessage.title, content: $scope.newMessage.content};
    
    Api.addMessage($routeParams.id, data).success(function(message){
    $location.path("/messages/"+message.id.toString()); 
      })
      .error(function(){
        console.log("Error while sending data");
      });
    };
    

    
    
    
});


