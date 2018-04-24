// Assignment Goal: create Login and Registration functionality

// Require the Express Module
var express = require('express');

// Require Session
var session = require('express-session');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Require path
var path = require('path');

// Require Bcrypt
var bcrypt = require("bcrypt-as-promised");

// Require Mongoose
var mongoose = require('mongoose');

// Create an Express App
var app = express();

// Use Session
app.use(session({secret: 'fluffernutter'}));

// Integrate body-parser with App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Connect to database
mongoose.connect('mongodb://localhost/LoginReg');

// promises, promises
mongoose.Promise = global.Promise;

// Models
var Schema = mongoose.Schema;

// Define User Schema
var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function (pswd) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(pswd);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    birthday: { 
        type: Date, 
        required: true, 
        validate: {
            validator: function(bday) {
                return bday.getTime() < new Date().getTime();
            },
            message: "Invalid Birthday"
        }
    }});
    //timestamps: true });

// Set the models
mongoose.model('User', UserSchema);

// Store model in variable
var User = mongoose.model('User');


// Hash Password before saving to database
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    })
})

// ROUTES
// Index Route
app.get('/', function(req, res){
        res.render('index')
})

// Login
app.post('/login', function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
        if(user == 1){
            console.log("***************** login: matched user")
            // Compare Password
            UserSchema.methods.comparePassword = function(loginpswd, cb) {
                bcrypt.compare(loginpswd, this.password, function(err, isMatch) {
                    if (err){
                        console.log("***************** login bcrypt error");    
                        return cb(err);
                    } 
                    else{
                        cb(null, isMatch);
                        console.log("****************** login success")
                        res.redirect('success')
                    }
                });
            };
        }
        else{
            res.render('index', {message: "User credentials do not match"})
        }
    })
})

// Register New User
app.post('/register', function(req, res){
    User.find({email: req.body.email}, function(err, user){
        if(user == 0){
            if(req.body.password == req.body.confirmpswd){
                console.log("************** Passwords match");
                var user = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    birthday: req.body.birthday,
                    email: req.body.email,
                    password: req.body.password
                })
                user.save(function(err){
                    if(err) {
                        console.log("********** save to db ERROR", err);
                        User.find({}).exec(function(err){
                            if(err) throw err;
                            res.render('index', {errors: user.errors})
                        })
                    }
                    else{
                        req.session.userID = user._id;
                        console.log("************ SessionID", req.session.userID)
                        res.render('success', {user})
                    }
                })
            }
            else{
                console.log("************** Passwords do not match");  
                res.render('index', {message: "Passwords must match"})
            }
        }
        else{
            res.render('index', {errors: errors})
        } 
    })
})


// Logout Route
app.get('/logout', function(req, res){
    req.session.destroy(function(err) {
        console.log("Goodbye!");
        res.render('index');
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
