import fs from 'fs'
import path from 'path'
const usersPath = path.join(import.meta.dirname, '../database/users.json')

export const getUsers = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    res.json(users)
}

export const addUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'))
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)
    fs.writeFileSync(usersPath, JSON.stringify(users))
    res.status(201).json(newUser)
}


export const updateUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'))
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id))
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body }
        fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))
        res.json(users[userIndex])
    } else {
        res.status(404).json({ message: 'Foydalanuvchi topilmadi' })
    }
}



export const deleteUser = (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersPath, 'utf8'))
    const updatedUsers = users.filter(user => user.id !== parseInt(req.params.id))
    if (users.length !== updatedUsers.length) {
        fs.writeFileSync(usersPath, JSON.stringify(updatedUsers, null, 2))
        res.json({ message: `Foydalanuvchi o'chirildi` })
    } else {
        res.status(404).json({ message: 'Foydalanuvchi topilmadi' })
    }
}



export const getUserById = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'))
    const user = users.find(user => user.id === parseInt(req.params.id))

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'Foydalanuvchi topilmadi' })
    }
}