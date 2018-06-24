'use strict';
  var mysql      = require('mysql');

module.exports.hello = (event, context, callback) => {

  var connection = mysql.createConnection({
    host     : 'tenis.c3c2b8eulcbb.us-east-1.rds.amazonaws.com',
    user     : 'tenis_master',
    password : 'unNombreFacil',
    database : 'tenisDB'
  });

    connection.query('SELECT * from tennis_indices',  (error, results, fields)=> {
       if (error) throw error;
       const response = {
         statusCode: 200,
         body: results,
       };
       callback(null, response);
       connection.end();
     });



};
