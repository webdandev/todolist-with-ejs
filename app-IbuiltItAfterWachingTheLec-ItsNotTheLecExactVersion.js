const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var items=["drive", "buy", "drink"];
var day="Saturday";

app.get("/", function(req, res) {				
	res.render("list", {KindOfDay: day, listItems: items});
});

app.post("/", function(req, res) {	
	items.push(req.body.newItem);	
	res.redirect("/");	
});

app.listen(3000, function() {
	console.log("Server is running on port 3000");
});