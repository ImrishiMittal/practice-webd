const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>FIRST PAGE</title></head>');
        res.write('<body><h1> WELCOME </h1></body>');
        res.write('</html>');
        return res.end();  // stop here
    } 
    else if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>FIRST PAGE</title></head>');
        res.write('<body><h1> Welcome to home page </h1></body>');
        res.write('</html>');
        return res.end();  // stop here
    }

    // default response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>FIRST PAGE</title></head>');
    res.write('<body><h1> HELLO WORLD </h1></body>');
    res.write('</html>');
    res.end();  // finish here
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
