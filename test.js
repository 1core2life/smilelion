/* var request = require('request');
        var urlencode = require('urlencode');
        var EncodedName = urlencode("경희대정문");
        
        var sendingData;
        var SearchStationNum = "http://m.gbis.go.kr/search/getStationPageList.do?tabMode=&serviceKey=1234567890&pageSize=15&pageNo=1&keyword="
        +EncodedName+"&routeType=41%2C42%2C43%2C51%2C52%2C53&searchData="+EncodedName+"&osInfoType=M";
    
        sendingData = "외대 앞 버스 정보!\n";
        
        
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

            SearchStationNum = "http://m.gbis.go.kr/search/getBusStationArrival.do?stationId="+array["stationId"][1]+"&osInfoType=M";
            request({
            url: SearchStationNum,
            method: 'GET'
            }, function(err, response, body) {
                var totalInfo2 = JSON.parse(body);
                for( var i in totalInfo2["busStationArrivalInfo"]["arrivalList"]){
                    if( totalInfo2["busStationArrivalInfo"]["arrivalList"][i]["routeName"] == "M5107"){
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
                }
                
               
             console.log(sendingData)

            });
        });
    	*/
    	
  	
    var sendingData="";

    var request = require('request');
    var cheerio = require('cheerio');

    var SearchStationNum = "http://bus.go.kr/getSubway_6.jsp?statnId=1075075240&subwayId=1075";
    
     sendingData +="●영통역 지하철 정보!\n\n";
     
    request({
    url: SearchStationNum,
    method: 'GET'
    }, function(err, response, body) {
         var $ = cheerio.load(body);

            try {
                $(".arvl2").each(function () {
                    var st =  $(this).text().replace(/(\s*)/gi, "").split(':');
                    
                    sendingData += "▶[청명방면]\n\n"+st[1]+"\n\n";
                    
                    
                });
                
                 $(".arvl1").each(function () {
                    var st =  $(this).text().replace(/(\s*)/gi, "").split(':');
                    
                    sendingData += "▶[망포방면]\n\n"+st[1]+"\n";
                    
                
    
                   
                });
            }
            catch(exception){
                sendingData +="ERROR!\n문제를 해결할 수 있게 문의에 넣어 주세요!\n";
            }
            
            console.log(sendingData)
           
    });

/*
   
var request = require('request');
var cheerio = require('cheerio');
var Iconv = require('iconv').Iconv;
var urlencode = require('urlencode');
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');

var SearchStationNum = "http://m.seoul.go.kr/traffic/SubInfoNearDetail.do?subSearch=1&station=123&upage=12&flag=3&sflag=2";
var sendingData ="";
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

            sendingData += sub[0] + "]" + sub2[0] + "\n[" + sub2[1] + sub[2]+ "\n";

        });
        
        //sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
    console.log(sendingData);
    });
}
catch(ex){
    sendingData +="ERROR!\n문제를 해결할 수 있게 문의에 넣어 주세요!\n";
    //sendButtonSeoul(res,imoticon.addImoticonSweat(sendingData));
}
*//*

var sendingData="";

        var d = new Date();
        var today = d.getDay()-1;
        if(today >=5){
            sendingData += "주말은 식단이 없습니다!\n\n";
            //sendButtonSeoul(res,imoticon.addImoticonDefault(sendingData));
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
    console.log(totalInfo);
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
            
                        //sendButtonSeoul(res,imoticon.addImoticonDefault(sendingData));
                    });
        
                    
                });
    
                
            });
        });
         
     */