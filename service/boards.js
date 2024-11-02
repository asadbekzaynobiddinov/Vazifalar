import { getAllBoards, getBoardById, addBoard, updateBoards, deleteBoard } from "../model/index.js"


export const getBoardsService = async (user_id, page, pageSize) => {
    const result = await getAllBoards(user_id, page, pageSize)
    if(result){
        return result
    }else{
        return null
    }
}

export const addBoardService = async (data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await addBoard(data)
    if(result){
        return result
    }else{
        return null
    }
}

export const getOneBoardService = async (id) => {
    const result = await getBoardById(id)
    if(result){
        return result
    }else{
        return null
    }
}


export const updateBoardService = async (id, data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await updateBoards(id, data)
    if(result){
        return result
    }else{
        return null
    }
}


export const deleteBoardService = async (id) => {
    const result = await deleteBoard(id)
    if(result){
        return result
    }else{
        return null
    }
}
