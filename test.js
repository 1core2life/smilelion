var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var urlencode = require('urlencode');
var EncodedName = urlencode("영통");

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
        }

    var renderingJson = JSON.stringify(array2);
    console.log(renderingJson);

       
});