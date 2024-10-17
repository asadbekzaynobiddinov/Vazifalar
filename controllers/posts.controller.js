import { addPost, updateUserPost, getAllPosts,  deleteUserPost} from '../services/posts.service.js';

export const writePost = (req, res) => {
    try {
        addPost(req.params.username, req.body)
        res.status(200).send({message: 'Post muvaffaqiyatli yozildi'})
    } catch(error){
        res.send({message: error.message})
    }
}

export const updatePost = (req, res) => {
    try {
        const {username, id} = req.params
        const postData = req.body
        updateUserPost(username, id, postData)
        res.status(200).send({message: `Post muvaffaqiyatli o'zgartirildi`})
    }catch(error){
        res.send({message: error.message})
    }
}

export const getPosts = (req, res) => {
    try {
        const username =req.params.username
        const posts = getAllPosts(username)
        res.send(posts)
    }catch (error){
        res.sens({message: error.message})
    }
}

export const deletePost = (req, res) => {
    try{
        const username = req.params.username
        const id = req.params.id
        console.log(id)
        deleteUserPost(username, id)
        res.send({message: "Post muvaffaqiyatli o'chirildi"})
    }catch(error){
        res.send({message: error.message})
    }
}