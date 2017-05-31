var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 683 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = {top: 450,
  left: 230,
  width: 730,
  height: 900 };
//the rest of the code is the same as the previous example
page.open('http://www.woojungwon.net/Ghostel/mall_main.php?viewform=B0001_foodboard_list&board_no=1&flag=1', function() {
  setTimeout(function(){
    page.render('./public/woojeong.png');
  },100);
    
});

var page4 = require('webpage').create();
//viewportSize being the actual size of the headless browser
page4.viewportSize = { width: 1024, height: 683 };
//the clipRect is the portion of the page you are taking a screenshot of
page4.clipRect = {top: 200,
  left: 175,
  width: 640,
  height: 535 };
//the rest of the code is the same as the previous example
page4.open('https://bds.bablabs.com/restaurants/LTI0NDg4Nzc1?campus_id=wNEmHgn0wx', function() {
  setTimeout(function(){
    page4.render('./public/gonghak.png');
  },100);
});

var page3 = require('webpage').create();
//viewportSize being the actual size of the headless browser
page3.viewportSize = { width: 1024, height: 683 };
//the clipRect is the portion of the page you are taking a screenshot of
page3.clipRect = {top: 200,
  left: 175,
  width: 640,
  height: 515 };
//the rest of the code is the same as the previous example
page3.open('https://bds.bablabs.com/restaurants/LTI0NDkwMjA0?campus_id=wNEmHgn0wx', function() {
  setTimeout(function(){
    page3.render('./public/haksik.png');
  },1000);
});

var page2 = require('webpage').create();
//viewportSize being the actual size of the headless browser
page2.viewportSize = { width: 1024, height: 683 };
//the clipRect is the portion of the page you are taking a screenshot of
page2.clipRect = {top: 800,
  left: 100,
  width: 500,
  height: 170 };
//the rest of the code is the same as the previous example
page2.open('https://dorm2.khu.ac.kr', function() {
  setTimeout(function(){
    page2.render('./public/jgik.png');
    phantom.exit();
  },5000);
});
