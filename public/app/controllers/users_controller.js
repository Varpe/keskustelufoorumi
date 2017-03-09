FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  
//Login
 $scope.login = (function(user){
      var tiedot = { 
          username: $scope.user.username,
          password: $scope.user.password};
    
    Api.login(tiedot).success(function(user)   {   
     
    alert('Kirjautuminen onnistui!');
    $location.path("/#/");
 })
 .error(function(){
 console.log('Kirjautuminen epäonnistui!');
 $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
 });


});


//Register
  $scope.register = function(newUser) {
    var tiedot = {username: $scope.newUser.username, password: $scope.newUser.password};
     Api.register(tiedot).success(function(user){
         $location.path("/#/"); 
     })
     .error(function(){
         console.log("Rekisteröitymisessä tapahtui virhe");
     });
  };
  

 
});
