var args  = require('minimist')(process.argv.slice(2),{string:'file'})
var read_file = require('./file_read2.js');

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











 read_file.say(args.file)
.val(function(contents){
    console.log(contents.toString());
})
.or(function(err){
    console.error("Error:" + err);
})