// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Require Mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/post_board');

// promises, promises
mongoose.Promise = global.Promise;

// Models
var Schema = mongoose.Schema;

// Define Post Schema
var PostSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    post: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

// Define Comment Schema
var CommentSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true },
    comment: { type: String, required: true }
}, { timestamps: true });  

// Set the models
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

// Store models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


// Routes
app.get('/', function(req, res){
    Post.find({}).populate('comments').exec(function(err, posts){
        console.log("what am i getting back here???", posts)
        if(err){
            res.render('index', {errors: posts.errors})
        }
        else{
            res.render('index', {posts: posts});
        }
    });
});

app.post('/post', function(req, res){
    var post = new Post(req.body);
    console.log("POST DATA", req.body);
    post.save(function(err){
        if(err){
            res.render('index', {errors: post.errors})
        }
        else{
            res.redirect('/');
        }
    });
});

app.post('/:id/comment', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        console.log("COMMENT DATA", req.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err){
            post.save(function(err){
                if(err) {
                    console.log("Comment ERROR");
                }
                else{
                    res.redirect('/');
                }
            });
        });
    });
});



app.listen(8000, function() {
    console.log("listening on port 8000");
});
