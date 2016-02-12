var express = require("express");
var mysql = require("mysql");
var app = express();
/*
* Configure MySQL parameters.
*/
var connection = mysql.createConnection({
host : "31.220.16.193",
user : "u234471085_gian",
password : "mimamamemima123",
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

app.listen(3006,function(){
console.log("It's Started on PORT 3000");
});

/**
A PARTIR DE AQUI NO SERIA NECESARIO, DE MOMENTO
**/
app.get('/',function(req,res){
res.sendfile('index.html');
});
/*
* Here we will call Database.
* Fetch news from table.
* Return it in JSON.
*/
app.get('/load',function(req,res){
connection.query("SELECT * tema",function(err,rows){
if(err)
{
console.log("Problem with MySQL"+err);
}
else
{
res.end(JSON.stringify(rows));
}
});
});