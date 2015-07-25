var db = require('../db');
var express = require('express');
var app = express();



// query sql db here??

// communicates with database

module.exports = {

  messages: {
    get: function(callback) {
      // connect to database
      dbConnection.connect();
      // query the database to get all messages
      dbConnection.query("SELECT * from messages", function(err, rows, fields){
        dbConnection.end();
        if(err){
          console.log('this is an error');
        }
      });
        //call the callback passing in all messsages
    },


    post: function (message, callback) {
      dbConnection.connect();
      dbConnection.query("INSERT into messages (usernames_id, roomnames_id, messagescol) \
        SELECT r.id, u.id, '" + message.message + "' \
        FROM usernames u, roomnames r \
        WHERE r.roomname='" + message.roomname + "' \
        AND u.username='" + message.username + "'");
         
    } // a function which can be used to insert a message into the database
  
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      dbConnection.connect();
      dbConnection.query('SELECT * from messages', function(err, rows, fields){
        dbConnection.end();
        if(err){
          console.log("this is an error");
        }
      });  
    },
    post: function (username, cb) {

    }
  }
};

