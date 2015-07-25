var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils.js');


// communicates with client

module.exports = {
  messages: {
    get: function (req, res) {
      // I got a GET request for messages so lets go get those messages
      models.messages.get(function(messages) { //promisessss
        // send a response back to the client
        utils.sendResponse(messages);
          // the messages (which are the results) need to be passed along
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      models.messages.post(message);
      utils.sendResponse(message);
    }, // a function which handles posting a message to the database

    options: {}
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(usernames){
        utils.sendResponse( res, {'username': username} );
      });      

    },
    post: function (req, res) {
      // console.log('post req.body', req.body);
      // utils.collectData(req.body, function(username){
        // console.log("username", username);
        // username.objectId = ++objectId;
        models.users.post(req.body, res);
    },
    options: {}

  }
};

