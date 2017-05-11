const fs = require('fs');


function read_file(fileName,cb){

 fs.readFile(fileName,function(err,content){
    if(err){
        cb(err);
    } else{
        setTimeout(function(){
            cb(null,content);
        },1000)
    }
 });
    
  

   


}


module.exports.read_file =  read_file;