const fs = require('fs');

const reqHandeler = (req, res) => {
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
            const params = new URLSearchParams(body);
            const jsonObj = {};
            for (const [key, value] of params.entries()) {
                jsonObj[key] = value;
            }

            console.log("Parsed object:", jsonObj);

            // Save to file
            fs.writeFileSync('9.user.txt', JSON.stringify(jsonObj));

            // Send a response to browser
            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body>');
            res.write('<h1>Form Submitted Successfully!</h1>');
            res.write('<p>Your data has been saved.</p>');
            res.write('</body></html>');
            return res.end();
        });
    }
};


module.exports = reqHandeler;