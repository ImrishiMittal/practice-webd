const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Example</title></head>');
        res.write('<body>');
        res.write('<form action="/submit" method="POST">');
        res.write('Name: <input type="text" name="username"><br><br>');
        res.write('Gender: ');
        res.write('<input type="radio" name="gender" value="Male"> Male ');
        res.write('<input type="radio" name="gender" value="Female"> Female ');
        res.write('<br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body></html>');
        return res.end();
    }

    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', (chunk) => {
            console.log("Chunk received:", chunk.toString());
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log("Full body:", body);

            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body>');
            res.write('<h1>Form Submitted!</h1>');
            res.write('</body></html>');
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
