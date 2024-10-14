const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
        res.writeHead(204)
        res.end()
        return
    }

    if (req.method === 'POST' && req.url === '/register') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const userData = JSON.parse(body)

            fs.readFile('usersData.json', (err, data) => {
                if (err && err.code !== 'ENOENT') {
                    res.writeHead(500, { 'Content-Type': 'text/plain' })
                    return res.end('404 - Not Found')
                }

                let users = []
                if (data) {
                    users = JSON.parse(data)
                }

                let haveInUsers = false

                for (let user of users) {
                    if (user['username'] == userData['username']) {
                        haveInUsers = true
                    }
                }

                if (!haveInUsers) {
                    users.push(userData)

                    fs.writeFile('usersData.json', JSON.stringify(users, null, 2), (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' })
                            return res.end('404 - Not Found')
                        }

                        res.writeHead(200, { 'Content-Type': 'text/plain' })
                        res.end("404 - Not Found")
                    })
                }else{
                    console.log('Bu username allaqachon mavjud')
                }

            })
        })
    } else if (req.method === 'POST' && req.url === '/login') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {

            let user = JSON.parse(body)

            fs.readFile('usersData.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log(`Xato: ${err}`)
                    return
                }

                const users = JSON.parse(data)

                for (let jsonData of users) {
                    if (jsonData['username'] == user['username'] && jsonData['password'] == user['password']) {
                        console.log('Tizimga kirdingiz')
                        break
                    }
                }

            })

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Login successful');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found')
    }
})

server.listen(5000, () => {
    console.log('Server is running on http://127.0.0.1:5000/')
})
