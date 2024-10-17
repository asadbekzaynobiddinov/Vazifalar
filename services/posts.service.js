import fs from 'fs'
import path from 'path'

const dataBaseUrl = path.join(import.meta.dirname, '..', 'database', 'users.json')


export const getAllPosts = (username) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    const user = users.find(user => user.username == username)
    const posts = user.posts
    return posts
}

export const addPost = (username, data) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'));
    let user = users.find(user => user.username === username);
    let id = user.posts.length + 1
    let author = user.username
    let post = {id, author, ...data}
    if (!user) {
        throw new Error(`Foydalanuvchi ${username} topilmadi`);
    } else {
        if (!user.posts) {
            user.posts = []
        }
        user.posts.push(post)        
        fs.writeFileSync(dataBaseUrl, JSON.stringify(users), 'utf-8');
    }
}


export const updateUserPost = (username, postId, postData) => {
    let users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    let user = users.find(user => user.username == username)

    if(!user){
        throw new Error(`Foydalanuvchi topilmadi`)
    }

    let posts = user.posts
    let changed = false
    for(let post of posts){
        if(post.id == postId){
            post.author = username
            post.title = postData.title
            post.body = postData.body
            changed = true
            break
        }
    }
    if(!changed){
        throw new Error(`Post topilmadi`)
    }else{
        fs.writeFileSync(dataBaseUrl, JSON.stringify(users))
    }
}



export const deleteUserPost = (username, postId) => {
    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))
    const user = users.find(user => user.username == username)

    if(!user){
        throw new Error(`Foydalanuvchi topilmadi`)
    }

    const posts = user.posts
    
    let newPosts = posts.filter(post => post.id != postId)

    if(newPosts.length == posts.length){
        throw new Error(`Post topilmadi`)
    }else{
        user.posts = newPosts
        fs.writeFileSync(dataBaseUrl, JSON.stringify(users))
    }
}



