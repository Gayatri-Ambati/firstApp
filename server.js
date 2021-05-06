const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static(path.join(__dirname, "static")));
app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})
 
app.get("/resume", function(req, res){
    filePathName=__dirname+'/static/html/resume.html';
    res.sendFile(filePathName);
})

app.get("/google", function(req, res){
    filePathName=__dirname+'/static/html/google.html';
    res.sendFile(filePathName);
})

app.get("/colour", function(req, res){
    filePathName=__dirname+'/static/html/colour.html';
    res.sendFile(filePathName);
})

app.get("/login", function(req, res){
    filePathName=__dirname+'/static/html/login.html';
    res.sendFile(filePathName);
})

app.get("/register", function(req, res){
    filePathName=__dirname+'/static/html/register.html';
    res.sendFile(filePathName);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
