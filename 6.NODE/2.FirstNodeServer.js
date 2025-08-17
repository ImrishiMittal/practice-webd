// const http = require('http');
// function requestListner(req, res){
//     console.log(req);
// }
// http.createServer(requestListner);
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
});

server.listen(3000);