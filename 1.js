var args  = require('minimist')(process.argv.slice(2),{string:'name'})


function printHelp(){
    console.log("Help Menu (c) Atishay Baid");
    console.log("Type --help for help menu");
    console.log("Type --name:name");
    process.exit(1);
}


if(!args.name|| args.name==='--help'){
    printHelp();
}

console.log(args.name);