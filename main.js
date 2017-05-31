module.exports = function(app)
{	
	// 키보드
	app.get('/keyboard', function(req, res){

        var keyboardInfo = new Object();
           
        keyboardInfo.type = "buttons";
        keyboardInfo.buttons = ["외대버스", "웃어", "우정원", "제2기숙사", "학생식당", "공대식당","한식","면빵","중식","양식일식","분식포차","고기","치킨","카페","결정장애","설국버스","셔틀버스","휴게실","도서관","국캠맛집","설캠맛집","설캠지도","국캠지도"] ;

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
       var sendingData ="외대앞 버스정류장 정보 !!\n\n9번  " + readData[0] + ", " +  readData[1] + "\n\n1112번  "+  readData[2] + ", " +  readData[3] + "\n\n5100번  "+  readData[4] +  ", " + readData[5] +  "\n\n5500-1번  "+  readData[6] +  ", " + readData[7]
         +  "\n\nM5107번\n"+  readDataM[0] +  "\n" + readDataM[1]; 
       sendtoUser(res,addImoticonSweat(sendingData));
    	
   	 }
   	 
   	 else if(req.body.content ==  "웃어"){
   	   var sendingData ="ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ";
   	   sendtoUser(res,addImoticonCry(sendingData));

   	 }
       
       else if(req.body.content ==  "우정원"){
     	   sendtoMenu(res,"http://smilelion-corelife.c9users.io/woojeongwon","우정원");

   	 }
   	  else if(req.body.content ==  "제2기숙사"){
     	   sendtoMenu(res,"http://smilelion-corelife.c9users.io/jgik","제2기숙사");

   	 }  
   	  else if(req.body.content ==  "학생식당"){
     	   sendtoMenu(res,"http://smilelion-corelife.c9users.io/haksik","학생식당");

   	 }
       else if(req.body.content ==  "공대식당"){
     	   sendtoMenu(res,"http://smilelion-corelife.c9users.io/gonghak","공대식당");

   	 }
   	  else if(req.body.content ==  "추천"){
     	var sendingData ="아무거나 골라 보라구 ! 추천 해줄게 !\n한식 / 면빵 / 중식\n양식일식 / 분식포차 / 고기\n치킨 / 카페 / 결정장애 \nthanks for lionbee manual!" ;
        sendtoUser(res,addImoticonDefault(sendingData));

   	 }
   	  else if(req.body.content ==  "한식"){
     	var sendingData ="-500번의 인연\n-꽃찬 찜닭\n-둥지\n-방가밥죠\n-오모리 찌개\n-두남자쭈꾸미\n-수누리\n-부대통령뚝배기\nthanks for lionbee manual!" ;
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
   	    var sendingData ="-외대버스\n-웃어\n-우정원\n-제2기숙사\n-학생식당\n-공대식당\n-한식\n-면빵\n-중식\n-양식일식\n-분식포차\n-고기\n-치킨\n-카페\n-결정장애\n-설국버스\n-셔틀버스\n-휴게실\n-도서관\n-국캠맛집\n-설캠맛집\n-국캠지도\n-설캠지도\n이렇게 많이 할수 있다!" ;
        sendtoUser(res,addImoticonSmile(sendingData));
   	  } 
   	  else if(req.body.content == "설국버스"){
   	    var sendingData ="국캠 출발 !!(사색/생대/체대)\n07:20\n07:30\n09:15\n12:00\n12:10\n15:00\n설캠 출발 !!(중도 건너)\n10:00\n12:00\n13:30\n16:00\n17:50\n18:00\n요금 단돈 1500원!" ;
        sendtoUser(res,addImoticonSweat(sendingData));
   	  }
   	  else if(req.body.content =="셔틀버스"){
   	       var sendingData ="[국캠-영통역]\n 국캠 출발 !!\n 08:20\n 09:50\n 11:20\n 12:50\n 14:20\n 15:50\n 영통역 출발 !!(3번 출구)\n 08:30\n 10:00\n 11:30\n 13:00\n 14:30\n 16:00\n\n[통학버스등교]\n수원역 출발 !!(세평지하차도위)\n 08:15\n 08:30\n 09:30\n 10:00"+
   	                        "\n부평역 출발 !!(우체국 맞은편)\n 06:50\n주안역 출발 !!(사랑병원 건너)\n 06:50\n송내사거리 출발 !!\n 07:00(송내사거리 발)\n 07:05(부평역 발)\n 07:15(주안역 발)"+
   	                        "\n\n[통학버스하교]\n수원행 출발 !!\n 18:00\n 19:00\n 21:00\n요금 단돈 700원!\n인천행 출발(송내-부평-주안 경유) !!\n 18:00\n 19:00\n 20:00\n요금 단돈 2000원!" ;
        sendtoUser(res,addImoticonSweat(sendingData));
   	  }
   	   else if(req.body.content =="휴게실"){
   	    var sendingData ="휴게실\n[설캠]\n청운관 지하 2층(여) , 학관 1층\n[국캠]\n학관 2층(여) , 학관 3층(남)" ;
        sendwithPhoto(res,"http://smilelion-corelife.c9users.io/huge",addImoticonSmile(sendingData));
   	  }
   	   else if(req.body.content =="도서관"){
   	    var sendingData ="웃는사자가 도서관지도 가져왔다 !" ;
        sendLib(res, "http://smilelion-corelife.c9users.io/lib0",addImoticonSmile(sendingData));
   	  }
   	   else if(req.body.content =="국캠맛집"){
   	    var sendingData ="웃는사자가 라이온비를 훔쳐왔다 !\n자세한건 음식종류 검색하라 !" ;
        sendwithPhotoManual(res, "http://smilelion-corelife.c9users.io/manualgl",addImoticonSmile(sendingData));
   	  }
   	   else if(req.body.content =="설캠맛집"){
   	    var sendingData ="웃는사자가 라이온비를 훔쳐왔다 !\n자세한건 음식종류 검색하라 !" ;
        sendwithPhotoManual(res, "http://smilelion-corelife.c9users.io/manualseol",addImoticonSmile(sendingData));
   	  }
   	  else if(req.body.content =="설캠지도"){
   	    var sendingData ="1. 정문 2. 경희의료원\n3. 치과병원 4. 치과대학\n5. 의과간호대 6. 의학도서관\n7. 약학대학 8. 행복기숙사(여자동)\n9. 세진원 10. 세화원"+
                        "\n11. [지하]푸른솔 문화관/지하주차장 [지상]경희남중고 운동장\n12. 경희남중·고 13. 대운동장\n14. 네오관/사이버대 15. 교시탑\n16. 청운관 17. 호관대학\n18. 경희여중·고 19. 경희초"+
                        "\n20. 선동호 21. 미술대\n22. 국제교육원 23. 생활과대\n24. 신문방송국 25. 공관\n26. 본관(대학원) 27. 도서관\n28. 노천극장 29. 크라운관/음대\n30. 학관 31. 유치원/사이버대"+
                        "\n32. 무용관 33. 오비스홀/경영대\n34. 정경대 35. 문이과대\n36. 교수회관 37. 평화의전당\n38. 법과대학 39. 제2법학관\n40. 법학부속관 41. 후문\n42. 한의대/박물관 43. 삼의원";
        sendwithPhotoMap(res, "http://smilelion-corelife.c9users.io/mapSeol",addImoticonSmile(sendingData));
   	  }
   	  else if(req.body.content =="국캠지도"){
   	    var sendingData ="1. 정문 2. 애지원\n3. 르네상스공원 4. 우정원\n5. 잔디구장/주차장 6. 공대\n7. 원자로센터 8. 실습공장동\n9. 체육대학관 10. 외국어대학관\n11. 경희공원 12. 멀관.글관"+
                        "\n13. 제2기숙사 14. 대운동장\n15. 도예관 16. 원예생명공학 온실\n17. 생명과학대학관 18. 실습농장동\n19. 실험연구동 20. 예술디자인대\n21. 국제.경영대학관 22. 학관\n23. 도서관 24. 사색의광장\n25. 주차장"+
                        " 26. 야구장\n27. 종합운동장 28. 노천극장\n29. 연못 30. 전정/응과대\n31. 국제대 32. 천문대" ;
        sendwithPhotoMap(res, "http://smilelion-corelife.c9users.io/mapGl",addImoticonSmile(sendingData));
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
    
    app.get('/huge', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./gonggang/huge.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
    app.get('/lib0', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./gonggang/lib0.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
     app.get('/manualgl', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./gonggang/manualgl.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
     app.get('/manualseol', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./gonggang/manualseol.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
    
    app.get('/mapGl', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/mapGl.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
 	app.get('/mapSeol', function(req, res){
     var fs = require("fs");
     var img = fs.readFileSync('./public/mapSeol.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');

    });
    
     function sendwithPhotoMap(res,sendingUrl,sendingText){
       res.send({
              "message": {
                "text": sendingText,
                "photo": {
                  "url": sendingUrl,
                  "width": 620,
                  "height": 420
                }
             },
              "keyboard": {
                "type": "text"
               
              }
            });
      	     res.end();
     }    
    
    
    function sendwithPhotoManual(res,sendingUrl,sendingText){
       res.send({
              "message": {
                "text": sendingText,
                "photo": {
                  "url": sendingUrl,
                  "width": 640,
                  "height": 960
                }
             },
              "keyboard": {
                "type": "text"
               
              }
            });
      	     res.end();
     }    
    
    function sendLib(res,sendingUrl,sendingText){
       res.send({
              "message": {
                "text": sendingText,
                "photo": {
                  "url": sendingUrl,
                  "width": 960,
                  "height": 1700
                }
             },
              "keyboard": {
                "type": "text"
               
              }
            });
      	     res.end();
     }    
     
    function sendwithPhoto(res,sendingUrl,sendingText){
       res.send({
              "message": {
                "text": sendingText,
                "photo": {
                  "url": sendingUrl,
                  "width": 960,
                  "height": 960
                }
             },
              "keyboard": {
                "type": "text"
               
              }
            });
      	     res.end();
     }    
     
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
      function sendtoMenu(res,sendingUrl,sendingText){
       res.send({
              "message": {
                "text": "웃는사자가 "+sendingText+" 메뉴판을 가져왔다 !",
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
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
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
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
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
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
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
     var imoticon = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"+
 "         |\\                   |\\\n"+
 "         | & &&&&&&&  \\\n"+
 "         |/                      &\n"+
 "        &     ㅋ          ㅋ  &\n"+   
 "        &              ▼      &\n"+
 "       _ &           _ㅅ_    /\n"+
 "     (_ _) ㅡ ㅡ ㅡ ㅡㅡ(_ _)"
    return textData.concat(imoticon);
 }
}

