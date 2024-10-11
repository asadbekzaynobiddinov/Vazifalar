const fs = require('fs')

fs.readFile(__dirname + '/problem1.js', 'utf8', (err, data) => {
    if (err) {
        console.log('Fayl mavjud emas')
        return
    }
    console.log(data)
})