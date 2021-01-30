/*
 *  @Soldy\consolerc\2021.01.30\GPL3
 */
'use strict';

/*
 * @prototype
 */
exports.consoleWatchrc=function(){
    

    let cursor = true;
    let on = false;
    let textPromt = '';
    const watch = function(){
        if(on)
            return false;
        on = true;
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', onData);
    }
    const textFIlter = function(){

    }
    const onData = function (key) {

    }
    const onSimple = function (key){

    }
    const onYesNo = function (key){

    }
    const onPassword = function (key){

    }

}



