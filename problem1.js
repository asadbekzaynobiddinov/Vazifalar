class Library {
    
    books = []
    facvouriteBook = ''

    addBook(book){
        this.books.push(book)
    }

    setFavouriteBook(book){
        this.facvouriteBook = `Sevimli kitobim:\nKitob nomi: ${book.title}\nKitob muallifi: ${book.author}\n`
    }

    getBooksList(){
        let booksList = ''
        for(let book of this.books){
            booksList += `Kitob nomi: ${book.title}\nKitob muallifi: ${book.author}\n------------------------\n\n`
        }
        console.log('\n\nBarcha kitoblar:\n')
        console.log(booksList);
    }

    getFavouriteBook(){
        console.log(this.facvouriteBook);
    }
}


class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

const book1 = new Book("O'tgan kunlar", 'Abdulla Qodiriy')
const book2 = new Book("Xamsa", "Alisher Navoiy")

const library = new Library()

library.addBook(book1)
library.addBook(book2)

library.getBooksList()
library.setFavouriteBook(book1)

library.getFavouriteBook()

