    var d = new Date();
    var today = d.getDate();
     setInterval(function(){
        
        var nowDay = d.getDate();
        if(today != nowDay)
            {
                today = nowDay;
                var phantoms = require('./exphantom.js');    //start crawling !
                phantoms.exWooJeongwon();
            }
    },600000);
 //set time checker 10 minutes , if ok , call capturing func