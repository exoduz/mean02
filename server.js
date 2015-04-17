var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', {title: "Node 2", user: "Robin Julius"});
});

app.listen(3000);
