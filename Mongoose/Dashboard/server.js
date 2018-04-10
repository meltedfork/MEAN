// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard');
mongoose.Promise = global.Promise;

var OwlSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    length: Number
   });
mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');



// Routes
// Root Request
app.get('/', function(req, res) {
    Owl.find({}, function(err, owls){
        if(err){
            res.render('index', {errors: owls.errors})
        }
        else{
            res.render('index', {owls: owls});
        } 
    })   
})

app.get('/owls/new', function(req, res){
    res.render('newOwl');
})

app.get('/owls/:id', function(req, res){
    var thisOne = Owl.findOne({_id: req.params.id}, function(errs, owls){
        console.log('********* thisOne Owl', thisOne);
        if(errs){
            res.redirect('/');
        }    
        else{
            res.render('thisOne', {owls: owls});            
        }
    })    
})


app.post('/owls', function(req, res) {
    var owl = new Owl(req.body);
    console.log("POST DATA", req.body);
    owl.save(function(err){
        if(err){
            res.render('newOwl', {errors: owl.errors})
        }
        else{
            res.redirect('/');
        }
    })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
