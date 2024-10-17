import {Router} from 'express'
import { writePost, updatePost, getPosts, deletePost } from '../controllers/posts.controller.js'

const router = new Router()

router.post('/writepost/:username', writePost)

router.put('/editPost/:username/:postid', updatePost )

router.get('/getposts/:username', getPosts)

router.delete('/deletepost/:username/:id', deletePost)

export default router