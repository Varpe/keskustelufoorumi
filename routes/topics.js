var express = require('express');
var router = express.Router();
var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
    Models.Topic.findAll().then(function(topics){
      console.log(topics)
      res.send(topics);
    });
});

// GET /topics/:id
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
Models.Topic.findById(topicId,{ 
  include: [{
        all: true,
        nested: true
    }]
})
  .then(function(topics){
      console.log(topics);
      res.send(topics);
    });
});



// POST /topics
router.post('/',authentication, function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
  
  Models.Topic.create(topicToAdd).then(function(topic) {
    // Palauta vastauksena lisätty aihealue
    console.log(topic);
    res.send(topic);
  });
  
});

// POST /topics/:id/message
router.post('/:id/message',authentication,  function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
  var topicId = req.params.id;
  // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var messageToAdd = req.body;
  messageToAdd.TopicId = topicId;
  messageToAdd.UserId = req.session.userId;
  
  Models.Message.create(messageToAdd).then(function(message){
    console.log(message);
    res.send(message);
  })
});


module.exports = router;
