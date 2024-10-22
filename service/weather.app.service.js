import { readDatabase, writeDatabase } from "./dtabase.service.js"
import path from 'path'


const dbFilePath = path.join(import.meta.dirname, '../database/weather.json')


export const getCitysWeather = (name) => {
    const data = readDatabase(dbFilePath)

    if(!data){
        throw new Error("Ma'lumotlar topilmadi")
    }

    const citysWeather = data.filter(city => city.name == name)
    return citysWeather
}


export const addCitysWeather = (citysWeather) => {
    let data = readDatabase(dbFilePath)

    let weathers = data ? data: []

    weathers.push(citysWeather)
    writeDatabase(dbFilePath, data)
}


export const getCitysWeatherInOneDay = (name, date) => {
    const data = readDatabase(dbFilePath)

    if(!data){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }


    data.forEach(city => {
        console.log(`Shahar: ${city.name}, Sana: ${city.date}`);
    });

    const citysWeather = data.find(city => city.name == name && city.date == date)


    if(!citysWeather){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }

    return citysWeather
}


export const updateCitysWeather = (name, date,  citysWeather) => {
    let data = readDatabase(dbFilePath)

    if(!data){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }

    let currentWeather = data.find(city => city.name == name && city.date == date)
    
    if(!currentWeather){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }

    Object.assign(currentWeather, citysWeather)
    writeDatabase(dbFilePath, data)
}



export const deleteCitysWeather = (name, date) => {
    let data = readDatabase(dbFilePath)

    if(!data){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }

    let newWeather = data.filter(city => city.name != name && city.date != date)

    if(newWeather.length == data.length){
        return { error: `${name} viloyatining ${date} kungi ma'lumotlari topilmadi` }
    }

    writeDatabase(dbFilePath, newWeather)
    return {success: `${name} viloyatiningning ${date} kungi malumotlari o'chirildi`}
}
