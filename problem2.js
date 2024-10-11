const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'my_nodejs_files')
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
    console.log('Katalog yaratildi:', dirPath)
} else {
    console.log('Katalog allaqachon mavjud:', dirPath)
}

const filePath = path.join(dirPath, 'hello_world.txt')
fs.writeFileSync(filePath, 'Hello, world!\n', 'utf8')
console.log('Fayl yaratildi va yozildi:', filePath)

const fileContent = fs.readFileSync(filePath, 'utf8')
console.log('Fayldagi ma\'lumotlar:\n', fileContent)

const currentDateTime = new Date().toLocaleString()
fs.appendFileSync(filePath, `Hozirgi sana va vaqt: ${currentDateTime}\n`, 'utf8')
console.log('Sana va vaqt faylga qo\'shildi.')

const updatedContent = fs.readFileSync(filePath, 'utf8')
console.log('Yangilangan fayldagi ma\'lumotlar:\n', updatedContent)
