const fs = require('fs')

// const path = __dirname
// console.log(path)

fs.copyFile(__dirname + '/copy.js', __dirname + '/file_copy.js', (err) => {
    if(err) throw err
    console.log('Nusxa olindi !!!')
})