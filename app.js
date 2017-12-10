var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//tells express to serve our public folder
app.use(express.static("public"));
var friends = ["Tony", "Miranda", "Adam", "Barb"];
//tells app that we don't need to specify we are using eJS files
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.post("/addfriend", function (req, res) {
    console.log(req.body);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
    res.send("You have reached the post Route!!");
})

//friends
app.get("/friends", function (req, res) {

    res.render("friends", { friends: friends });
})

app.listen(3000, function () {
    console.log("Server is listening");
})