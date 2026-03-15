const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return (`${this.title} by ${this.author}, ${pages}, ${this.read} with ID of ${this.id}`);
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 384, "read");
addBookToLibrary("Steve Jobs", "Walter Isaacson", 700, "read");
addBookToLibrary("Courage to be disliked", "Kishimi Ichiro", 264, "not read");

function displayBooks() {
    const booksContainer = document.querySelector(".books-container");

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        card.textContent = `${book.title} by ${book.author}`;

        booksContainer.appendChild(card);
    });
}

displayBooks();
