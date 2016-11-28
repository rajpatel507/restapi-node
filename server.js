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

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       


// var mongoose   = require('mongoose');
// mongoose.createConnection('mongodb://rajpatel507:platinaraj1@ds161487.mlab.com:61487/resttestdb',options); // connect to our database

// var Bear = require('./app/models/bear');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var port = process.env.PORT || 8080; 

// var router = express.Router(); 

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });
// router.route('/bears')

//     // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {
        
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)

//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Bear created!' });
//         });
        
//     });
// app.use('/api', router);

// app.listen(port);
// console.log('Magic happens on port ' + port);

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://rajpatel507:platinaraj1@ds061757.mlab.com:61757/quora'); // connect to our database

// var Bear = require('./app/models/bear');
