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
        var baburl = "https://bds.bablabs.com/openapi/v1/campuses/YUfjRgpYTT/stores?date="+today;
        
        
        request({
        url: baburl,
        headers: {
          'accesstoken': "hISRMLnIyfUjg8UZv4GGxq8R7iV4rze6gQnOA1UyLcX8DgWTwY"
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
                        sendingData +="●청운관 1식당\n\n";
                else if( k == 1)
                    sendingData +="\n●푸른솔 1식당\n\n";  
                else if( k == 2)
                    sendingData +="\n●청운관 2식당\n\n";
                else if( k == 3)
                    sendingData +="\n●푸른솔 2식당\n\n";
                
                if( totalInfo["stores"][k]["menus"].length == 0)
                    sendingData +="\n오늘은 식단이 없는 것 같습니다..ㅠㅠ\n\n";
                
                for( var i = 0 ; i<  totalInfo["stores"][k]["menus"].length ; i++){
                    sendingData += haksik[k]["description"][i]+" ▶"  + haksik[k]["time"][i]  + "\n\n";
                }
            
                
            }
            sendButtonGlobal(res,imoticon.addImoticonDefault(sendingData));

        });