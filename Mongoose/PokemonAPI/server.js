// Assignment Goal: practice with API calls and Angular

// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Configure body-parser to correctly read JSON
app.use(bodyParser.json()); 

// Static route points to Angular app
app.use(express.static( __dirname + '/pokemon/dist' ));

// Require path
var path = require('path');

// Require Mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/PokeAPI');

// promises, promises
mongoose.Promise = global.Promise;

// Models
// var Schema = mongoose.Schema;

// Routes

// Retrieve all Pokemon
// app.get('/pokeAll', function(req, res){
//     Task.find({}, function(err, pokemon){
//         console.log("api call for all pokemon");
//         if(err){
//             res.json({message: "Error", error: err})
//         }
//         else{
//             res.json({message: "Success", data: pokemon})
//         }
//     })
// })

// // Retrieve a Pokemon by ID
// app.get('/pokeOne/:id', function(req, res){
//     Task.findOne({_id: req.params.id}, function(err, id){
//         if(err) {
//             console.log("find by id ERROR");
//             res.json({message: "Error", error: err})
//         }
//         else{
//             res.json({message: "Success", data: id})
//         }
//     })
// })



app.listen(8000, function() {
    console.log("listening on port 8000");
});
