const fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');

function read_file(fileName){

 var sq = ASQ();


 fs.readFile(fileName,sq.errfcb());
    
  return sq;

   


}



function delayMsg(done,contents){
    setTimeout(function(){
        done(contents)
    },1000)
}



function say(fileName){
    return read_file(fileName).then(delayMsg);
}


module.exports.say =  say;