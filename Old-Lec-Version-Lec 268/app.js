const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items=["drive", "buy", "drink"];

app.get("/", function(req, res) {
	
	let today = new Date();
	
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	let day = today.toLocaleDateString("en-US", options);
	console.log(day);
	res.render("list", {KindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {	
	items.push(req.body.newItem);	
	res.redirect("/");	
});

app.listen(3000, function() {
	console.log("Server is running on port 3000");
});