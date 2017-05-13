const fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');

function read_file(fileName){

 return ASQ(function(done){

    var contents = "";
    var readStream =  fs.createReadStream(fileName);    
      readStream.on('data',(chunk)=>{
        console.log("data called");
        contents = contents + chunk;


      })
      readStream.on('end',()=>{
        done(contents);
      })



})

    
   


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