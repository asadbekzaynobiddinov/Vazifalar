import { addCitysWeather, getCitysWeather, updateCitysWeather, deleteCitysWeather, getCitysWeatherInOneDay } from "../service/index.js"


export const addCitysWeatherController = (req, res, next) => {
    try {
        const data = req.body
        addCitysWeather(data)
        return res.send(`Ma'lumotlar muvaffaqiyatli qo'shildi`)
    } catch (error) {
        next(error)
    }
}


export const getCitysWeatherController = (req, res, next) => {
    try {
        const { name } = req.params 
        const { page = 1, limit = 10 } = req.query

        const pageNumber = parseInt(page)
        const limitNumber = parseInt(limit)

        const citysWeather = getCitysWeather(name)

        const startIndex = (pageNumber - 1) * limitNumber
        const endIndex = startIndex + limitNumber

        const paginatedResults = citysWeather.slice(startIndex, endIndex)

        res.json({
            results: paginatedResults,
            currentPage: pageNumber,
            totalPages: Math.ceil(citysWeather.length / limitNumber),
            totalResults: citysWeather.length
        })
    } catch (error) {
        next(error)
    }
}


export const updateCitysWeatherController = (req, res, next) => {
    try {
        let data = req.body
        const {name, date} = req.params
        updateCitysWeather(name, date, data)
        return res.send(`${name} ning ${date} kungi ma'lumotlari o'zgartirildi`)
    } catch (error) {
        next(error)
    }
}


export const deleteCitysWeatherController = (req, res, next) => {
    try {
        const {name, date} = req.params
        const result = deleteCitysWeather(name, date)

        if(result.error){
            return res.status(404).send(result.error)
        }

        return res.send(result.success)

    } catch (error) {
        next(error)
    }
}


export const getCitysWeatherInOneDayController = (req, res, next) => {
    try {
        const {name, date} = req.params

        if (!name || !date) {
            throw new Error("Shahar nomi va sana kerak");
        }

        const weather = getCitysWeatherInOneDay(name, date)
        return res.send(weather)
    } catch (error) {
        next(error)
    }
}
