var express = require("express");
var path = require("path");
var app = express();

app.use(express.static('lib'))
app.use(express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/Home.html"));
});

app.get("/remote", function(req, res) {
  res.sendFile(path.join(__dirname, "public/Remote.html"));
});

app.listen(3000);
