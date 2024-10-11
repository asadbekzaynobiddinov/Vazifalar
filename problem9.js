const fs = require('fs')

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Fayllarni o\'qishda xato yuz berdi:', err.message)
        return
    }

    console.log('2.2-dars vazifa papkasidagi fayllar:')
    files.forEach(file => {
        console.log(file)
    })
})
