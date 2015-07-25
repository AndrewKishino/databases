var db = require('../db');
var express = require('express');
var app = express();



// query sql db here??

// communicates with database

module.exports = {
  messages: {
    get: ('/', function(req, res){
  dbConnection.connect.query('SELECT message from messages', function(err, rows, fields){
    dbConnection.end();
    if(err){
      console.log("this is an error");
    }
  });
  
});
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, cb) {

    }
  }
};

