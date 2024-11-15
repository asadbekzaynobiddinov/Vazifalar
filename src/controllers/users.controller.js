import { logger } from '../utils/index.js'
import { getAllUsersService } from '../service/index.js'

export const getAllUsers = async (req, res, next) => {
    try {
        const result = await getAllUsersService()
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneUser = async (req, res, next) => {
    try {
        res.status(200).send('ok')
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createUser = async (req, res, next) => {
    try {
        res.status(200).send('ok')
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        res.status(200).send('ok')
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        res.status(200).send('ok')
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
