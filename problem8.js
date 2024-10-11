
const fs = require('fs')

try {
    fs.appendFile('message.txt',  '\nproblem8.js dan qo\'shilgan text', (err) => {
        if(err){
            console.log('Faylga yozilmadi !!!', err)
            return
        }
        console.log('Muvaffaqiyatli yozildi !!!')
    })
} catch (error) {
    console.log(error)
}