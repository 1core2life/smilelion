module.exports = function(app)
{	
    
    var sendingData ="";
    
    var imoticon = require('./imoticon.js');

    
	// 키보드
	app.get('/keyboard', function(req, res){

        var keyboardInfo = new Object();
           
        keyboardInfo.type = "buttons";
        keyboardInfo.buttons = ["서울 캠퍼스", "국제 캠퍼스", "사용 방법", "문의 하기"] ;

        var jsonInfo = JSON.stringify(keyboardInfo);
        console.log(jsonInfo);
        
        res.writeHead('200', {'content-Type':'text/html;charset=utf8'});
        res.write(jsonInfo);
        res.end();


    });
    
    
    
	
	// 메시지
	app.post('/message', function(req, res){
	    
	sendingData ="";
   	   

    if(req.body.content ==  "서울 캠퍼스"){
        sendingData +="원하는 메뉴를 선택하라!";
        sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
        
    }
    
    else if(req.body.content ==  "국제 캠퍼스"){
        sendingData +="원하는 메뉴를 선택하라!";
        sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
        
    }
    
    else if(req.body.content ==  "사용 방법"){
    
        sendingData +="명령어 목록을 가져왔다!\n" ;
        sendingData +="-버스 확인(설/국)\n-책 <책이름>\n-날씨(설/국)\n-학식(설/국)\n-골라줘\n-맛집 추천(설/국)\n-기타 정보\n-웃어\n이렇게나 많이 할 수 있음!" ;
        
        sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
    }
    
    else if(req.body.content ==  "문의 하기"){
    
        sendingData +="< 문의 메일 > whitezonen1@khu.ac.kr\n" ;
        sendingData +="경희대 컴공과 재학생 제작 \n컴공 동아리는 D.com" ;
        
        sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
    }
    
    else if(req.body.content ==  "버스 확인(설)"){        //------------------------------------------------------------------------해야대
    
        
    }
    
    else if(req.body.content ==  "버스 확인(국)"){
        
        busForeign(res);
    }
    
    else if(req.body.content.indexOf("책") != -1){
        
        bookSearch(req,res);
    }
    
    else if(req.body.content ==  "도서 검색"){
    
        sendingData +="[책 '책 제목']을 입력하라!\n ex) 책 어린왕자" ;
        sendtoUser(res,imoticon.addImoticonDefault(sendingData));
    }
    
    else if(req.body.content ==  "날씨(설)"){
        
        todayWeather(res,0);
    }
    
    else if(req.body.content ==  "날씨(국)"){
        
        todayWeather(res,1);
    }
    
    
    else if(req.body.content ==  "학식(설)"){
    
        haksik(res,0);   
    }
    
    else if(req.body.content ==  "학식(국)"){
        
        haksik(res,1);
    }
    
    else if(req.body.content ==  "골라줘"){
        var menu = new Array('한식','면빵','중식','양식일식','카페','분식포차','고기','치킨');
        sendingData ="웃는 사자의 추천 메뉴는 !\n"+menu[Math.floor(Math.random() * (7))]+"\nthanks for lionbee manual!" ;
        sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
    
    }
    
    else if(req.body.content ==  "맛집 추천(설)"){        //------------------------------------------------------------------------해야대
    
       
    }
    else if(req.body.content ==  "맛집 추천(국)"){        //------------------------------------------------------------------------해야대
    
        
    }
    
    else if(req.body.content ==  "기타 정보"){
    
        sendingData +="-설캠 지도 / 국캠 지도\n-설국 버스 / 셔틀 버스" ;
        sendButtonEtc(res,imoticon.addImoticonDefault(sendingData));
    }
    
    
    
    
    
    
    
    //기타 정보
    
    else if(req.body.content == "설국 버스"){
        sendingData ="국캠 출발 !!(사색/생대/체대)\n07:20\n07:30\n09:15\n12:00\n12:10\n15:00\n설캠 출발 !!(중도 건너)\n10:00\n12:00\n13:30\n16:00\n17:50\n18:00\n요금 단돈 1500원!" ;
        sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
    }
    
    else if(req.body.content =="셔틀 버스"){
        sendingData ="[국캠-영통역]\n 국캠 출발 !!\n 08:20\n 09:50\n 11:20\n 12:50\n 14:20\n 15:50\n 영통역 출발 !!(3번 출구)\n 08:30\n 10:00\n 11:30\n 13:00\n 14:30\n 16:00\n\n[통학버스등교]\n수원역 출발 !!(세평지하차도위)\n 08:15\n 08:30\n 09:30\n 10:00"+
                           "\n부평역 출발 !!(우체국 맞은편)\n 06:50\n주안역 출발 !!(사랑병원 건너)\n 06:50\n송내사거리 출발 !!\n 07:00(송내사거리 발)\n 07:05(부평역 발)\n 07:15(주안역 발)"+
                           "\n\n[통학버스하교]\n수원행 출발 !!\n 18:00\n 19:00\n 21:00\n요금 단돈 700원!\n인천행 출발(송내-부평-주안 경유) !!\n 18:00\n 19:00\n 20:00\n요금 단돈 2000원!" ;
        sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
    }
    
    
    else if(req.body.content =="설캠 지도"){
        sendingData ="1. 정문 2. 경희의료원\n3. 치과병원 4. 치과대학\n5. 의과간호대 6. 의학도서관\n7. 약학대학 8. 행복기숙사(여자동)\n9. 세진원 10. 세화원"+
                    "\n11. [지하]푸른솔 문화관/지하주차장 [지상]경희남중고 운동장\n12. 경희남중·고 13. 대운동장\n14. 네오관/사이버대 15. 교시탑\n16. 청운관 17. 호관대학\n18. 경희여중·고 19. 경희초"+
                    "\n20. 선동호 21. 미술대\n22. 국제교육원 23. 생활과대\n24. 신문방송국 25. 공관\n26. 본관(대학원) 27. 도서관\n28. 노천극장 29. 크라운관/음대\n30. 학관 31. 유치원/사이버대"+
                    "\n32. 무용관 33. 오비스홀/경영대\n34. 정경대 35. 문이과대\n36. 교수회관 37. 평화의전당\n38. 법과대학 39. 제2법학관\n40. 법학부속관 41. 후문\n42. 한의대/박물관 43. 삼의원";
        sendwithPhotoMap(res, "http://smilelion-corelife.c9users.io/mapSeol",imoticon.addImoticonSmile(sendingData));
    }
    
    else if(req.body.content =="국캠 지도"){
        sendingData ="1. 정문 2. 애지원\n3. 르네상스공원 4. 우정원\n5. 잔디구장/주차장 6. 공대\n7. 원자로센터 8. 실습공장동\n9. 체육대학관 10. 외국어대학관\n11. 경희공원 12. 멀관.글관"+
                    "\n13. 제2기숙사 14. 대운동장\n15. 도예관 16. 원예생명공학 온실\n17. 생명과학대학관 18. 실습농장동\n19. 실험연구동 20. 예술디자인대\n21. 국제.경영대학관 22. 학관\n23. 도서관 24. 사색의광장\n25. 주차장"+
                    " 26. 야구장\n27. 종합운동장 28. 노천극장\n29. 연못 30. 전정/응과대\n31. 국제대 32. 천문대" ;
        sendwithPhotoMap(res, "http://smilelion-corelife.c9users.io/mapGl",imoticon.addImoticonSmile(sendingData));
    }
    
    else if(req.body.content ==  "웃어"){
    
        sendingData ="ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ";
        sendtoUser(res,imoticon.addImoticonCry(sendingData));
    
    }
    
    else
    {
        sendingData ="무슨 말인지 잘 모르겠다 ...\n[사용 방법]를 확인해라!" ;
        sendButtonDefault(res,imoticon.addImoticonCry(sendingData));
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
    
    
     function sendButtonSeoul(res,sendingText){
       res.send({
              "message": {
                "text": sendingText
             },
              "keyboard": {
                "type": "buttons",
                "buttons": [
                  "버스 확인(설)",
                  "도서 검색",
                  "날씨(설)",
                  "학식(설)",
                  "맛집 추천(설)",
                  "기타 정보"
                  
                ]
              }
            });
      	    res.end();
     }   
     
     function sendButtonGlobal(res,sendingText){
       res.send({
              "message": {
                "text": sendingText
             },
              "keyboard": {
                "type": "buttons",
                "buttons": [
                  "버스 확인(국)",
                  "도서 검색",
                  "날씨(국)",
                  "학식(국)",
                  "맛집 추천(국)",
                  "기타 정보"
                  
                ]
              }
            });
  	     res.end();
     } 
     
     function sendButtonEtc(res,sendingText){
       res.send({
              "message": {
                "text": sendingText
             },
              "keyboard": {
                "type": "buttons",
                "buttons": ["설캠 지도",
                "국캠 지도",
                "설국 버스", 
                "셔틀 버스"]
              }
            });
  	    res.end();
     } 

     function sendButtonDefault(res,sendingText){
       res.send({
              "message": {
                "text": sendingText
             },
              "keyboard": {
                "type": "buttons",
                "buttons": ["서울 캠퍼스",
                "국제 캠퍼스",
                "사용 방법", 
                "문의 하기"]
              }
            });
  	    res.end();
     }  
    
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
                 "type": "buttons",
                "buttons": ["서울 캠퍼스",
                "국제 캠퍼스",
                "사용 방법", 
                "문의 하기"]
               
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
     

    function bookSearch(req,res){
        var bookName = req.body.content.replace('책',"");
   	    
   	    var request = require('request');
        var cheerio = require("cheerio");
        var urlencode = require('urlencode');
        var EncodedName = urlencode(bookName);
        
        var searchBookUrl = "http://kulis.khu.ac.kr/search/Search.Result.ax?sid=1&q=ALL%3A"+EncodedName+"&mf=true&gr=1&pageSize=100";
    
        request({
        url: searchBookUrl,
        method: 'GET'
        }, function(err, response, body) {
            var $ = cheerio.load(body);
            var array = {"title": [], "author": [], "status": [], "location": [], "code": []};
            var index = 0;
            $(".body").each(function () {
                var st =  $(this).text().replace(/(\s*)/gi, "").split('/');
                array["title"][index] = st[0];


                var pos = st[1].indexOf("대출");
                var position = new Array();
                while(pos > -1){
                    position.push(pos);
                    pos =  st[1].indexOf("대출", pos + 1);
                }
                
                 array["location"][index] = new Array(position.length);
                 array["code"][index] = new Array(position.length);
                 array["status"][index] = new Array(position.length);
                
                    if(st[1].indexOf("서울C") > -1){
                        array["location"][index][0] = "서울 도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("서울C")-1);
                    }
                    else if(st[1].indexOf("국제C") > -1){
                        array["location"][index][0] = "국제 도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("국제C")-1);
                    }
                    else if(st[1].indexOf("평화복지") > -1){
                        array["location"][index][0] = "평화복지 대학원";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("평화복지")-1);
                    }
                    else if(st[1].indexOf("의학도서관") > -1 && st[1].indexOf("한의학도서관") <= -1){
                        array["location"][index][0] = "의학도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("의학도서관")-1);
                    }
                    else if(st[1].indexOf("한의학도서관") > -1){
                        array["location"][index][0] = "한의학도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("한의학도서관")-1);
                    }
                    else if(st[1].indexOf("법학도서관") > -1){
                        array["location"][index][0] = "법학도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("법학도서관")-1);
                    }
                    else if(st[1].indexOf("의료원도서실") > -1){
                        array["location"][index][0] = "의료원도서실";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("의료원도서실")-1);
                    }
                    else if(st[1].indexOf("음악자료실") > -1){
                        array["location"][index][0] = "음악자료실";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("음악자료실")-1);
                    }
                    else if(st[1].indexOf("공학도서관") > -1){
                        array["location"][index][0] = "공학도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("공학도서관")-1);
                    }
                    else{
                        array["location"][index][0] = "후마니타스 도서관";
                        array["author"][index] =  st[1].substr(0 , st[1].indexOf("후마니타스 도서관")-1);
                    }
                    
                    
    
                    if(st[1].indexOf("대출가능") >- 1){
                        array["status"][index][0] = "대출 가능";
                        array["code"][index][0] =  st[1].substring( st[1].indexOf("[") , st[1].indexOf("]")+1 );
                    }
                    else{
                        array["status"][index][0] = "대출 불가";
                        array["code"][index][0] =  st[1].substring( st[1].indexOf("[") , st[1].indexOf("]")+1 );
                    }
                    
                    
                sendingData += (index+1)+"\n";
                sendingData += "이름-----------------\n"+array["title"][index]+"\n";
                sendingData += "저자-----------------\n"+array["author"][index]+"\n";
                sendingData += "위치-----------------\n"+array["location"][index][0]+"\n";
                sendingData += "상태-----------------\n"+array["status"][index][0]+"\n";
                sendingData += "코드-----------------\n"+array["code"][index][0]+"\n";
                
                if(position.length > 1){
                    for(var k=1; k<position.length ; k++){
                        
                        var tempSt = st[1].substring( position[0]+2, st[1].length);

                        if(tempSt.indexOf("서울C") > -1){
                            array["location"][index][k] = "서울 도서관";
                        }
                        else if(tempSt.indexOf("국제C") > -1){
                            array["location"][index][k] = "국제 도서관";
                        }
                        else if(tempSt.indexOf("평화복지") > -1){
                            array["location"][index][k] = "평화복지 대학원";
                        }
                        else if(tempSt.indexOf("의학도서관") > -1 && tempSt.indexOf("한의학도서관") <= -1){
                            array["location"][index][k] = "의학도서관";
                        }
                        else if(tempSt.indexOf("한의학도서관") > -1){
                            array["location"][index][k] = "한의학도서관";
                        }
                        else if(tempSt.indexOf("법학도서관") > -1){
                            array["location"][index][k] = "법학도서관";
                        }
                        else if(tempSt.indexOf("의료원도서실") > -1){
                            array["location"][index][k] = "의료원도서실";
                        }
                        else if(tempSt.indexOf("음악자료실") > -1){
                            array["location"][index][k] = "음악자료실";
                        }
                        else if(tempSt.indexOf("공학도서관") > -1){
                            array["location"][index][k] = "공학도서관";
                        }
                        else{
                            array["location"][index][k] = "후마니타스 도서관";
                        }
                        
                        
        
                        if(tempSt.indexOf("대출가능") >- 1){
                            array["status"][index][k] = "대출 가능";
                            array["code"][index][k] =  tempSt.substring(tempSt.indexOf("[") , tempSt.indexOf("]")+1 );
                        }
                        else{
                            array["status"][index][k] = "대출 불가";
                            array["code"][index][k] = tempSt.substring( tempSt.indexOf("[") , tempSt.indexOf("]")+1 );
                        }
                        sendingData += "\n위치-----------------\n"+array["location"][index][k]+"\n";
                        sendingData += "상태-----------------\n"+array["status"][index][k]+"\n";
                        sendingData += "코드-----------------\n"+array["code"][index][k]+"\n";
                    }
                }
                
            
                
                sendingData += "\n------------------------------------------------------\n\n";
               

                index++;
                
                if(index > 3){
                     sendingData += "책이 너무 많습니다. 상위 4개만 출력합니다!\n";
                     return false;
                } 
            });
            
            
            sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
        });

    }
    
    function busForeign(res){
    
         var request = require('request');
        var urlencode = require('urlencode');
        var EncodedName = urlencode("외국어대학");
        
        var SearchStationNum = "http://m.gbis.go.kr/search/getStationPageList.do?tabMode=&serviceKey=1234567890&pageSize=15&pageNo=1&keyword="
        +EncodedName+"&routeType=41%2C42%2C43%2C51%2C52%2C53&searchData="+EncodedName+"&osInfoType=M";
    
        sendingData += "외대 앞 버스 정보다!\n";
        
        request({
        url: SearchStationNum,
        method: 'GET'
        }, function(err, response, body) {
            var totalInfo = JSON.parse(body);
            var array = {"station": [], "stationId": []};
            
            for( var i in totalInfo["result"]["stationList"]){
                array["station"][i] = totalInfo["result"]["stationList"][i]["stationName"];
                array["stationId"][i] = totalInfo["result"]["stationList"][i]["stationId"];
            }

            SearchStationNum = "http://m.gbis.go.kr/search/getBusStationArrival.do?stationId="+array["stationId"][0]+"&osInfoType=M";
            request({
            url: SearchStationNum,
            method: 'GET'
            }, function(err, response, body) {
                var totalInfo2 = JSON.parse(body);
                for( var i in totalInfo2["busStationArrivalInfo"]["arrivalList"]){
                    sendingData += totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["routeName"];
                    sendingData += "번 버스>> ";
                    if(totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"] == "")
                        {
                            sendingData += "는 차고지 대기 중 입니다.\n";
                            continue;
                        }
                    sendingData +=totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"];
                    sendingData +="  <<분 후 도착\n";
                }
              sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));

            });
        });
    	
    }
    
    function todayWeather(res,pos){
        
   	    var request = require('request');

        var today = new Date;
        var week = new Array('일','월','화','수','목','금','토');
        var year = today.getFullYear();
        var month = today.getMonth()+1;
        var day = today.getDate();
        var hours = today.getHours();
        var minutes = today.getMinutes();
    
       
        if(minutes < 30){
            hours = hours - 1;
            if(hours < 0){
                today.setDate(today.getDate() - 1);
                day = today.getDate();
                month = today.getMonth()+1;
                year = today.getFullYear();
                hours = 23;
            }
        }
        
        // 9 -> 09
        
        if(hours >= 10 ) {
            hours = '08';
        }
        else if(hours < 10) {
            hours = '02';
        } 
        if(month < 10) {
            month = '0' + month;
        }    
        if(day < 10) {
            day = '0' + day;
        } 
     
        today = year+""+month+""+day;
    
        var _nx , _ny ;
        
        if (pos == 0)
            _nx = 61, _ny = 127; //설캠
        else
            _nx = 62, _ny = 120; //국캠
        
        var key = "guYNlF9epCHjtMFaYr6MHF62QfYwiOIsONu83X1aPXXYpvTikpJyE6QRVHowtl9Vn3CQi0Qp4G9iNXPwgB%2FgJA%3D%3D",    
        ForecastGribURL = "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData";
        ForecastGribURL += "?ServiceKey=" + key;
        ForecastGribURL += "&base_date=" + today;
        ForecastGribURL += "&base_time=" + hours +"00";
        ForecastGribURL += "&nx=" + _nx + "&ny=" + _ny;
        ForecastGribURL += "&pageNo=1&pageSize=10&numOfRows=9&startPage=1";
        ForecastGribURL += "&_type=json";
    
        var rainProbability;
        var rainForm;
        var wetPercent;
        var skyForm;
        var temperature;
        var minTemp; 
    
    
        request({
        url: ForecastGribURL,
        method: 'GET'
        }, function (error, response, body) {
          var totalInfo = JSON.parse(body);
    
          rainProbability = totalInfo["response"]["body"]["items"]["item"][0]["fcstValue"];  //probability of rain
          rainForm = totalInfo["response"]["body"]["items"]["item"][1]["fcstValue"]; // no[0] , rain[1], rain/snow[2], snow [3]
          wetPercent = totalInfo["response"]["body"]["items"]["item"][3]["fcstValue"];  //wet percentage
          skyForm = totalInfo["response"]["body"]["items"]["item"][5]["fcstValue"]; //sun[1],a little cloud[2],lots of cloud[3], heurim[4]
          temperature = totalInfo["response"]["body"]["items"]["item"][6]["fcstValue"]; //temper
          minTemp = totalInfo["response"]["body"]["items"]["item"][7]["fcstValue"];
      
            var arr  = new Array();
            arr.push(rainProbability);
            arr.push(rainForm);
            arr.push(wetPercent);
            arr.push(skyForm);
            arr.push(temperature);
            arr.push(minTemp);
    
            sendingData +="오늘의 날씨입니다.\n현재";
            
            if(pos == 0)
                sendingData +="설캠 회기동 기온은 " + arr[4] + " ºC 이며\n";
            else
                sendingData +="국캠 영통 기온은 " + arr[4] + " ºC 이며\n";
                
       	    sendingData +="최저 기온은 " +arr[5]+" ºC 이며\n";
       	    sendingData +="강수 확률은 " +arr[0]+" % 이며\n";
       	    sendingData +="습도는 " +arr[2]+" % 입니다.\n";
        
            if(arr[1] == 1){
                 sendingData +="또한 비가 내릴 예정입니다.\n";
            }
            else if(arr[1] == 2){
                 sendingData +="또한 비와 눈이 내릴 예정입니다.\n";
            }
            else if(arr[1] == 3){
                 sendingData +="또한 눈이 내릴 예정입니다. 아 츄\n";
            }
        
            if(pos == 0)
                sendButtonSeoul(res,imoticon.addImoticonDefault(sendingData));
            else
                sendButtonGlobal(res,imoticon.addImoticonDefault(sendingData));

        });

    }    
    
    
     function haksik(res,pos){
     
         
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        } 
        if(mm<10) {
            mm='0'+mm
        } 
        today = yyyy+'-' + mm+'-'+dd;
        
        var request = require('request');
        var urlencode = require('urlencode');
        var baburl = "";
        
        if(pos == 0)    //설
            baburl = "https://bds.bablabs.com/openapi/v1/campuses/YUfjRgpYTT/stores?date="+today;
        else            //국
            baburl = "https://bds.bablabs.com/openapi/v1/campuses/wNEmHgn0wx/stores?date="+today;
        
        
        request({
        url: baburl,
        headers: {
          'accesstoken': "!!"
        },
        method: 'GET'
        }, function(err, response, body) {
            
            var totalInfo = JSON.parse(body);
        
            
            var haksik = Array(totalInfo["stores"].length);
            
            for(var m = 0; m< totalInfo["stores"].length; m++)
                haksik[m] = {"description": [], "time": []};
           

            for(var k =0; k < totalInfo["stores"].length ; k ++)
                for( var i = 0 ; i<  totalInfo["stores"][k]["menus"].length ; i++){
            
                    haksik[k]["description"][i] = totalInfo["stores"][k]["menus"][i]["description"];
                    haksik[k]["time"][i] = totalInfo["stores"][k]["menus"][i]["time"];
                    
                    if(haksik[k]["time"][i] == 0)
                        haksik[k]["time"][i] = "아침"
                    else if(haksik[k]["time"][i] == 1)
                        haksik[k]["time"][i] = "점심"
                    else if(haksik[k]["time"][i] == 2)
                        haksik[k]["time"][i] = "저녁"
                    else if(haksik[k]["time"][i] == 3)
                        haksik[k]["time"][i] = "종일"
                    else
                        haksik[k]["time"][i] = "기타"
                }
            
            
            
            for(var k =0; k <totalInfo["stores"].length ; k ++){
                if(pos == 1){
                    if( k == 0)
                        sendingData +="제2 기숙사 ----------\n";
                    else if( k == 1)
                        sendingData +="\n우정원 ----------\n";  
                    else if( k == 2)
                        sendingData +="\n학생회관 ----------\n";
                    else if( k == 3)
                        sendingData +="\n공대 ----------\n";
                    else if( k == 4)
                        sendingData +="\n학생회관_교직원 ----------\n";
                }
                else{
                    if( k == 0)
                        sendingData +="청운관 ----------\n";
                    else if( k == 1)
                        sendingData +="\n푸른솔 ----------\n";  
                    else if( k == 2)
                        sendingData +="\n청운관_교직원 ----------\n";
                    else if( k == 3)
                        sendingData +="\n푸른솔_교직원 ----------\n";
                }
                for( var i = 0 ; i<  totalInfo["stores"][k]["menus"].length ; i++){
                    sendingData += haksik[k]["description"][i]+" /"  + haksik[k]["time"][i]  + "\n\n";
                }
            
                
            }
            
            
            sendButtonGlobal(res,imoticon.addImoticonDefault(sendingData));
            
            
        });
     }
    
    
    
    
    
}

