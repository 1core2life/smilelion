exports.exPhantomBus =function(){
    var childProcess = require('child_process'); 
    var phantomjs = require('phantomjs'); 
    var binPath = phantomjs.path; 
    var path = require('path'); 
    var childArgs = [ path.join(__dirname, 'gbus.js') ]; 
    

     childProcess.execFileSync(binPath, childArgs);


}
//bus crawling 


exports.exWooJeongwon =function(){
 var childProcess = require('child_process'); 
    var phantomjs = require('phantomjs'); 
    var binPath = phantomjs.path; 
    var path = require('path'); 
    var childArgs = [ path.join(__dirname, 'woojeongwon.js') ]; 
    

     childProcess.execFileSync(binPath, childArgs);
}


//phantomjs exe with node , this will be part of main.js , parsing process


