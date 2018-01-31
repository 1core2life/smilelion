

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
var EncodedName = urlencode("경희");

var baburl = "https://bds.bablabs.com/openapi/v1/campuses/YUfjRgpYTT/stores?date="+today;

request({
url: baburl,
headers: {
  'accesstoken': "!!"
},
method: 'GET'
}, function(err, response, body) {
    
    var totalInfo = JSON.parse(body);

    var haksik = Array(4);
    haksik[0] = {"description": [], "time": []};
    haksik[1] = {"description": [], "time": []};
    haksik[2] = {"description": [], "time": []};
    haksik[3] = {"description": [], "time": []};

    for(var k =0; k <4 ; k ++)
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
    
    
    
    console.log(totalInfo["stores"][0]["menus"])
    
    
    
});