import { getAllTasks, getTaskById, updateTask, addTask, deleteTask } from "../model/index.js"


export const getTasksService = async (boardId, page, pageSize) => {
    const result = await getAllTasks(boardId, page, pageSize)
    if(result){
        return result
    }else{
        return null
    }
}

export const addTaskService = async (data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await addTask(data)
    if(result){
        return result
    }else{
        return null
    }
}

export const getOneTaskService = async (boardId, id) => {
    const result = await getTaskById(boardId, id)
    if(result){
        return result
    }else{
        return null
    }
}


export const updateTaskService = async (boardId, id, data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await updateTask(boardId, id, data)
    if(result){
        return result
    }else{
        return null
    }
}


export const deleteTaskService = async (boardId, id) => {
    const result = await deleteTask(boardId, id)
    if(result){
        return result
    }else{
        return null
    }
}
