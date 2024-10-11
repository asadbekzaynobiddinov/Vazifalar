const fs = require('fs')

fs.unlink(__dirname + '/delete.js', (err) => {
    if(err) {
        console.log('Fayl mavjud emas')
        return
    }
    console.log('Fayl o\'chirildi')
})