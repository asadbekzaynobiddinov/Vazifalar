import fs from 'fs'
import path from 'path'

const dbFilePath = path.join(
    import.meta.dirname,
    "..",
    "database",
    "users.json"
);

export const profileInfo = (id) => {
    const users = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'))
    const user = users.find(user => user.id == id)

    if(!user){
        throw new Error("Foydalanuvchi topilmadi")
    }
    return user
}



export const updateProfile = (id, newData) => {
    const users = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))
    let userFound = false
    for (let user of users) {
        if (user.id == id) {
            Object.assign(user, newData)
            userFound = true
            break
        }
    }
    if (userFound) {
        fs.writeFileSync(dbFilePath, JSON.stringify(users))
    } else {
        throw new Error(`Foydalanuvchi ${id} topilmadi.`)
    }
};



export const deleteUser = (id) => {
    const users = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))
    let newUsers = users.filter(user => user.id != id)
    if(users.length == newUsers){
        throw new Error(`Foydalanuvchi ${id} topilmadi`)
    }else{
        fs.writeFileSync(dbFilePath, JSON.stringify(newUsers))
    }
}