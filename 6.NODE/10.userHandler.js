const http = require('http');
const req = require('./10.Module')
const server = http.createServer(req);
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});