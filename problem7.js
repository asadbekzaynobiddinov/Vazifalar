const fs = require('fs')

try {
    fs.writeFile('message.txt',  'Hello World!', (err) => {
        if(err){
            console.log('Faylga yozilmadi !!!', err)
            return
        }
        console.log('Muvaffaqiyatli yozildi !!!')
    })
} catch (error) {
    console.log(error)
}