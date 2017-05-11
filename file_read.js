const fs = require('fs');


function read_file(fileName){

    var contents = fs.readFileSync(fileName);
    console.log(contents.toString());
}


module.exports.read_file =  read_file;