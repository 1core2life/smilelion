 var request = require('request');
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
    	