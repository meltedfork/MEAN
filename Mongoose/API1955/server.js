// Assignment Goal: API server full functionality over URL

// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Configure body-parser to correctly read JSON
app.use(bodyParser.json()); 

// Require path
var path = require('path');

// Require Mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/api1955');

// promises, promises
mongoose.Promise = global.Promise;

// Models
var Schema = mongoose.Schema;

// Define Year Schema
var YearSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });  

// Set the models
mongoose.model('Year', YearSchema);

// Store model in variable
var Year = mongoose.model('Year');

app.get('/', function(req, res){
    Year.find({}, function(err, years){
        console.log("api call for all happens")
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message: "Success", data: years})
        }
    })
})

app.get('/new/:name', function(req, res){
    var person = new Year({name: req.params.name});
    person.save(function(err){
        if(err) {
            console.log("name ERROR");
            res.json({message: "Error", errors: name.err})
        }
        else{
            res.json({message: "Successful Add", data: person})
        }
    })
})

app.get('/:name', function(req, res){
    Year.findOne({name: req.params.name}, function(err, name){
        if(err) {
            console.log("name ERROR");
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message: "Success", data: name})
        }
    })
})

app.get('/remove/:name', function(req, res){
    Year.remove({name: req.params.name}, function(err, name){
        if(err) {
            console.log("name ERROR");
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message: "Successful Removal"})
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
