
          
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
                     sendingData += "\n\n운행 정보가 없습니다! \n역무원도 주무실 시간 입니다!\n\n";
                    
                          
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
           
       