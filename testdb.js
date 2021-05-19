const mongoose = require('mongoose');


var connection_string = "mongodb+srv://library:library@cluster0.xo1ph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_string, {});
var db = mongoose.connection;
db.on('connected', function () {
console.log('MongoDB connected!');
});

const courselib = require('./backend/lib/courselib');

courselib.createcourse({id : 1,name: 'competetive programming',articles:44},function(err,course){
    console.log(course);
})
courselib.getall(function(course){
    console.log(course);
})