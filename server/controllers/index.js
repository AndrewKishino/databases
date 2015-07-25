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
        if(err) {
          res.end('404', err);
        }
        else {
          res.json(messages);
        }
        // utils.sendResponse(messages);
          // the messages (which are the results) need to be passed along
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      models.messages.post(req.body, function(err){
        if(err) {
          res.end('500', err);
        }
        else {
          res.end('201');
        }
      });
      // utils.sendResponse(message);
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(usernames){
        // utils.sendResponse( res, {'username': username} );
        if(err){
          res.end('404', err);
        }
        else {
          res.json(usernames);
        }
      });      
    },

    post: function (req, res) {
      models.users.post(req.body, function(err){
        if(err) {
          res.end('500', err);
        }
        else {
          res.end('201');
        }
      });
    }

  }

};

