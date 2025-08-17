const http = require('http');

const server = http.createServer((req, res) => {
    // Show the form
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Example</title></head>');
        res.write('<body>');
        res.write('<h2>Fill the form</h2>');
        res.write('<form action="/submit" method="POST">');
        res.write('Name: <input type="text" name="username"><br><br>');
        res.write('Gender: <input type="radio" name="gender" value="Male"> Male ');
        res.write('<input type="radio" name="gender" value="Female"> Female ');
        res.write('<br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body></html>');
        return res.end();
    }

    // Handle the POST submit and redirect
    if (req.method === 'POST' && req.url === '/submit') {
        // Don’t bother parsing form data, just redirect
        res.writeHead(302, { Location: '/thankyou' });
        return res.end();
    }

    // Thank you page
    if (req.method === 'GET' && req.url === '/thankyou') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>');
        res.write('<h1>Thank you for submitting!</h1>');
        res.write('<a href="/">Go back</a>');
        res.write('</body></html>');
        return res.end();
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
