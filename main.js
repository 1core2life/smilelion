module.exports = function(app)
{	
   
    
    var imoticon = require('./imoticon.js');

    
	// 키보드
	app.get('/keyboard', function(req, res){

        var keyboardInfo = new Object();
           
        keyboardInfo.type = "buttons";
        keyboardInfo.buttons = ["서울 캠퍼스", "국제 캠퍼스", "사용 방법", "문의 하기"] ;

        var jsonInfo = JSON.stringify(keyboardInfo);
        console.log("sending Keyboard");
        
        res.writeHead('200', {'content-Type':'text/html;charset=utf8'});
        res.write(jsonInfo);
        res.end();


    });
    
    
	
	// 메시지
	app.post('/message', function(req, res){
	    console.log(req.body.user_key);
    	var sendingData ="";
    	
       	
    
        if(req.body.content ==  "서울 캠퍼스"){
            sendingData +="원하는 메뉴를 선택하라!\n";
            sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
            
        }
        
        else if(req.body.content ==  "국제 캠퍼스"){
            sendingData +="원하는 메뉴를 선택하라!\n";
            sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
            
        }
        
        else if(req.body.content ==  "사용 방법"){
        
            sendingData +="명령어 목록을 가져왔다!\n\n" ;
            sendingData +="-학식(설/국)\n-버스 확인(설/국)\n-지하철 확인\n-책 <책이름>\n-날씨(설/국)\n-골라줘\n-맛집 추천(설/국)\n-기타 정보\n-웃어\n" ;
            
            sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
        }
        
        else if(req.body.content ==  "문의 하기"){
        
            sendingData +="영리활동을 하지 않습니다.\n이런 기능이 필요하다! 혹은 불편하다! 하시면 메일 주세요.\n" ;
            sendingData +="< 문의 메일 > whitezonen1@khu.ac.kr\n" ;
            sendingData +="경희대 컴공과 재학생 제작 \n" ;
            
            sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
        }
        
        else if(req.body.content ==  "지하철 확인(설)"){
        
        
            //sendingData +="지하철 API 서버 문제 때문에, 계속 웃는사자가 죽어버립니다..ㅠㅠ\n우선 이 기능은 닫아두고 화요일까지 고쳐서 업뎃하겠습니다\n 이용해주셔서 감사합니다!\n" ;
            
            //sendButtonSeoul(res,imoticon.addImoticonCry(sendingData));
        
            subwayCheckerSeol(res);
        }
        else if(req.body.content ==  "지하철 확인(국)"){
        
            //sendingData +="지하철 API 서버 문제 때문에, 계속 웃는사자가 죽어버립니다..ㅠㅠ\n우선 이 기능은 닫아두고 화요일까지 고쳐서 업뎃하겠습니다\n 이용해주셔서 감사합니다!\n" ;
            
            //sendButtonGlobal(res,imoticon.addImoticonCry(sendingData));
            subwayCheckerGlobal(res);
        }
        
        else if(req.body.content ==  "버스 확인(설)"){
        
            //sendingData +="현재 GBUS 서비스가 마비되서 이용이 불가능합니다.\n흑흑 왜 하필 오늘 이럴까요ㅠㅠ\n외부 서버 정상화시 바로 작동시키겠습니다\n 이용해주셔서 감사합니다!\n" ;
            
            //sendButtonSeoul(res,imoticon.addImoticonCry(sendingData));
            busChecker(res,0);
        }
        
        else if(req.body.content ==  "버스 확인(국)"){
            
            //sendingData +="현재 GBUS 서비스가 마비되서 이용이 불가능합니다.\n흑흑 왜 하필 오늘 이럴까요ㅠㅠ\n외부 서버 정상화시 바로 작동시키겠습니다\n 이용해주셔서 감사합니다!\n" ;
            
            //sendButtonSeoul(res,imoticon.addImoticonCry(sendingData));
            busChecker(res,1);
        }
        
        else if(req.body.content.indexOf("책") != -1){
            
            bookSearch(req,res);
        }
        
        else if(req.body.content ==  "도서 검색"){
        
            sendingData +="[책 '책 제목']을 입력하라!\n ex) 책 어린왕자\n" ;
            sendtoUser(res,imoticon.addImoticonDefault(sendingData));
        }
        
        else if(req.body.content ==  "날씨(설)"){
            
            todayWeather(res,0);
        }
        
        else if(req.body.content ==  "날씨(국)"){
            
            todayWeather(res,1);
        }
        
        
        else if(req.body.content ==  "학식(설)"){
             
            seolHaksik(res);
        }
        
        else if(req.body.content ==  "학식(국)"){
            
            globalHaksik(res);
        }
        
        else if(req.body.content ==  "골라줘"){
            var menu = new Array('한식','면빵','중식','양식일식','카페','분식','고기','치킨');
            sendingData ="웃는 사자의 추천 메뉴는 !\n"+menu[Math.floor(Math.random() * (7))]+"\n" ;
            sendButtonDefault(res,imoticon.addImoticonSmile(sendingData));
        
        }
        
        else if(req.body.content ==  "맛집 추천(설)"){        //------------------------------------------------------------------------해야대
        
           sendingData ="아직 개발 및 데이터 모으는 중 ..\n거 기다려 주십쇼!\n미안하게 됐수다\n" ;
            sendButtonSeoul(res,imoticon.addImoticonSmile(sendingData));
        }
        else if(req.body.content ==  "맛집 추천(국)"){        //------------------------------------------------------------------------해야대
        
            sendingData ="아직 개발 및 데이터 모으는 중 ..\n거 기다려 주십쇼!\n미안하게 됐수다\n" ;
            sendButtonGlobal(res,imoticon.addImoticonSmile(sendingData));
        }
        
        else if(req.body.content ==  "기타 정보"){
        
            sendingData +="-설캠 지도 / 국캠 지도\n-설국 버스 / 셔틀 버스\n-교내 사이트 모음\n" ;
            sendButtonEtc(res,imoticon.addImoticonDefault(sendingData));
        }
        
        
        
        
        
        
        
        //기타 정보
        
        else if(req.body.content == "설국 버스"){
            sendingData ="●국캠 출발 !!\n>사색의 광장 앞\n07:20\n07:30\n09:15\n12:00\n12:10\n15:00\n●설캠 출발 !!\n>온실 앞\n10:00\n12:00\n13:30\n16:00\n17:50\n18:00\n요금 단돈 1500원!\n\n※ 토요일, 일요일, 공휴일은 운행이 없습니다." ;
            sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
        }
        
        else if(req.body.content =="셔틀 버스"){
            sendingData ="●[국캠-영통역]\n>사색의 광장 앞\n 08:20\n 09:50\n 11:20\n 12:50\n 14:20\n 15:50\n>영통역 3번 출구\n 08:30\n 10:00\n 11:30\n 13:00\n 14:30\n 16:00\n\n500원\n\n●[통학버스등교]"+
                                "\n>수원역\n 08:15\n 08:30\n 09:30\n 10:00"+
                               "\n>부평역\n 06:50\n>주안역\n 06:50\n>송내사거리\n 07:00(송내사거리 발)\n 07:05(부평역 발)\n 07:15(주안역 발)"+
                               "\n\n●[통학버스하교]\n>수원역\n 18:00\n 19:00\n 21:00\n요금 단돈 700원!\n>인천(송내-부평-주안 경유)\n 18:00\n 19:00\n 20:00\n\n요금 단돈 2000원!(등하교 동일)\n" ;
            sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
        }
        
        
        else if(req.body.content =="설캠 지도"){
            sendingData ="1. 정문 2. 경희의료원\n3. 치과병원 4. 치과대학\n5. 의과간호대 6. 의학도서관\n7. 약학대학 8. 행복기숙사(여자동)\n9. 세진원 10. 세화원"+
                        "\n11. [지하]푸른솔 문화관/지하주차장 [지상]경희남중고 운동장\n12. 경희남중·고 13. 대운동장\n14. 네오관/사이버대 15. 교시탑\n16. 청운관 17. 호관대학\n18. 경희여중·고 19. 경희초"+
                        "\n20. 선동호 21. 미술대\n22. 국제교육원 23. 생활과대\n24. 신문방송국 25. 공관\n26. 본관(대학원) 27. 도서관\n28. 노천극장 29. 크라운관/음대\n30. 학관 31. 유치원/사이버대"+
                        "\n32. 무용관 33. 오비스홀/경영대\n34. 정경대 35. 문이과대\n36. 교수회관 37. 평화의전당\n38. 법과대학 39. 제2법학관\n40. 법학부속관 41. 후문\n42. 한의대/박물관 43. 삼의원";
            sendwithPhoto(res, "http://smilelion-corelife.c9users.io/mapSeol",imoticon.addImoticonSmile(sendingData),0);
        }
        
        else if(req.body.content =="국캠 지도"){
            sendingData ="1. 정문 2. 애지원\n3. 르네상스공원 4. 우정원\n5. 잔디구장/주차장 6. 공대\n7. 원자로센터 8. 실습공장동\n9. 체육대학관 10. 외국어대학관\n11. 경희공원 12. 멀관.글관"+
                        "\n13. 제2기숙사 14. 대운동장\n15. 도예관 16. 원예생명공학 온실\n17. 생명과학대학관 18. 실습농장동\n19. 실험연구동 20. 예술디자인대\n21. 국제.경영대학관 22. 학관\n23. 도서관 24. 사색의광장\n25. 주차장"+
                        " 26. 야구장\n27. 종합운동장 28. 노천극장\n29. 연못 30. 전정/응과대\n31. 국제대 32. 천문대" ;
            sendwithPhoto(res, "http://smilelion-corelife.c9users.io/mapGl",imoticon.addImoticonSmile(sendingData),0);
        }
        
        
        else if(req.body.content == "교내 사이트 모음"){
            sendingData ="교내 사이트 모음!\n\n●종합정보시스템\nhttps://khuis.khu.ac.kr\n\n●클라스\nhttps://klas.khu.ac.kr\n\n●커뮤니티\nhttp://community.khu.ac.kr/forum\n\n●인턴\nhttp://intern.khu.ac.kr\n\n●도서관\nhttp://library.khu.ac.kr" ;
            sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
        }
        
        else if(req.body.content ==  "웃어"){
        
            sendingData ="ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ\n";
            sendtoUser(res,imoticon.addImoticonCry(sendingData));
        
        }
        
        else if(req.body.content == "뒤로 가기"){
            sendingData ="뭐가 더 궁금하지?\n"
            sendwithInit(res,imoticon.addImoticonSmile(sendingData));
        }
        
        else
        {
            sendingData ="무슨 말인지 잘 모르겠다 ...\n[사용 방법]를 확인해라!\n" ;
            sendButtonDefault(res,imoticon.addImoticonCry(sendingData));
        }
       	  
       	  
   	 
    });
    
    
	
	// 친구추가
	app.post('/friend', function(req, res){
	    
	    res.json(200);
        res.end();
        
    });
	
	// 친구삭제(차단)
	app.delete('/friend/:user_key', function(req, res){
        res.json(200);
        res.end();
        
    })
	
	// 채팅방 나가기
	app.delete('/chat_room/:user_key', function(req, res){
        res.json(200);
        res.end();
    });
  
    
   
    
    
     function sendButtonSeoul(res,sendingText){
       res.send({
              "message": {
                "text": sendingText
             },
              "keyboard": {
                "type": "buttons",
                "buttons": [
                  "학식(설)",
                  "버스 확인(설)",
                  "지하철 확인(설)",
                  "도서 검색",
                  "날씨(설)",
                  "맛집 추천(설)",
                  "기타 정보",
                  "뒤로 가기"
                  
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
                  "학식(국)",
                  "버스 확인(국)",
                  "지하철 확인(국)",
                  "도서 검색",
                  "날씨(국)",
                  "맛집 추천(국)",
                  "기타 정보",
                  "뒤로 가기"
                  
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
                "셔틀 버스",
                "교내 사이트 모음"]
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
    
     function sendwithPhoto(res,sendingUrl,sendingText,flag){
         if(flag == 0){
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
             
             //날씨, 국캠
         else if(flag == 1){
             res.send({
                      "message": {
                        "text": sendingText,
                        "photo": {
                          "url": sendingUrl,
                          "width": 600,
                          "height": 600
                        }
                     },
                      "keyboard": {
                        "type": "buttons",
                        "buttons": [
                          "학식(국)",
                          "버스 확인(국)",
                          "지하철 확인(국)",
                          "도서 검색",
                          "날씨(국)",
                          "맛집 추천(국)",
                          "기타 정보",
                          "뒤로 가기"
                          
                        ]
                      }
                    });
          	     res.end();
             }
             
             //날씨, 설캠
         else if(flag == 2){
             res.send({
                      "message": {
                        "text": sendingText,
                        "photo": {
                          "url": sendingUrl,
                          "width": 600,
                          "height": 600
                        }
                     },
                       "keyboard": {
                        "type": "buttons",
                        "buttons": [
                          "학식(설)",
                          "버스 확인(설)",
                          "지하철 확인(설)",
                          "도서 검색",
                          "날씨(설)",
                          "맛집 추천(설)",
                          "기타 정보",
                          "뒤로 가기"
                          
                        ]
                      }
                    });
          	     res.end();
             }
     }
         
     function sendwithInit(res,sendingText){
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
     
     
     function subwayCheckerSeol(res){
        var sendingData ="";
        
        var request = require('request');
        var cheerio = require('cheerio');
        var Iconv = require('iconv').Iconv;
        var urlencode = require('urlencode');
        var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
        
        var SearchStationNum = "http://m.seoul.go.kr/traffic/SubInfoNearDetail.do?subSearch=1&station=123&upage=12&flag=3&sflag=2";

        sendingData +="●회기역 지하철 정보!\n";
        
        try{
            request({
            url: SearchStationNum,
            method: 'GET',
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
            "Accept-Language" : "ko-KR,ko;q=0.8"
            },
            encoding: null
            }, function(err, response, body) {
                $ = cheerio.load(iconv.convert(body).toString()); 
        
                var array2 = [];
                
                $('#subArrInfo').each(function(index, ele){
                    var sub = $(this).text().replace(/\s/gi, "").split(']'); 
                    var sub2 = sub[1].split('[');
        
                    sendingData += "▶" + sub[0] + "]" + sub2[0] + "\n[" + sub2[1] + "]" + sub[2]+ "\n\n";
        
                });
                
                sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
            });
        }
        catch(ex){
            sendingData +="ERROR!\n문제를 해결할 수 있게 문의에 넣어 주세요!\n";
            //sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
        }
     }
     
     
     function subwayCheckerGlobal(res){
     
         
        var sendingData="";

        var request = require('request');
        var cheerio = require('cheerio');
        var Iconv = require('iconv').Iconv;
        var iconv = new Iconv('utf-8', 'utf-8//translit//ignore');

        sendingData +="●영통역 지하철 정보!\n";
    
            
        var SearchStationNum = "http://swopenAPI.seoul.go.kr/api/subway/546876586477686938334655746c76/json/realtimeStationArrival/0/2/%ec%98%81%ed%86%b5";
        try{
            request({
            url: SearchStationNum,
            encoding : null,
            headers : {
                "Host":"swopenapi.seoul.go.kr",
                "Accept-Language":"ko-KR,ko;q=0.8",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
            },
            method: 'GET'
            }, function(err, response, body) {
                var temp = body;
                var totalInfo = JSON.parse(iconv.convert(body).toString());
                
                if(totalInfo["status"] == "500"){
                    sendingData += "\n\n운행 정보가 없습니다! \n";
                    sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
                        
                    return;
                }
                
                var array2 = {"toStation": [], "predictTime": []};
                
                for( var i in totalInfo["realtimeArrivalList"]){
        
                        array2["toStation"][i] = totalInfo["realtimeArrivalList"][i]["trainLineNm"];
                        array2["predictTime"][i] = totalInfo["realtimeArrivalList"][i]["arvlMsg2"];
                        
                        sendingData += "▶" + array2["toStation"][i] + "\n" + array2["predictTime"][i] + "\n\n" 
                    }
        
    
                sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
            });
        
        }
        catch(exception){
            sendingData +="ERROR!\n문제를 해결할 수 있게 문의에 넣어 주세요!\n";
            sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
        }
         
     }
     
     

    function bookSearch(req,res){
        var bookName = req.body.content.replace('책',"");
   	    var sendingData="";
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
            try {
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
                        
                        
                    sendingData += "●"+"\n";
                    sendingData += "▶이름\n"+array["title"][index]+"\n";
                    sendingData += "▶저자\n"+array["author"][index]+"\n";
                    sendingData += "▶위치\n"+array["location"][index][0]+"\n";
                    sendingData += "▶상태\n"+array["status"][index][0]+"\n";
                    sendingData += "▶코드\n"+array["code"][index][0]+"\n";
                    
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
                         sendingData += "책이 너무 많습니다.\n상위 4개만 출력합니다!\n";
                         return false;
                    } 
                });
            }
            catch(exception){
                sendingData +="ERROR!\n문제를 해결할 수 있게 문의에 넣어 주세요!\n";
            }
            
            if(index != 0)
                sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
            else{
                sendingData += "책이 존재하지 않습니다!\n\n이 기회에 책 신청을 해보는건 어때요?\n";
                sendButtonDefault(res,imoticon.addImoticonSweat(sendingData));
            }
        });

    }
    
    function busChecker(res,flag){
    
        var sendingData="";
    
        var request = require('request');
        var urlencode = require('urlencode');

        var SearchStationNum = "http://m.gbis.go.kr/search/getBusStationArrival.do?stationId=228000710&osInfoType=M";
        
        sendingData = "●외대앞 버스 정보!\n\n";
        if(flag == 0){
            SearchStationNum = "http://m.gbis.go.kr/search/getBusStationArrival.do?stationId=105000185&osInfoType=M";
            sendingData ="●경희대입구 정류장 정보!\n\n";
            
        }

        request({
        url: SearchStationNum,
        method: 'GET'
        }, function(err, response, body) {
            var totalInfo2 = JSON.parse(body);
            for( var i in totalInfo2["busStationArrivalInfo"]["arrivalList"]){
                sendingData += "▶" + totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["routeName"];
                sendingData += "번 버스 >  "; 
                if(totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"] == "")
                    {
                        sendingData += "는 차고지 대기\n\n";
                        continue;
                    }
                sendingData +=totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"];
                sendingData +="  < 분 후 도착\n\n";
            }
            
            if(flag == 1){
                
                SearchStationNum = "http://m.gbis.go.kr/search/getBusStationArrival.do?stationId=228000723&osInfoType=M";

                request({
                url: SearchStationNum,
                method: 'GET'
                }, function(err, response, body) {
                    var totalInfo2 = JSON.parse(body);
                    for( var i in totalInfo2["busStationArrivalInfo"]["arrivalList"]){
                        if( totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["routeName"] == "M5107"){
                            sendingData += "▶" + totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["routeName"];
                            sendingData += "번 버스 >  "; 
                            if(totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"] == "")
                                {
                                    sendingData += "는 차고지 대기\n\n";
                                    continue;
                                }
                            sendingData +=totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["predictTime1"];
                            sendingData +="  < 분 후 도착\n\n";
                            sendingData +="* M버스의 경우, 경희대 정문 기준 시각"
                        }
                    }
                    
                    sendButtonGlobal(res,imoticon.addImoticonSweat(sendingData));
                });
            }
            else
                sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));

        });

    	
    }
    
    function todayWeather(res,pos){
        var sendingData ="";
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
    
            sendingData +="오늘의 날씨입니다.\n\n현재 ";
            
            if(pos == 0)
                sendingData +="설캠 회기동 기온은 " + arr[4] + " ºC \n";
            else
                sendingData +="국캠 영통 기온은 " + arr[4] + " ºC \n";
                
       	    sendingData +="최저 기온은 " +arr[5]+" ºC \n";
       	    sendingData +="강수 확률은 " +arr[0]+" % \n";
       	    sendingData +="습도는 " +arr[2]+" % 입니다.\n";
        
            var imgUrl;
            if(arr[1] == 1){
                imgUrl = "http://smilelion-corelife.c9users.io/rain"
                 sendingData +="또한 비가 내릴 예정입니다.\n";
            }
            else if(arr[1] == 2){
                imgUrl = "http://smilelion-corelife.c9users.io/rainsnow"
                 sendingData +="또한 비와 눈이 내릴 예정입니다.\n";
            }
            else if(arr[1] == 3){
                imgUrl = "http://smilelion-corelife.c9users.io/snow"
                 sendingData +="또한 눈이 내릴 예정입니다. 아 츕다..\n";
            }
            else{
                if(arr[3] == 1){
                    imgUrl = "http://smilelion-corelife.c9users.io/sun"
                    sendingData +="오늘은 쨍쨍한 맑은 날로 예상 됩니다.\n";
                }
                else if(arr[3] == 2){
                    imgUrl = "http://smilelion-corelife.c9users.io/alittlecloud"
                    sendingData +="오늘은 조금 구름 낀 날씨가 예상 됩니다.\n";
                }
                else if(arr[3] == 3){
                    imgUrl = "http://smilelion-corelife.c9users.io/lotsofcloud"
                    sendingData +="오늘은 많ㅡ은 구름이 예상 됩니다.\n";
                }
                else if(arr[3] == 4){
                    imgUrl = "http://smilelion-corelife.c9users.io/heurim"
                    sendingData +="오늘은 쬐끔 흐린 날이 예상 됩니다.\n";
                }
            }
        
            if(pos == 0)
                sendwithPhoto(res,imgUrl,sendingData,2);
            else
                sendwithPhoto(res,imgUrl,sendingData,1);

        });

    }    
    
    
    
    
     function globalHaksik(res){
     
        var sendingData="";
         
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
        var baburl = "https://bds.bablabs.com/openapi/v1/campuses/wNEmHgn0wx/stores?date="+today;
        
        
        request({
        url: baburl,
        headers: {
          'accesstoken': "!"
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
                 if( k == 0)
                        sendingData +="●제2 기숙사\n\n";
                else if( k == 1)
                    sendingData +="\n●우정원\n\n";  
                else if( k == 2)
                    sendingData +="\n●학생회관\n\n";
                else if( k == 3)
                    sendingData +="\n●공대\n\n";
                else if( k == 4)
                    sendingData +="\n●학생회관_교직원\n\n";
                
                if( totalInfo["stores"][k]["menus"].length == 0)
                    sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                
                for( var i = 0 ; i<  totalInfo["stores"][k]["menus"].length ; i++){
                    sendingData += haksik[k]["description"][i]+" ▶"  + haksik[k]["time"][i]  + "\n\n";
                }
            
                
            }
            
            sendButtonGlobal(res,imoticon.addImoticonDefault(sendingData));

        });
     }
     
     function seolHaksik(res){
         
        var sendingData="";
         
        var d = new Date();
        var today = d.getDay()-1;
        if(today >=5){
            sendingData += "주말은 식단이 없습니다!\n\n";
            sendButtonSeoul(res,imoticon.addImoticonDefault(sendingData));
            return;
        }
         
        var request = require('request');
        var urlencode = require('urlencode');
        var baburl = "";
        var EncodedName ="";

        EncodedName = urlencode("\'청운관1식당\'");
        baburl = "http://coop.khu.ac.kr/wp-admin/admin-ajax.php?action=get_wdtable&table_id=3&wdt_var1=weekday%28curdate%28%29%29&wdt_var2="+today+"&wdt_var3="+EncodedName;
        
        sendingData +="●청운관1식당\n\n";  
    
        request({
        url: baburl,
        method: 'GET'
        }, function(err, response, body) {
            var totalInfo = JSON.parse(body);
            var array2 = {"time": [], "description": []};

            for( var i in totalInfo["data"]){
                if(totalInfo["data"][i]["5"].indexOf("\\n") != -1)
                    array2["description"][i] = totalInfo["data"][i]["5"].split('\\')[0];
                else
                    array2["description"][i] = totalInfo["data"][i]["5"];
                array2["time"][i] = totalInfo["data"][i]["6"];
                
                
            }
            
            if(totalInfo["data"].length == 0)
                sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                
            for( var i = 0 ; i<  totalInfo["data"].length ; i++){
                sendingData += array2["description"][i]+" ▶"  + array2["time"][i] + "\n\n";
                    
            }

            EncodedName = urlencode("\'청운관2식당\'");
            baburl = "http://coop.khu.ac.kr/wp-admin/admin-ajax.php?action=get_wdtable&table_id=2&wdt_var1="+EncodedName+"&wdt_var2=CURDATE%28%29&wdt_var3=weekday%28curdate%28%29%29";
            sendingData +="\n●청운관2식당\n\n";  
        
            request({
            url: baburl,
            method: 'GET'
            }, function(err, response, body) {
                var totalInfo = JSON.parse(body);

                var array2 = {"time": [], "description": []};
    
                for( var i in totalInfo["data"]){
                    if(totalInfo["data"][i]["5"].indexOf("<br") != -1)
                        array2["description"][i] = totalInfo["data"][i]["5"].split('<')[0];
                    else
                        array2["description"][i] = totalInfo["data"][i]["5"];
                    array2["time"][i] = totalInfo["data"][i]["6"];
                    
                }
                
                if(totalInfo["data"].length == 0)
                    sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                    
                for( var i = 0 ; i<  totalInfo["data"].length ; i++){
                    sendingData += array2["description"][i]+" ▶"  + array2["time"][i] + "\n\n";
                }
                
                EncodedName = urlencode("\'푸른솔1식당\'");
                baburl = "http://coop.khu.ac.kr/wp-admin/admin-ajax.php?action=get_wdtable&table_id=2&wdt_var1="+EncodedName+"&wdt_var2=CURDATE%28%29&wdt_var3=weekday%28curdate%28%29%29";
                sendingData +="\n●푸른솔1식당\n\n";  

                request({
                url: baburl,
                method: 'GET'
                }, function(err, response, body) {
                    var totalInfo = JSON.parse(body);
                    var array2 = {"time": [], "description": []};
        
                    for( var i in totalInfo["data"]){
                        if(totalInfo["data"][i]["6"].indexOf("<br") != -1)
                            array2["description"][i] = totalInfo["data"][i]["6"].split('<')[0];
                        else
                            array2["description"][i] = totalInfo["data"][i]["6"];
                        array2["time"][i] = totalInfo["data"][i]["4"];
                        
                        
                    }
                    
                    if(totalInfo["data"].length == 0)
                        sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                        
                    for( var i = 0 ; i<  totalInfo["data"].length ; i++){
                        sendingData += array2["description"][i]+" ▶"  + array2["time"][i] + "\n\n";
                            
                    }
                    
                    EncodedName = urlencode("\'푸른솔2식당\'");
                    baburl = "http://coop.khu.ac.kr/wp-admin/admin-ajax.php?action=get_wdtable&table_id=2&wdt_var1="+EncodedName+"&wdt_var2=CURDATE%28%29&wdt_var3=weekday%28curdate%28%29%29";
                    sendingData +="\n●푸른솔2식당\n\n";  
                    
                    request({
                    url: baburl,
                    method: 'GET'
                    }, function(err, response, body) {
                        
                        var totalInfo = JSON.parse(body);

                        var array2 = {"time": [], "description": []};
            
                        for( var i in totalInfo["data"]){
                            if(totalInfo["data"][i]["6"].indexOf("<br") != -1)
                                array2["description"][i] = totalInfo["data"][i]["6"].split('<')[0];
                            else
                                array2["description"][i] = totalInfo["data"][i]["6"];
                            array2["time"][i] = totalInfo["data"][i]["4"];
                            
                            
                        }
                        
                        if(totalInfo["data"].length == 0)
                            sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                            
                        for( var i = 0 ; i<  totalInfo["data"].length ; i++){
                            sendingData += array2["description"][i]+" ▶"  + array2["time"][i] + "\n\n";
                                
                        }
            
                        sendButtonSeoul(res,imoticon.addImoticonDefault(sendingData));
                    });
        
                    
                });
    
                
            });
        });
         
     }
    
}

