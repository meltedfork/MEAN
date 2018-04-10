var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({ secret: '@ppl3J@cks!' }));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index', { title: "Dojo Survey Form" });
});

app.post('/result', function (req, res) {
    console.log("****** in post method", req.body);
    var info = req.body;
    res.render('result', { info: info });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})
