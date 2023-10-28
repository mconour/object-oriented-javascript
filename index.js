/* 
You can create two classes, Library and Book, where a library contains a collection of books. 
The Library class can have methods for adding books, removing books, and listing all the books it contains. 
The Book class can have properties like title, author, and publication year.
*/

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
}