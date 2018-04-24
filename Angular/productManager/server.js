var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + '/angular/dist' ));
app.set("views", path.join(__dirname, "./views"));
mongoose.connect('mongodb://localhost/ProductSchema');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [4, "Title must have more than 3 characters!"]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    }
}, {timestamps:true});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');

// ROUTES

app.get('/api/products', function(req, res){
    Product.find({$query: {}, $orderby:{ updatedAt: -1}}, function(err, products){
        console.log('getting products!')
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            res.json({message:"Success", products: products})
        }
    })
}),

app.get('/api/viewProduct/:id', function(req, res){
    Product.findOne({_id: req.params.id}, function(err, product){
        if(err){
            console.log("One product back");
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", product: product}) 
        }

    })
}),

app.post('/api/addProduct/', function(req, res){
    var product = new Product(req.body);
    product.save(function(err){
        if(err){
            console.log("backend add product");
            res.json({message: "Error", error: product.err})
        }
        else {
            res.json({message: "Success"})
        }
    })
}),

app.put('/api/product/:id', function(req, res){
    console.log("Edit product Back")
    Product.findByIdAndUpdate({_id: req.params.id},
    req.body, {new: true}, function(err, product){
        if(err){
            console.log("edit error in back")
            res.json({message: "Error", error: err})
        }
        else{
            console.log("update/edit in backend")
            res.json({message: "Success", product: product})
        }
    })

}),

app.delete('/api/product/:id', function(req, res){
    Product.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log("Delete occured in backend")
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success"})
        }
    
    });
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular/dist/index.html"))
});

app.listen(8000, function() {
    console.log("Listening on port 8000!");
});