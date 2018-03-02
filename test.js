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
    	
/*    	
    sendingData="";

    var request = require('request');
    var cheerio = require('cheerio');
    var iconv = require('iconv-lite');
    var urlencode = require('urlencode');
    var EncodedName = urlencode("회기");

    var SearchStationNum = "http://swopenAPI.seoul.go.kr/api/subway/546876586477686938334655746c76/json/realtimeStationArrival/0/5/"+EncodedName;
    request({
    url: SearchStationNum,
    method: 'GET'
    }, function(err, response, body) {
        var totalInfo = JSON.parse(body);

        var array2 = {"toStation": [], "predictTime": []};
        
        for( var i in totalInfo["realtimeArrivalList"]){

                array2["toStation"][i] = totalInfo["realtimeArrivalList"][i]["trainLineNm"];
                array2["predictTime"][i] = totalInfo["realtimeArrivalList"][i]["arvlMsg2"];
                
                sendingData += array2["toStation"][i] + "\n" + array2["predictTime"][i] + "\n\n" 
            }

        var renderingJson = JSON.stringify(array2);
        console.log(renderingJson)
        
        

           
    });
*/

    /*	
    sendingData="";

    var request = require('request');
    var cheerio = require('cheerio');
    var iconv = require('iconv-lite');
    var urlencode = require('urlencode');
    var EncodedName = urlencode("\'푸른솔1식당\'");
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
    today = yyyy+'년' + mm+'월'+dd +'일';

    var SearchStationNum = "http://coop.khu.ac.kr/wp-admin/admin-ajax.php?action=get_wdtable&table_id=2&wdt_var1="+EncodedName+"&wdt_var2="+today+"&wdt_var3=weekday%28curdate%28%29%29";

    request({
    url: SearchStationNum,
    method: 'GET'
    }, function(err, response, body) {
        var totalInfo = JSON.parse(body);

        var array2 = {"time": [], "subject": []};
        
        for( var i in totalInfo["data"]){

                array2["time"][i] = totalInfo["data"][i]["4"];
                array2["subject"][i] = totalInfo["data"][i]["6"];
                
            }

        var renderingJson = JSON.stringify(array2);
        console.log(totalInfo)
        
        

           
    });
*/

function re(a,b,callback){
    callback(a+b);
}

var b;
var a = re(1,5,function (result){
            console.log(result);
    })


