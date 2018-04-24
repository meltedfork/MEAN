var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var app = express();

app.use(express.static(__dirname+'/coinsApp/dist'));

app.all("*", (req,res,next)=>{
	res.sendFile(path.resolve("./coinsApp/dist/index.html"))
})


app.listen(8000, function(){
	console.log("Listening on port 8000")
})