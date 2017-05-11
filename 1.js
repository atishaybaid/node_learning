var args  = require('minimist')(process.argv.slice(2),{string:'file'})
var say = require('./file_read.js');

function printHelp(){
    console.log("Help Menu (c) Atishay Baid");
    console.log("Type --help for help menu");
    console.log("Type --file: to read the File");
    process.exit(1);
}


if(!args.file|| args.file==='help'){
    printHelp();
}



function read_file(fileName){
    say.read_file(fileName);
}








 say.read_file(args.file);