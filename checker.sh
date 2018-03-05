#!/bin/sh

PGM_NAME=server.js

while [ 1 ] ; do
    DATE=`date +%Y%m%d-%H%M%S`
     
    Cnt=`ps -ef|grep $PGM_NAME|grep -v grep|grep -v vi|wc -l`
    PROCESS=`ps -ef|grep $PGM_NAME|grep -v grep|grep -v vi|awk '{print $2}'`
     
     
    if [ ! $Cnt -gt 0 ]
    then
       node server.js 
       echo "$DATE : $PGM_NAME is not running========!"
    fi
    sleep 3
done