import {Router} from 'express'
import { validateUserData } from "../middlewares/auth.middleware.js";
import {registerUser, getProfile, updateUserProfile, removeUser } from '../controllers/users.controller.js'


const router = new Router()

router.post('/register', validateUserData, registerUser)

router.get('/profile/:username', getProfile)

router.put('/profile/:username', updateUserProfile)

router.delete('/profile/:username', removeUser)


export default router

