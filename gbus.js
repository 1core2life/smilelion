
    var fs = require("fs");
    var address = 'http://m.gbis.go.kr/search/StationArrivalViaList.do?stationId=228000710&districtCd=2&mobileNo=29040&mobileNoSi=&regionName=%EC%9A%A9%EC%9D%B8&stationName=%EC%99%B8%EA%B5%AD%EC%96%B4%EB%8C%80%ED%95%99&x=127.0784667&y=37.2452167&search=%EC%99%B8%EA%B5%AD%EC%96%B4%EB%8C%80%ED%95%99&osInfoType=M';  
    var page = require('webpage').create();
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit(1);
        } else {
            window.setTimeout(function () {
                var buses = new Array();
                buses= page.evaluate(function() {
                    var k = new Array();
                    k[0] =document.querySelector("[id='200000103_80t']").textContent.replace(/\s/gi,'');   //9 bus  time , before station num
                    k[1] =document.querySelector("[id='200000103_80l']").textContent.replace(/\s/gi,'');
                    k[2] =document.querySelector("[id='234000016_67t']").textContent.replace(/\s/gi,'');   //1112 bus  time , before station num
                    k[3] =document.querySelector("[id='234000016_67l']").textContent.replace(/\s/gi,'');
                    k[4] =document.querySelector("[id='200000115_48t']").textContent.replace(/\s/gi,'');   //5100 bus  time , before station num
                    k[5] =document.querySelector("[id='200000115_48l']").textContent.replace(/\s/gi,'');
                    k[6] =document.querySelector("[id='234000001_134t']").textContent.replace(/\s/gi,'');   //5500-1 bus  time , before station num
                    k[7] =document.querySelector("[id='234000001_134l']").textContent.replace(/\s/gi,'');
                    return k;
                });
                fs.write('dataFile',buses);

            }, 400);
        }
                   

    });

    var fs2 = require("fs");
    var page2 = require('webpage').create();
    var address2 = 'http://m.gbis.go.kr/search/StationArrivalTvItem.do?stationId=228000723&stationName=%EA%B2%BD%ED%9D%AC%EB%8C%80%EC%A0%95%EB%AC%B8&regionNameS=%EC%9A%A9%EC%9D%B8&districtCd=2&mobileNo=29038&mobileNoSi=&x=127.0778833&y=37.24745&staOrder=42&routeDestName=%EA%B2%BD%ED%9D%AC%EB%8C%80%EC%A0%95%EB%AC%B8&routeId=234001243&routeName=M5107&routeType=14&osInfoType=M';  
     page2.open(address2, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit(1);
        } else {
            window.setTimeout(function () {
                var buses2 = new Array();
                buses2= page2.evaluate(function() {
                    var k2 = new Array();
                    k2[0] =document.querySelector("[id='estTime1']").textContent.replace(/\s/gi,'');   //M5107 bus  time , before station num
                    k2[1] =document.querySelector("[id='estTime2']").textContent.replace(/\s/gi,'');
                    return k2;
                });
                fs2.write('mdataFile',buses2);
                phantom.exit();
            }, 1500);
        }
    
    });

 
  // gbus crawling for oi dae bus