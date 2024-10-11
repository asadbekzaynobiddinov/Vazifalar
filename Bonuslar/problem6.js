const fs = require('fs')

fs.readFile(__dirname + '/fileToRead.txt', 'utf8', (err, data) => {
    if(err) console.log('Fayldan o\'qib bo\'lmadi')
    console.log(data)
})