var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8003/7663927766_ff5f346ab1.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5774/21287793088_cd6894cea6.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){


  res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.listen(3000, process.env.IP, function(){
  console.log("The YelpCamp Server has started");
});
