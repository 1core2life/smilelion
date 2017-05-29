
var express = require('express');
var app = express();

var server = app.listen( process.env.PORT || 3000, function(){
 console.log("Express server has started on port " + process.env.PORT);
 console.log("enter IP: " + process.env.IP);
});
 
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/"));
// bodyParser로 stream의 form data중  json data를 req.body에 옮겨 담습니다
app.use(bodyParser.json());
// bodyParser로 stream의 form data중  urlencoded data를 분석해서 req.body에 옮겨 담습니다
app.use(bodyParser.urlencoded({
    extended: true
}));

var router = require('./main')(app);

