const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const courselib = require('./backend/lib/courselib');

var pswd = process.env.mongoosepswd;
console.log(pswd);
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "static")));

var connection_string = "mongodb+srv://library:library@cluster0.xo1ph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_string, { useFindAndModify: false });
var db = mongoose.connection;
db.on('connected', function () {
console.log('MongoDB connected!');
});

db.on('error', function (error) {
console.error('Error in MongoDb connection: ' + error);
});

db.on('disconnected', function () {
console.log('MongoDB disconnected!');
});

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

app.get("/todo", function(req, res){
    filePathName=__dirname+'/static/html/todo.html';
    res.sendFile(filePathName);
})

app.get("/piechart", function(req, res){
    filePathName=__dirname+'/static/html/piechart.html';
    res.sendFile(filePathName);
})

app.get("/crudd", function(req, res){
    filePathName=__dirname+'/static/html/crud.html';
    res.sendFile(filePathName);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

