const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const courselib = require('./backend/lib/courselib');
const connect = require('./backend/lib/dbconnect');
const config = require('./backend/config/config');

 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "static")));

connect.connect();

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
app.get("/tambola",function(req,res)
{
    filePathName=__dirname+'/static/html/tambola.html';
    res.sendFile(filePathName);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
// Heroku will automatically set an environment variable called PORT
const PORT = config.webPort;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

