const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function (req, res) {
   res.render("languages.html");
});

app.get("/languages", function (req, res) {
   res.render("languages.html");
});

app.get("/Python_Language", function (req, res) {
   res.render("Python_Language.html");
});

//
app.get("/Java_Language", function (req, res) {
   res.render("Java_Language.html");
});

app.get("/C_Language", function (req, res) {
   res.render("C_Language.html");
});


//server listener
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, function () {
//    console.log("Express server is running...");
// });


//heroku listener
app.listen(process.env.PORT, process.env.IP, function () {
   console.log("Running Express Server...");
});
