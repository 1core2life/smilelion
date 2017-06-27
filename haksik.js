
    var fs = require("fs");
    var address = 'http://coop.khu.ac.kr/?c=2/52';  
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
                    k[0] =document.querySelector("div.tab-content tbody:not(:nth-child(12))").textContent.replace(/\s/gi,'');   //9 bus  time , before station num
                  
                    return k;
                });
                fs.write('dataFile',buses);
        phantom.exit();
            }, 800);
        }
                   

    });