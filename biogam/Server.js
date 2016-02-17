var express = require("express");
var mysql = require("mysql");
var app = express();
/*
* Configure MySQL parameters.
*/
var connection = mysql.createConnection({
host : "localhost",
user : "root",
password : "",
database : "u234471085_gam1"
});

/*Connecting to Database*/

connection.connect(function(error){
if(error)
{
console.log("Problem with MySQL"+error);
}
else
{
console.log("Connected with Database");
}
});

/*Start the Server*/



