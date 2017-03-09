var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages


router.get('/:id', function(req, res, next) {
var messageId = req.params.id;

Models.Message.findById(messageId,{ 
  include: [{
        all: true,
        nested: true
    }]
})
.then(function(messages){
  console.log(messages);
  res.send(messages);
});
});



// GET /messages/:id
router.get('/:id', function(req, res, next) {
  // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
  var messageId = req.params.id;
  Models.Message.findById(messageId).then(function(message){
 console.log(message);
 res.send(message);
});
 
});


// GET /messages/:id/replies
router.get('/:id/replies', function(req, res, next) {
  // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
  var messageId = req.params.id;
  
  Models.Reply.findAll({ where: {MessageId: messageId}})
  .then(function(replies){
      console.log(replies)
      res.send(replies);
  });
});

   
// POST /messages/:id/reply
router.post('/:id/reply',authentication, function(req, res, next){
  // Lisää tällä id:llä varustettuun viestiin...
  var messageId = req.params.id;
  // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var replyToAdd = req.body;
  replyToAdd.MessageId = messageId;
  replyToAdd.UserId = req.session.userId;
  // Palauta vastauksena lisätty vastaus
  Models.Reply.create(replyToAdd).then(function(reply){
    console.log(reply)
    res.send(reply);
  })
});

module.exports = router;