angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Sudhir Pai',
    lastText: 'Melbourne, Australia',
    face: 'img/adam.png'
  }, {
    id: 1,
    name: 'Willem Veelenturf',
    lastText: 'Utrecht, Netherlands',
    face: 'img/ben.png'
  }, {
    id: 2,
    name: 'Bahar Khodabakhshi',
    lastText: 'Melbourne, Australia',
    face: 'img/max.png'
  }, {
    id: 3,
    name: 'Manish Grover',
    lastText: 'New York, USA',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Vishal Gupta',
    lastText: 'Pune, India',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
