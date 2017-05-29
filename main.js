module.exports = function(app)
{	
	// 키보드
	app.get('/keyboard', function(req, res){

        var keyboardInfo = new Object();
           
        keyboardInfo.type = "buttons";
        keyboardInfo.buttons = ["외대버스", "웃어", "남친(여친)", "우정원", "제2기숙사", "학생식당", "공대식당","한식","면빵","중식","양식일식","분식포차","고기","치킨","카페","결정장애"] ;

        var jsonInfo = JSON.stringify(keyboardInfo);
        console.log(jsonInfo);
        
        res.writeHead('200', {'content-Type':'text/html;charset=utf8'});
        res.write(jsonInfo);
        res.end();


    });
	
	// 메시지
	app.post('/message', function(req, res){
   	   
   	 if(req.body.content == "외대버스"){
   	   var phantoms = require('./exphantom.js');
       phantoms.exPhantomBus();
      
       var fs = require('fs');
       var readData =  fs.readFileSync('./dataFile', 'utf8').split(',');
       var fs2 = require('fs');
       var readDataM =  fs2.readFileSync('./mdataFile', 'utf8').split(',');
       var sendingData ="외대 버스정류장 정보 !!\n\n9번  " + readData[0] + ", " +  readData[1] + "\n\n1112번  "+  readData[2] + ", " +  readData[3] + "\n\n5100번  "+  readData[4] +  ", " + readData[5] +  "\n\n5500-1번  "+  readData[6] +  ", " + readData[7]
         +  "\n\nM5107번  "+  readDataM[0] +  "\n" + readDataM[1]; 
       sendtoUser(res,addImoticonSweat(sendingData));
    	
   	 }
   	 
   	 else if(req.body.content ==  "웃어"){
   	   var sendingData ="";
   	   sendtoUser(res,addImoticonCry(sendingData));

   	 }
       
         
     else if(req.body.content ==  "여친" || req.body.content ==  "남친"){
        var sendingData = "당신의 "+res.body.content+"은 " + Math.floor(Math.random() * (100)+1) + "%의\n확률로 존재 한다! 와우!\n어딘가에는 살아있어! ㅠㅠㅠㅠㅠㅠㅠㅠㅠ\n" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
       else if(req.body.content ==  "우정원"){
     	   sendtoUserPhoto(res,"http://smilelion-corelife.c9users.io/woojeongwon","우정원");

   	 }
   	  else if(req.body.content ==  "제2기숙사"){
     	   sendtoUserPhoto(res,"http://smilelion-corelife.c9users.io/jgik","제2기숙사");

   	 }  
   	  else if(req.body.content ==  "학생식당"){
     	   sendtoUserPhoto(res,"http://smilelion-corelife.c9users.io/haksik","학생식당");

   	 }
       else if(req.body.content ==  "공대식당"){
     	   sendtoUserPhoto(res,"http://smilelion-corelife.c9users.io/gonghak","공대식당");

   	 }
   	  else if(req.body.content ==  "추천"){
     	var sendingData ="아무거나 골라 보라구 ! 추천 해줄게 !\n한식 / 면빵 / 중식\n양식일식 / 분식포차 / 고기\n치킨 / 카페 / 결정장애 \nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	  else if(req.body.content ==  "한식"){
     	var sendingData ="-500번의 인연\n-꽃찬 찜닭\n-둥지\n-방가밥죠\n-오모리 찌\n-두남자쭈꾸미\n-수누리\n-부대통령뚝배기\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "면빵"){
     	var sendingData ="-좌우지간\n-메콩타이\n-타이한끼\n-이삭토스트\n-놋그릇\n-맥시모부리또\n-도스마스\n-서브마린\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "중식"){
     	var sendingData ="-짜마차이나\n-미챠이\n-피탕김탕\n-짬뽕타임\n-교동짬뽕\n-착한짬뽕\n-홍콩반점\n-현경\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "양식일식"){
     	var sendingData ="-일미돈가스\n-웨스턴에비뉴버거\n-싹아지\n-춤추는돈가스\n-고이쿠치\n-육회한연어\n-맘스터치\n-무샤멘\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "카페"){
     	var sendingData ="-플라타너스\n-다브카\n-탐탐\n-화이트스노우\n-할리스\n-바실레이아\n-투래빗\n-아마스빈 \nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "분식포차"){
     	var sendingData ="-공대떡볶이\n-영푸\n-떡튀순\n-보영만두\n-떡달\n-보용만두\n-빨간망토\n-오빠닭밝\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "고기"){
     	var sendingData ="-때지\n-맛돈\n-하남돼지\n-국가대표생고기\n-남대감\n-본갈비\n-장인족발\n-엉터리생고기\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "치킨"){
     	var sendingData ="-치땡\n-기발한치킨\n-쌀쌀맞은닭\n-엄마닭\n-장터치킨\n-이웃집\n-청춘치킨\n-치킨마루\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	   else if(req.body.content ==  "결정장애"){
   	    var menu = new Array('한식','면빵','중식','양식일식','카페','분식포차','고기','치킨');
     	var sendingData ="웃는 사자의 추천 메뉴는 !\n"+menu[Math.floor(Math.random() * (7))]+"\nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonSmile(sendingData));

   	 }
   	   else if(req.body.content ==  "명령어"){
   	    var sendingData ="-외대버스\n-웃어\n-남친(여친)\n-우정원\n-제2기숙사\n-학생식당\n-공대식당\n-한식\n-면빵\n-중식\n-양식일식\n-분식포차\n-고기\n-치킨\n-카페\n-결정장애\n이렇게 많이 할수 있다!" ;
        sendtoUser(res,addImoticonSmile(sendingData));
   	  } 
   	  else
   	  {
   	    var sendingData ="무슨 말인지 잘 모르겠어 ...\n[명령어]를 확인해봐!" ;
        sendtoUser(res,addImoticonCry(sendingData));
   	  }
    });
	
	// 친구추가
	app.post('/friend', function(req, res){
	    
        var friendInfo = new Object();
           
        friendInfo.message = "success become friend !";

        var jsonInfo = JSON.stringify(friendInfo);
        console.log(jsonInfo);
        
        res.writeHead('200', {'content-Type':'text/html;charset=utf8'});
        res.write(jsonInfo);
        res.end();

    });
	
	// 친구삭제(차단)
	app.delete('/friend/:user_key', function(req, res){
        console.log(200);
        
		res.json(200);
        res.end();
    })
	
	// 채팅방 나가기
	app.delete('/chat_room/:user_key', function(req, res){
        console.log(200);
        
		res.json(200);
        res.end();
    })
  
	app.get('/gonghak', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/gonghak.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');

    }); 
 	app.get('/woojeongwon', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/woojeong.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');

    });
 	app.get('/haksik', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/haksik.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');

    });
 	app.get('/jgik', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/jgik.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');

    });
 
    
 function sendtoUser(res,sendingData){
   res.send({
          "message": {
            "text" : sendingData
          },
          "keyboard": {
            "type": "text"
          }
        });
  	     res.end();
 }
  function sendtoUserPhoto(res,sendingUrl,sendingText){
   res.send({
          "message": {
            "text": sendingText+"의 메뉴판이 도착했다!",
            "message_button": {
              "label": "메뉴 보기",
              "url": sendingUrl
            }
          },
          "keyboard": {
            "type": "text"
           
          }
        });
  	     res.end();
 }
 function addImoticonDefault(textData){
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
 "         |\\                   |\\\n"+
 "         | & &&&&&&&  \\\n"+
 "         |/                      &\n"+
 "        &     ●          ●  &\n"+
 "        &              ▼      &\n"+
 "       _ &           _ㅅ_    /\n"+
 "     (_ _) ㅡ ㅡ ㅡ ㅡㅡ(_ _)"
    return textData.concat(imoticon);
 }
  function addImoticonCry(textData){
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
 "         |\\                   |\\\n"+
 "         | & &&&&&&&  \\\n"+
 "         |/                      &\n"+
 "        &     ㅠ          ㅠ  &     우럿슴니다\n"+
 "        &              ▼      &        8ㅅ8\n"+
 "       _ &           _ㅅ_    /\n"+
 "     (_ _) ㅡ ㅡ ㅡ ㅡㅡ(_ _)"
    return textData.concat(imoticon);
 }
   function addImoticonSweat(textData){
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
 "         |\\                   |\\\n"+
 "         | & &&&&&&&  \\\n"+
 "         |/           u          &\n"+
 "        &     ●          ●  &       헥헥..\n"+
 "        &  u           ▼   u   &     늦어서\n"+
 "       _ &   u       _ㅅ_    /      미안!\n"+
 "     (_ _) ㅡ ㅡ ㅡ ㅡㅡ(_ _)"
    return textData.concat(imoticon);
 }
  function addImoticonSmile(textData){
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
 "         |\\                   |\\\n"+
 "         | & &&&&&&&  \\\n"+
 "         |/                      &\n"+
 "        &     ♥          ♥  &\n"+   
 "        &              ▼      &\n"+
 "       _ &           _ㅅ_    /\n"+
 "     (_ _) ㅡ ㅡ ㅡ ㅡㅡ(_ _)"
    return textData.concat(imoticon);
 }
}

