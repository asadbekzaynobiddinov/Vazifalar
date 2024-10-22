import fs from 'fs';
import path from 'path';

const dbFilePath = path.join(import.meta.dirname, '../database/weather.json')

export const validateWeatherData = (req, res, next) => {
    const { name, gradus, windSpeed, humidity, date } = req.body

    if (!name) {
        return res.status(400).send({ message: "Viloyat nomi (name) majburiy." })
    }
    if (typeof name !== 'string') {
        return res.status(400).send({ message: "Viloyat nomi (name) matn formatida bo'lishi kerak." })
    }

    if (gradus === undefined) {
        return res.status(400).send({ message: "Gradus (temperature) majburiy." })
    }
    if (typeof gradus !== 'number') {
        return res.status(400).send({ message: "Gradus (temperature) raqam formatida bo'lishi kerak." })
    }

    if (windSpeed === undefined) {
        return res.status(400).send({ message: "Shamol tezligi (windSpeed) majburiy." })
    }
    if (typeof windSpeed !== 'number') {
        return res.status(400).send({ message: "Shamol tezligi (windSpeed) raqam formatida bo'lishi kerak." })
    }

    if (humidity === undefined) {
        return res.status(400).send({ message: "Namlik (humidity) majburiy." })
    }
    if (typeof humidity !== 'number') {
        return res.status(400).send({ message: "Namlik (humidity) raqam formatida bo'lishi kerak." })
    }

    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/
    if (!date || !dateRegex.test(date)) {
        return res.status(400).send({ message: "Sanani 'kun.oy.yil' formatida kiriting (masalan: 24.12.2024)." })
    }

    try {
        const data = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))
        const existingData = data.find(record => record.name === name && record.date === date)
        if (existingData) {
            return res.status(400).send({ message: `${date} sanasida ${name} viloyati uchun ma'lumot allaqachon mavjud.` })
        }
    } catch (error) {
        return res.status(500).send({ message: "Ma'lumotlarni o'qishda xato yuz berdi." })
    }
    next()
}
