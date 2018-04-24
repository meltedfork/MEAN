// express module
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');

// Requiring "express" returns a "CreateApplication" function 
// that we store in the express variable before we invoke it.
var app = express();

// tells server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 

// Now lets set the view engine 
app.set('view engine', 'ejs');

// create a route for the server to handle
// app.get('/', function (request, response) {
//     response.send("<h1>Hello Express</h1>");
// })

// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })

app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
  // route to process new user form data:
  app.post('/users', function (req, res){
    // code to add user to db goes here!
    // redirect the user back to the root route. 
    // All we do is specify the URL we want to go to:
    res.redirect('/');
  })
  

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});


// tell server to listen after all rules set up
app.listen(8000, function () {
    console.log("listening on port 8000");
})
