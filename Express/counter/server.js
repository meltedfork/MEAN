// express module
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'fluffernutter'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    var counter = 0;
    if(req.session.counter){
        req.session.counter += 1;
        counter = req.session.counter;
        console.log("the if counter is now ", counter);
    }
    else{
        req.session.counter = 1;
        counter = req.session.counter;
        console.log("the else counter is now ", counter);
    }
    console.log("session counter at end of get req.session.counter", req.session.counter);
    res.render('index', {counter: counter});
  });

app.post('/double', function (req, res){
        req.session.counter += 1;
        res.redirect('/');
})

app.post('/reset', function (req, res){
    req.session.counter = 0;
    console.log("reset counter.......", req.session.counter);
    res.redirect('/');
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})