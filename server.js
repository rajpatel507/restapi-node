var express =require('express');
var app= express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}


app.get("/listUsers",function(){
    fs.readFile("users.json",'utf8',function(err,data){
        console.log(data);

    })
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile("users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       //res.end( JSON.stringify(user));
   });
})


var server = app.listen(8081)

