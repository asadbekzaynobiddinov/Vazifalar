import fs from 'fs'
import path from 'path'

const dataBaseUrl = path.join(import.meta.dirname, '..', 'database', 'users.json')

export const saveUser = (userData) => {
    let users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    const id = users.length + 1
    let newUser = { id, ...userData }
    newUser.posts = []
    users.push(newUser)
    fs.writeFileSync(dataBaseUrl, JSON.stringify(users), (err) => {
        if (err) {
            throw new Error(err)
        }
    })
    return newUser
}


export const profileInfo = (username) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf8'))
    const user = users.find(user => user.username == username)

    if(!user){
        throw new Error("Foydalanuvchi topilmadi")
    }
    return user
}


export const updateProfile = (username, newData) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    let userFound = false
    for (let user of users) {
        if (user.username == username) {
            Object.assign(user, newData)
            userFound = true
            break
        }
    }
    if (userFound) {
        fs.writeFileSync(dataBaseUrl, JSON.stringify(users))
    } else {
        throw new Error(`Foydalanuvchi ${username} topilmadi.`)
    }
};



export const deleteUser = (username) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    let newUsers = users.filter(user => user.username != username)
    if(users.length == newUsers){
        throw new Error(`Foydalanuvchi ${username} topilmadi`)
    }else{
        fs.writeFileSync(dataBaseUrl, JSON.stringify(newUsers))
    }
}




