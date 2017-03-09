FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  
  
  //Hae aihealueet
  Api.getTopics().success(function(topics){
      $scope.topics = topics;
      $scope.topicsCount = topics.length;
  })
  .error(function(){
      console.log("Error recieving data");
  });
  
  
  //Lisää aihealuee
  $scope.addTopic = function(newTopic) {
      var tiedot = {name: $scope.newTopic.name, description: $scope.newTopic.description};
      
     Api.addTopic(tiedot).success(function(topic){
         $location.path("/topics/"+topic.id.toString());
     })
     .error(function(){
         console.log("Error sending data");
     });
  };
  
  
  
});
