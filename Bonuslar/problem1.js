const fs = require('fs')

fs.access('redme.txt', fs.constants.F_OK, (err) => {
    if (!err) {
        console.log("FS operation failed")
        return
    }
    fs.writeFile('fresh.txt', "I am fresh and young", (err) => {
        if (err) throw err
        console.log('Faylga yozildi')
    })
})
