var http = require('http');
var ASQ = require('asynquence');
require('asynquence-contrib');

var node_static = require("node-static");
var static_files = new node_static.Server(__dirname);

const port = 8006;
const host = "localhost";

function handleHTTP(req,res) {


    if(req.method='GET'){
       if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
            req.addListener("end",function(){
                req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
                static_files.serve(req,res);
            });
            req.resume();
        }
        else {
         res.writeHead(403);
         res.end("GET OUT OF HERE");
        
        } 
    }
    else{
         res.writeHead(403);
         res.end("GET OUT OF HERE");
    }
}

var http_srv = http.createServer(handleHTTP).listen(port,host);