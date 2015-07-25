var db = require('../db');
var express = require('express');
var app = express();


// query sql db here??

// communicates with database

module.exports = {

  messages: {
    get: function(callback) {
      // connect to database
      // db.dbConnection.connect();
      // query the database to get all messages
      db.query("SELECT * from messages;", function(err, rows, fields){
        // dbConnection.end();
        if(err){
          console.log('this is an error');
        }
        callback(rows);
        console.log('rows', rows);
      });

        //call the callback passing in all messsages
    },


    post: function (message, callback) {
      var uid = '';
      db.query("SELECT id from usernames \
        WHERE username='" + message.username + "';", function(err, rows, fields) {
          if(err) {
            console.log(err);
          }
          uid = rows[0].id;
      });

      db.query("INSERT INTO messages (usernames_id, messagescol) \
        VALUES ('" + uid + "', '" + message.message + "';", function(err, rows, fields) {
          if(err) {
            console.log(err);
          }
          callback(err);
        });

      // db.query("INSERT into messages (usernames_id, roomnames_id, messagescol) \
      //   SELECT r.id, u.id, '" + message.message + "' \
      //   FROM usernames u, roomnames r \
      //   WHERE r.roomname='" + message.roomname + "' \
      //   AND u.username='" + message.username + "';");

      // return db.query(message);
         
    } // a function which can be used to insert a message into the database
  
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      // dbConnection.connect();
      db.query("SELECT * from usernames;", function(err, rows, fields){
        if(err){
          console.log("this is a get error");
        }
        callback(rows);
      });  
    },
    
    post: function (username, callback) {
      db.query("INSERT into usernames (username) \
        VALUES '" + username + "';", function(err){
          if(err){
            console.log("this is a post error"); 
          }
          callback(err);
        });
      console.log (db.query);

    }
  }
};








// dbConnection.query("INSERT into messages (usernames_id, roomnames_id, messagescol) SELECT r.id, u.id, '" + "hello" + "' FROM usernames u, roomnames r WHERE r.roomname='" + "lobby" + "' AND u.username='" +"JK" + "';");
         



