const path = require('path')
const fs = require('fs')

const currentDir = __dirname
console.log('Hozirgi path:', currentDir)

const relativePath = path.join('.', 'docs', 'readme.md')
console.log('Nisbiy path:', relativePath)

const docsDir = path.join(currentDir, 'docs')

if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir)
    console.log('"docs" papkasi yaratildi:', docsDir)
} else {
    console.log('"docs" papkasi mavjud:', docsDir)
}

const readmeFilePath = path.join(docsDir, 'readme.md')
fs.writeFileSync(readmeFilePath, '# This is a README file.\n')
console.log('"readme.md" fayli yaratildi')
