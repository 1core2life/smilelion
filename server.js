
var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs")
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    user : 'root',
    password : '',
    database: 'global'
})

var server = app.listen( process.env.PORT || 3000, function(){
 console.log("Express server has started on port " + process.env.PORT);
 console.log("enter IP: " + process.env.IP);
});
 
var bodyParser = require("body-parser");
var fs = require("fs");
 
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.set('views', path.join(__dirname, 'views'));


var router = require('./main')(app);


app.get('/global', function(req, res){

    req, res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); // header 설정
    fs.readFile(__dirname + '/static/templates/index.html', (err, data) => { // 파일 읽는 메소드
        if (err) 
            return console.error(err); // 에러 발생시 에러 기록하고 종료
    
        req, res.end(data, 'utf-8'); // 브라우저로 전송
    });


});
    
    
    
app.get('/global/posting', function(req, res){

    req, res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); // header 설정
    fs.readFile(__dirname + '/static/templates/posting.html', (err, data) => { // 파일 읽는 메소드
        if (err) 
            return console.error(err); // 에러 발생시 에러 기록하고 종료
    
        req, res.end(data, 'utf-8'); // 브라우저로 전송
    });


});

    
    
app.get('/global/card', function(req, res){

    req, res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); // header 설정
    fs.readFile(__dirname + '/static/templates/card.html', (err, data) => { // 파일 읽는 메소드
        if (err) 
            return console.error(err); // 에러 발생시 에러 기록하고 종료
    
        req, res.end(data, 'utf-8'); // 브라우저로 전송
    });


});

app.get('/global/morePost', function(req, res){


      pool.getConnection(function(err,con){
       
          con.query('select * from tb_post order by hit desc limit 1 offset 1',function(err,result){
            if (err) {
                console.error(err);
                throw err;
            }

            res.send(200,result[0]);


          });
      });


});



app.post('/global/newPost', function(req, res){

    var subject = req.body.subject
    var location = req.body.location
    var userIp = req.body.userIp
    var content =req.body.content



     var now = new Date();
      
      var year = now.getFullYear();
      var month = (now.getMonth()+1);
      var day = now.getDate();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mill = now.getMilliseconds();
      
      var nowTime = year +'-'+ month+'-'+ day+' '+ hour+':'+min+':'+ sec;

      pool.getConnection(function(err,con){
          var cont = [
              0,
              location,
              '0',
              subject,
              content,
              nowTime,
              userIp,
              0
          ]
          
          con.query('insert into tb_post values(?,?,?,?,?,?,?,?)',cont,function(err,result){
            if (err) {
                console.error(err);
                throw err;
            }

            console.log(result);
            res.send(200,'success');


          });
      });


});


app.get('/mapGl', function(req, res){
    var img = fs.readFileSync('./public/mapGl.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');

});

app.get('/mapSeol', function(req, res){
    var img = fs.readFileSync('./public/mapSeol.jpg');
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