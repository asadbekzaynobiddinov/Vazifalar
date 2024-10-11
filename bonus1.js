const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'fresh.txt')

fs.stat(filePath, (err, stats) => {
    if (err) {
        fs.writeFile(filePath, "I am fresh and young", (err) => {
            if(err){
                console.log('Faylga yozilmadi')
                return
            }
            console.log('Faylga yozildi')
        })
        return
    }
    console.log("FS operation failed")
})
