
var path = require('path');
var fs = require("fs")
var bodyParser = require("body-parser");

var express = require('express');
var app = express();

var server = app.listen( process.env.PORT || 3000, function(){
 console.log("Express server has started on port " + process.env.PORT);
});
 
 
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));


var router = require('./main')(app);



app.get('/mapGl', function(req, res){
    var img = fs.readFileSync('./static/img/mapGl.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');

});

app.get('/mapSeol', function(req, res){
    var img = fs.readFileSync('./static/img/mapSeol.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');

});

app.get('/alittlecloud', function(req, res){
    var img = fs.readFileSync('./static/img/alittlecloud.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});

app.get('/heurim', function(req, res){
    var img = fs.readFileSync('./static/img/heurim.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});

app.get('/lotsofcloud', function(req, res){
    var img = fs.readFileSync('./static/img/lotsofcloud.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});

app.get('/rain', function(req, res){
    var img = fs.readFileSync('./static/img/rain.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});


app.get('/rainsnow', function(req, res){
    var img = fs.readFileSync('./static/img/rainsnow.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});

app.get('/snow', function(req, res){
    var img = fs.readFileSync('./static/img/snow.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});


app.get('/sun', function(req, res){
    var img = fs.readFileSync('./static/img/sun.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');

});