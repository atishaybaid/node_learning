var args  = require('minimist')(process.argv.slice(2),{string:'file'})
var say = require('./file_read.js');
var ASQ = require('asynquence');
require('asynquence-contrib');

function printHelp(){
    console.log("Help Menu (c) Atishay Baid");
    console.log("Type --help for help menu");
    console.log("Type --file: to read the File");
    process.exit(1);
}


if(!args.file|| args.file==='help'){
    printHelp();
}



function cb(err,content){
    if(err){
        console.error(err)
    } else{
        console.log(content.toString());
    }


}


 say.read_file(args.file,cb);