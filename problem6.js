const fs = require('fs')

const filePath = process.argv[2]

if (!filePath) {
    console.log('Iltimos, o\'qish uchun fayl yo\'lini ko\'rsating.')
    process.exit(1)
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(`Xato: Faylni o'qishda muammo yuz berdi: ${err.message}`)
        return
    }
    console.log('Fayl tarkibi:')
    console.log(data)
})
