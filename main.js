import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json())

app.get('/books', (req, res) => {
    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Ma'lumotlarni olishda xato: ", err)
            return res.status(500).send(`Ma'lumotlarni olishda xato`)
        }
        if (data) {
            return res.send(data)
        } else {
            return res.status(404).send(`Ma'lumotlar topilmadi`)
        }
    });
});

app.get('/books/:id', (req, res) => {
    let id = +req.params.id
    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Ma'lumotlarni olishda xato: ", err)
            return res.status(500).send(`Ma'lumotlarni olishda xato`)
        }
        if (data) {
            const books = JSON.parse(data)
            const book = books.find(book => book.id === id);
            if (book) {
                return res.send(book)
            } else {
                return res.status(404).send(`Kitob topilmadi`)
            }
        } else {
            return res.status(404).send(`Ma'lumotlar topilmadi`)
        }
    });
});

app.post('/books', (req, res) => {
    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Ma'lumotlarni olishda xato: ", err)
            return res.status(500).send(`Ma'lumotlarni olishda xato`)
        }

        const books = data ? JSON.parse(data) : []
        

        const currentId = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1

        const book = {
            id: currentId,
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        }

        books.push(book)

        fs.writeFile('books.json', JSON.stringify(books), (err) => {
            err ? res.send(`Kitob qo'shilmadi`) : res.send(`Kitob muvaffaqiyatli qo'shildi`)
        })
    });
})

app.put('/books/:id', (req, res) => {
    const id = +req.params.id

    if (!req.body.title || !req.body.author || !req.body.year) {
        return res.status(400).send("Ma'lumotlar to'liq emas")
    }

    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Ma'lumotlarni olishda xato: ", err)
            return res.status(500).send(`Ma'lumotlarni olishda xato`)
        }

        const books = data ? JSON.parse(data) : []
        let bookFound = false

        for (let book of books) {
            if (book.id === id) {
                book.title = req.body.title
                book.author = req.body.author
                book.year = +req.body.year
                bookFound = true
                break
            }
        }

        if (!bookFound) {
            return res.status(404).send("Kitob topilmadi")
        }

        fs.writeFile('books.json', JSON.stringify(books), (err) => {
            err ? res.send(`Kitob o'zgartirilmadi`) : res.send(`Kitob muvaffaqiyatli o'zgartirildi`)
        })
    });
})

app.delete('/books/:id', (req, res) => {
    const id = +req.params.id

    fs.readFile('books.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Ma'lumotlarni olishda xato: ", err)
            return res.status(500).send(`Ma'lumotlarni olishda xato`)
        }

        const books = data ? JSON.parse(data) : []
        const filteredBooks = books.filter(book => book.id !== id)

        books = filteredBooks

        fs.writeFile('books.json', JSON.stringify(books), (err) => {
            err ? res.send(`Kitob o'chirilmadi`) : res.send(`Kitob muvaffaqiyatli o'chirildi`)
        })
    });
})

app.listen(3000, () => {
    console.log('ishladi')
})
