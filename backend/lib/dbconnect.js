const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./../config/config');

 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 


module.exports = 
{

    connect: function(){
        
var password = config.mongoConnectionString;
//console.log(password);
    mongoose.connect(password, { useFindAndModify: false ,useUnifiedTopology: true,useNewUrlParser: true });

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
    }
}
    