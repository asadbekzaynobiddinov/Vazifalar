import { Router } from 'express'
import { getUsers, getUserById, addUser, updateUser, deleteUser } from '../controllers/user_controller.js'

const usersRouter = Router()

usersRouter.get('/', getUsers)

usersRouter.get('/:id', getUserById)

usersRouter.post('/', addUser)

usersRouter.put('/:id', updateUser)

usersRouter.delete('/:id', deleteUser)

export default usersRouter
