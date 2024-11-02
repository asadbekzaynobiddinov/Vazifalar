import { register, login } from '../model/index.js'


export const registerService = async (data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await register(data)

    if(result){
        return result 
    }else{
        return null
    }
}


export const loginService = async (data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await login(data)

    if(result){
        return result 
    }else{
        return null
    }
}