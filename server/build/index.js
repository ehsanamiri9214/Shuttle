"use strict";
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hallo.");
});
app.listen(port, function () {
    console.log("Server running on port: " + port + " ...");
});
