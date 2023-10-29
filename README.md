# Book Library

## Description

This JavaScript code defines a simple Book and Library management system. The code is organized into two classes:

1. **Book**: The `Book` class represents a book with properties such as `title`, `author`, and `publicationYear`. It is used to create book instances.

2. **Library**: The `Library` class represents a library that can store and manage a collection of books. It has methods for adding books to the library, removing books from the library, and listing all the books in the library.

## Usage

Here's how you can use this code:

```javascript
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
```

## How to Run

To run the code, you can include it in an HTML file and open it in a web browser or use a JavaScript runtime environment. Simply copy the code into an HTML file or a JavaScript file and execute it.

## Author

This code was written by yours truly.

Feel free to use and modify the code for your own book and library management needs.

Enjoy organizing your book collection! :books: