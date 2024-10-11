const http = require('http');
const fs = require('fs');
const path = require('path');

const readFile = (filePath, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
};

const app = http.createServer((req, res) => {
    let filePath = path.join(__dirname, `${req.url === '/' ? '/home' : req.url}.html`);
    
    if (req.method === 'GET') {
        readFile(filePath, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 - Method Not Allowed</h1>');
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
