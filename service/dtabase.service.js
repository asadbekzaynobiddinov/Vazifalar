import fs, { writeFileSync } from 'fs'


export const readDatabase = (url) => {

    const data = JSON.parse(fs.readFileSync(url, 'utf-8'))

    if (!data) {
        return null
    }

    return data
}


export const writeDatabase = (url, data) => {
    fs,writeFileSync(url, JSON.stringify(data))
}
