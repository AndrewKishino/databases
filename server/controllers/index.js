var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils.js');


// communicates with client

module.exports = {
  messages: {
    get: function (req, res) {
      // I got a GET request for messages so lets go get those messages
      models.messages.get(function(results) { //promisessss
        // send a response back to the client
          // the messages (which are the results) need to be passed along
      })

      // model needs to execute the below after data is received

      // create results obj with rows key
      // results = { rows: rows};
      // function(rows) 
      // end(json);
      console.log(res);
      utils.sendResponse( res, {'message': message} );

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // model needs to execute fcn after data is written 
      utils.collectData(req, function(message){
        message.objectId = ++objectId;
        models.messages.post(message);
        utils.sendResponse(res, {objectId: objectId}, 201);
      }); 
    }, // a function which handles posting a message to the database

    options: {}
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('get res', res);
      
      utils.sendResponse( res, {'username': username} );

    },
    post: function (req, res) {
      // console.log('post req.body', req.body);
      // utils.collectData(req.body, function(username){
        console.log("username", username);
        // username.objectId = ++objectId;
        models.usernames.post(req.body, res);
    },
    options: {}

  }
};

