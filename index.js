class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook = (book) => this.books.push(book);
    removeBook = (book) => {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    listBooks = () => {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.publicationYear}`);
        });
    }
}

// Create a few book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Create a library instance
const library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// List the books in the library
library.listBooks();

// Remove a book from the library
library.removeBook(book1);

// List the remaining books in the library
library.listBooks();
