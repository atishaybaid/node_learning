var http = require('http');
var ASQ = require('asynquence');
require('asynquence-contrib');
const port = 8006;
const host = "localhost";

function handleHTTP(req,res) {


    if(req.method='GET'){
        if(req.url='/'){
        res.writeHead(200,{"content-type":"text/plainJSON"});
       
        

        ASQ(function(done){
            setTimeout(function(){
                 var num = Math.random();
                 done(num)
            },1000)
        }).then(function(done,msg){
            setTimeout(function(){
               done("HelloWorld" + msg);
            })
        }).val(function(msg){
            res.end(msg)
        })


     

        } else{
            res.writeHead(403);
            res.end("GET OUT OF HERE");
        }

        
    } else{
         res.writeHead(403);
         res.end("GET OUT OF HERE");
    }
}

var http_srv = http.createServer(handleHTTP).listen(port,host);