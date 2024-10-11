const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<a href="/home">Home Page</a><br><a href="/about">About Us</a>');
        res.end();
    } 

    if (req.method === 'GET' && req.url === '/about') {
        let filePath = path.join(__dirname, '/about.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            }
        });
    } 
    if (req.method === 'GET' && req.url === '/home') {
        let filePath = path.join(__dirname, '/home.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            }
        });
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
