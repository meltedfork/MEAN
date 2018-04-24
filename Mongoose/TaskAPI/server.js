// Assignment Goal: create an app with endpoints and CRUD operations

// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Configure body-parser to correctly read JSON
app.use(bodyParser.json()); 

// Static route points to Angular app
app.use(express.static( __dirname + '/helloAng/dist' ));

// Require path
var path = require('path');

// Require Mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/TaskAPI');

// promises, promises
mongoose.Promise = global.Promise;

// Models
var Schema = mongoose.Schema;

// Define Task Schema
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: ""},
    completed: {type: Boolean, default: false},
}, { timestamps: true });  

// Set the models
mongoose.model('Task', TaskSchema);

// Store model in variable
var Task = mongoose.model('Task');

// Routes
// Retrieve all Tasks
app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        console.log("api call for all tasks");
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message: "Success", data: tasks})
        }
    })
})

// Retrieve a Task by ID
app.get('/task/:id', function(req, res){
    Task.findOne({_id: req.params.id}, function(err, id){
        if(err) {
            console.log("find by id ERROR");
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message: "Success", data: id})
        }
    })
})

// Create a Task
app.post('/task', function(req, res){
    var task = new Task(req.body);
    task.save(function(err){
        if(err) {
            console.log("name ERROR");
            res.json({message: "Error", error: task.err})
        }
        else{
            res.json({message: "Successful Add", data: task})
        }
    })
})

// Find the existing resource by ID and Update
// parameters: the id of the item to find, the change to be made, an option that asks mongoose to return the updated version, then the callback function
app.put('/task/:id', function(req, res){ 
    console.log("**** backend put: req, res")
    Task.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task){
        if(err){
            console.log("update ERROR");
            res.json({message: "Error", error: err})
        }
        else{
            console.log("**** server return")
            console.log("**** server return: task", task)
            console.log("**** server return: after task")
            res.json({message: "Successful Update", data: task})
        }
    })
})

// Delete a Task by ID
app.delete('/task/:id', function(req, res){
    Task.remove({_id: req.params.id}, function(err){
        if(err){
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
